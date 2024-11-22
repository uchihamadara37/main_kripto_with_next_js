"use client"
import { useRouter, useSearchParams } from "next/navigation"
import { DecryptAES, EncryptAES } from "../lib/encryptAES";
import { EncryptVigenere, DecryptVigenere } from "@/lib/encryptVigenere"
import { useCallback, useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils";
import TableExportExcel from "@/components/miniPages/exportCSV";
import Antrean from "@/components/miniPages/antrean";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from 'lucide-react';

export function formatTanggalIndonesia(isoDateString: string): string {
    // Buat Date object
    const date = new Date(isoDateString)

    // Konversi ke zona waktu lokal (WIB)
    // Kurangi 7 jam dari UTC
    const localDate = new Date(date.getTime() + (7 * 60 * 60 * 1000))

    const bulanIndonesia = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ]

    const hari = localDate.getUTCDate()
    const bulan = bulanIndonesia[localDate.getUTCMonth()]
    const tahun = localDate.getUTCFullYear()

    const jam = localDate.getUTCHours().toString().padStart(2, '0')
    const menit = localDate.getUTCMinutes().toString().padStart(2, '0')

    return `${hari} ${bulan} ${tahun} jam ${jam}:${menit}`
}
export function formatTanggalLahir(isoDateString: string): string {
    // Buat Date object
    const date = new Date(isoDateString)

    // Konversi ke zona waktu lokal (WIB)
    // Kurangi 7 jam dari UTC
    const localDate = new Date(date.getTime() + (7 * 60 * 60 * 1000))

    const bulanIndonesia = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ]

    const hari = localDate.getUTCDate()
    const bulan = bulanIndonesia[localDate.getUTCMonth()]
    const tahun = localDate.getUTCFullYear()
    return `${hari} ${bulan} ${tahun}`
}

type user = {
    id: number,
    name: string,
    email: string,
    nik: string,
    birth_date: string,
    status: string | null,
    role: string | null,
    address: string | null,
    gender: string | null
}
type riwayat = {
    id: number,
    id_user: number,
    keluhan: string,
    keterangan: string | null,
    id_admin: number,
    timestamp: string,
    name_admin: string
}
type allRiwayat = {
    nama_pasien: string,
    nik: number,
    id: number,
    id_user: number,
    keluhan: string,
    keterangan: string | null,
    id_admin: number,
    timestamp: string,
    name_admin: string
}
function base64ToHex(base64: string): string {
    const buffer = Buffer.from(base64, 'base64')
    return buffer.toString('hex')
}

function hexToBase64(hexString: string): string {
    const buffer = Buffer.from(hexString, 'hex')
    return buffer.toString('base64')
}


export default function Play() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const emailLabel = EncryptVigenere("email", "jangkrik")
    const emaile = searchParams.get(emailLabel);
    const [isLoading, setIsloading] = useState(true);

    const [riwayat, setRiwayat] = useState<riwayat[]>([])
    const [allRiwayat, setAllRiwayat] = useState<allRiwayat[]>([])
    const [userBiasa, setUserBiasa] = useState<user[]>([])

    const [selectedRowUser, setSelectedRowUser] = useState<user | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const [showUser, setShowUser] = useState("user")

    const [keluhan, setKeluhan] = useState('')
    const [diagnosis, setDiagnosis] = useState('')

    const [noAntre, setNoAntre] = useState(0)

    const handleCellClick = (row: user) => {
        setSelectedRowUser(row);
        setIsDialogOpen(true);
    };

    const handleDialogClose = () => {
        setIsDialogOpen(false);
        setSelectedRowUser(null);
        setKeluhan('')
        setDiagnosis('')
    };


    const [user, setUser] = useState<user>({
        id: 0,
        name: '',
        email: '',
        nik: '',
        birth_date: '',
        status: null,
        role: null,
        address: null,
        gender: null
    })
    // console.log("emaile :", emaile)

    if (!emaile) {
        router.replace("/")
        return null;
    }

    const fetchAllRiwayat = async () => {
        const response = await fetch(`/api/riwayat/`)
        const data = await response.json()
        setAllRiwayat(data.data)
    }



    const email = DecryptVigenere(emaile, "jangkrik");
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                console.log("email didapat", email)
                const data = await fetch(`http://localhost:3000/api/email/${email}`,
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    }
                )
                if (data.ok) {
                    const datas = await data.json()
                    console.log("Tipe data:", typeof datas.data)
                    console.log("Struktur data:", Object.keys(datas.data))
                    console.log("Isi lengkap:", datas.data)
                    if (datas.data && datas.data.length > 0) {
                        const item = datas.data[0]
                        // alert(`email tersebut berhasil ditemukan ${item.email}`)
                        setUser(item)
                        console.log("data user:", user)

                    } else {
                        alert("Silakan login terlebih dahulu")
                        router.replace("/")
                        console.log("lanjut")
                    }
                }
            } catch (error) {
                console.log(error)
            }

        }

        fetchUserData();
    }, [])

    useEffect(() => {
        const fetchRiwayat = async () => {

            const response = await fetch(`/api/riwayat/${user.id}`)
            const data = await response.json()
            setRiwayat(data.data)
        }

        const fetchUserBiasa = async () => {
            const response = await fetch(`/api/userBiasa`)
            const data = await response.json()
            setUserBiasa(data.data)

        }

        if (user.id && user.role != "admin") {
            fetchRiwayat()
        } else {
            fetchUserBiasa();
            fetchAllRiwayat();
        }
    }, [user])

    useEffect(() => {
        console.log("Effect user:", user)
    }, [user])
    useEffect(() => {
        console.log("Effect riwayat:", riwayat)
    }, [riwayat])
    useEffect(() => {
        console.log("Effect noAntre oioi:", noAntre)
    }, [noAntre])

    useEffect(() => {
        const fetchNoAntre = async () => {
            console.log("user id", user.id)
            const response = await fetch(`/api/antrean/${user.id}`)
            const data = await response.json()
            console.log("data antre", data)
            if (data.data.length > 0) {
                setNoAntre(data.data[0].no_urut)
            } else {
                setNoAntre(0)
            }
        }
        fetchNoAntre()

        const interval = setInterval(() => {
            fetchNoAntre()
        }, 15000)

        return () => clearInterval(interval)
    }, [user])

    const handleAddriwayat = useCallback(async () => {
        const jadi = confirm("Apakah anda yakin ingin menyimpan riwayat ini?")

        if (jadi) {
            // mempersiapkan payload
            const riwayat = {
                id_user: selectedRowUser?.id,
                keluhan: keluhan,
                keterangan: diagnosis,
                id_admin: user.id,
            }
            const response = await fetch('http://localhost:3000/api/riwayat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Connection': 'keep-alive',
                    'Keep-Alive': 'timeout=5'
                },
                body: JSON.stringify(riwayat), // Mengubah data ke JSON string
            });

            if (!response.ok) {
                throw new Error('Error adding user');
            }

            const data = await response.json();
            console.log('riwayat added successfully:', data);

            fetchAllRiwayat();
            setKeluhan('')
            setDiagnosis('')
            setIsDialogOpen(false)
            setSelectedRowUser(null)
        }
    }, [keluhan, diagnosis])

    const handleAmbilAntri = async () => {
        const addAntr = {
            id_user: user.id,
            nama: user.name
        }
        const response = await fetch('http://localhost:3000/api/antrean', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Connection': 'keep-alive',
                'Keep-Alive': 'timeout=5'
            },
            body: JSON.stringify(addAntr), // Mengubah data ke JSON string
        });

        if (!response.ok) {
            throw new Error('Error adding user');
        }

        const data = await response.json();
        console.log("hasil data post antre", data)
        console.log("hasil data noMax", data.noMax)
        if (data.noMax) {
            console.log("nomax mase :", data.noMax)
            setNoAntre(data.noMax)
        }
        if (data.message) {
            alert(data.message)
            return;
        }



    }

    return (
        <div className="root-login min-h-screen bg-gray-50">
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Content wrapper */}
                <div className="max-w-7xl mx-auto">
                    {/* Main content area */}
                    <div className="bg-white bg-opacity-95 rounded-lg shadow-sm p-6">


                        <div className="p-4">
                            <p className="text-3xl mb-3">{user.name}</p>

                            {user.role != "admin" ? (
                                <div className="">
                                    {/* <h1 className="w-1/2 mb-2"><Badge>Alamat</Badge>  {user.address}</h1> */}
                                    <h1 className=""><Badge>Tanggal Lahir</Badge> {formatTanggalLahir(user.birth_date)} <Badge>Gender</Badge> {user.gender}</h1>
                                    <div className="mb-4 flex flex-row gap-4">
                                        {noAntre == 0 ? (
                                            <div className=" mt-10 flex flex-col lg:flex-row gap-3">
                                                <Button
                                                    variant={"default"}
                                                    className=" bg-green-600"
                                                    onClick={() => handleAmbilAntri()}
                                                >Ambil Antrean Sekarang</Button>
                                                <p className="text-center lg:text-start font-semibold">Silakan ambil antrean jika anda serius ingin kunjungan medis ke pukesmas.</p>

                                            </div>
                                        ) : (
                                            <Alert variant={"destructive"} className='border-green-600 text-green-600 [&>svg]:text-green-600 mt-5'>
                                                <Terminal className="h-4 w-4" />
                                                <AlertTitle>Selamat!</AlertTitle>
                                                <AlertDescription>
                                                    Nomor antrian anda {noAntre}. Silakan menunggu panggilan petugas.
                                                </AlertDescription>
                                            </Alert>
                                        )}
                                    
                                    </div>
                                    <h1 className="text-center text-2xl mb-5 lg:mb-3 font-bold text-orange-950">Daftar Riwayat Anda Ke Pukesmas</h1>
                                    <div className="rounded-md border border-orange-700">
                                        <Table className=''>

                                            <TableHeader>
                                                <TableRow className='border-b-2  border-orange-700 bg-orange-700 bg-opacity-10'>
                                                    <TableHead className="font-bold text-slate-900 w-[12rem] lg:w-[18rem] ">Waktu kunjungan pasien</TableHead>
                                                    <TableHead className="font-bold text-slate-900 w-[10rem] lg:w-[8rem]">Keluhan</TableHead>
                                                    <TableHead className="font-bold text-slate-900 w-[20rem]">Diagnosis</TableHead>
                                                    <TableHead className="font-bold text-slate-900 w-[10rem]">Dokter / Perawat</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {riwayat.map((rw) => (
                                                    <TableRow
                                                        className="cursor-pointer border-b border-orange-700"
                                                        key={rw.id}
                                                    >

                                                        <TableCell className='border-0 lg:border-r-0 border-orange-700'>{formatTanggalIndonesia(rw.timestamp)}</TableCell>
                                                        <TableCell className='border-0 lg:border-r-0 border-orange-700'>{rw.keluhan}</TableCell>
                                                        <TableCell className='border-0 lg:border-r-0 border-orange-700'>{rw.keterangan}</TableCell>
                                                        <TableCell className=' lg:border-r-0 border-orange-700'>{rw.name_admin}</TableCell>

                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </div>

                                </div>
                            ) : (
                                <div className="flex flex-col -mx-5 lg:mx-0 -mb-5 lg:mb-0">

                                    <div className="mt-3 flex flex-wrap justify-center gap-3 mb-5">
                                        <Button className={cn("bg-green-500", (showUser == "user" ? "bg-primary" : ""))}
                                            onClick={() => setShowUser("user")}
                                        >Pasien Terdaftar</Button>
                                        <Button className={cn("bg-green-600", (showUser == "riwayat" ? "bg-primary" : ""))}
                                            onClick={() => setShowUser("riwayat")}
                                        >Riwayat Kunjungan</Button>
                                        <Button className={cn("bg-green-700", (showUser == "export" ? "bg-primary" : ""))}
                                            onClick={() => setShowUser("export")}
                                        >Export Excel</Button>
                                        <Button className={cn("bg-green-800", (showUser == "antri" ? "bg-primary" : ""))}
                                            onClick={() => setShowUser("antri")}
                                        >Lihat Antrean</Button>
                                    </div>

                                    {showUser == "user" && (
                                        <div className="">
                                            <h1 className="text-center text-3xl mb-8 lg:mb-5 lg:mt-4  font-bold text-orange-950">Daftar Masyarakat yang Tergabung Sistem.</h1>
                                            <div className="rounded-lg border border-orange-700">
                                                <Table className="">
                                                    <TableCaption >Semoga sehat selalu.</TableCaption>
                                                    <TableHeader>
                                                        <TableRow className='border-b-2 border-orange-700 bg-orange-700 bg-opacity-10'>
                                                            <TableHead className="font-bold text-slate-900 break-all w-[8rem] lg:w-[12rem]">NIK</TableHead>
                                                            <TableHead className="font-bold text-slate-900 w-[15rem]">Nama</TableHead>
                                                            <TableHead className="font-bold text-slate-900 w-[10rem]">Tanggal lahir</TableHead>
                                                            <TableHead className="font-bold text-slate-900 w-[8rem]  hidden lg:block">Gender</TableHead>
                                                            <TableHead className="font-bold text-slate-900 w-[20rem]">Alamat</TableHead>
                                                            <TableHead className="font-bold text-slate-900 w-[10rem]">Status</TableHead>
                                                        </TableRow>
                                                    </TableHeader>
                                                    <TableBody>
                                                        {userBiasa.map((user) => (
                                                            <TableRow
                                                                className="cursor-pointer border-b border-orange-700"
                                                                key={user.id}
                                                                onClick={() => handleCellClick(user)}
                                                            >
                                                                <TableCell className="font-normal">{user.nik}</TableCell>
                                                                <TableCell className=''>{user.name}</TableCell>
                                                                <TableCell>{formatTanggalLahir(user.birth_date)}</TableCell>
                                                                <TableCell className="hidden lg:block">{user.gender}</TableCell>
                                                                <TableCell >{user.address}</TableCell>
                                                                <TableCell >{user.status}</TableCell>
                                                            </TableRow>
                                                        ))}
                                                    </TableBody>
                                                </Table>
                                            </div>
                                        </div>
                                    )}

                                    {showUser == "riwayat" && (

                                        <div className="">
                                            <h1 className="text-center  text-3xl mb-8 lg:mb-5 lg:mt-4 font-bold text-orange-950">Daftar Kunjungan Pasien Terbaru.</h1>

                                            <div className="rounded-md border border-orange-700">
                                                <Table className=''>
                                                    <TableCaption >Semoga sehat selalu.</TableCaption>
                                                    <TableHeader>
                                                        <TableRow className='border-b-2 border-orange-700 bg-orange-700 bg-opacity-10'>
                                                            <TableHead className="font-bold text-slate-900 w-[15rem]">Nama Pasien</TableHead>
                                                            <TableHead className="font-bold text-slate-900 w-[14rem]">NIK</TableHead>
                                                            <TableHead className="font-bold text-slate-900 w-[18rem]">Waktu kunjungan pasien</TableHead>
                                                            <TableHead className="font-bold text-slate-900 w-[8rem]">Keluhan</TableHead>
                                                            <TableHead className="font-bold text-slate-900 w-[20rem]">Diagnosis</TableHead>
                                                            <TableHead className="font-bold text-slate-900 w-[10rem]">Dokter / Perawat</TableHead>
                                                        </TableRow>
                                                    </TableHeader>
                                                    <TableBody>
                                                        {allRiwayat.map((rw) => (
                                                            <TableRow
                                                                className="cursor-pointer border-b border-orange-700"
                                                                key={rw.id}
                                                            >
                                                                <TableCell className="font-normal">{rw.nama_pasien}</TableCell>
                                                                <TableCell className=''>{rw.nik}</TableCell>
                                                                <TableCell className=''>{formatTanggalIndonesia(rw.timestamp)}</TableCell>
                                                                <TableCell className=''>{rw.keluhan}</TableCell>
                                                                <TableCell className=''>{rw.keterangan}</TableCell>
                                                                <TableCell className=''>{rw.name_admin}</TableCell>

                                                            </TableRow>
                                                        ))}
                                                    </TableBody>
                                                </Table>
                                            </div>


                                        </div>
                                    )}
                                    {showUser == "export" && (
                                        
                                            <TableExportExcel allRiwayat={allRiwayat} allUser={userBiasa} />
                                        
                                    )}

                                    {showUser == "antri" && (
                                        <div className="">
                                            <Antrean />
                                        </div>
                                    )}


                                    <Dialog open={isDialogOpen} onOpenChange={handleDialogClose}>
                                        <DialogContent className="sm:max-w-[425px]">
                                            <DialogHeader>
                                                <DialogTitle className="text-xl">Tambahkan riwayat kunjungan pasien</DialogTitle>
                                                {
                                                    selectedRowUser && (
                                                        <DialogDescription>
                                                            Pasien dengan nama {selectedRowUser.name} <br />NIK {selectedRowUser.nik}
                                                        </DialogDescription>
                                                    )
                                                }
                                            </DialogHeader>
                                            <div className="grid gap-4 py-1">
                                                <div className="flex flex-col items-start">
                                                    <Label htmlFor="name" className="text-left mb-1 text-lg rounded-md">
                                                        Keluhan
                                                    </Label>
                                                    <textarea
                                                        id="name"
                                                        placeholder="...."
                                                        className="w-full h-40 rounded-md"
                                                        value={keluhan}
                                                        onChange={(e) => setKeluhan(e.target.value)}
                                                    />
                                                </div>
                                                <div className="flex flex-col items-start">
                                                    <Label htmlFor="name" className="text-left mb-1 text-lg">
                                                        Diagnosis Awal
                                                    </Label>
                                                    <textarea
                                                        id="name"
                                                        placeholder="isi diagnosis atau rujuakan"
                                                        className="w-full h-40 rounded-md"
                                                        value={diagnosis}
                                                        onChange={(e) => setDiagnosis(e.target.value)}
                                                    />
                                                </div>

                                            </div>
                                            <DialogFooter>
                                                <Button onClick={() => handleAddriwayat()}>Tambahkan Data</Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                </div>



                            )}
                        </div>
                    </div>
                </div>

            </main >
        </div >

    )
}