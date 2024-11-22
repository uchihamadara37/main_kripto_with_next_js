"use client"
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
import { formatTanggalLahir, formatTanggalIndonesia } from "@/lib/formattingTanggal";
import { Button } from "../ui/button";

type Antrean = {
    id: number,
    id_user: number,
    nama: string,
    no_urut: number,
    timestamp: string
}




export default function Antrean() {

    const [antrean, setAntrean] = useState<Antrean[]>([])


    const fetchAllAntrean = async () => {

        const response = await fetch(`/api/antrean/`)
        const data = await response.json()
        setAntrean(data.data)
    }

    useEffect(() => {
        fetchAllAntrean()

        const interval = setInterval(() => {
            fetchAllAntrean()
        }, 10000)

        return () => clearInterval(interval)
    }, [])

    const removeAntreanById = (id: number) => {
        setAntrean((prevAntrean) => prevAntrean.filter((item) => item.id !== id));
    };

    const handleHapusAntrean = async (ant: Antrean) => {
        const jadi = confirm("Apakah anda serius sudah memanggil \natau malah pasien tidak datang?")

        if (jadi) {
            // mulai execute
            const response = await fetch(`/api/antrean/${ant.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Connection': 'keep-alive',
                    'Keep-Alive': 'timeout=5'
                }, // Mengubah data ke JSON string
            })

            if (!response.ok) {
                throw new Error('Error adding user');
            }

            removeAntreanById(ant.id)
            alert(`Antrean ${ant.nama} dengan nomor antri ${ant.no_urut} telah dihapus`)
            const data = await response.json()
        }
    }

    const handleHapusAllAntrean = useCallback(async () => {
        const jadi = confirm("Apakah anda serius ingin menghapus semua antrean?")

        let jadi2 = false;
        if (jadi) {
            jadi2 = confirm("Yakin? :)")
        }

        if (!jadi2) return;

        try {
            // mulai execute
            const response = await fetch(`/api/antrean`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Connection': 'keep-alive',
                    'Keep-Alive': 'timeout=5'
                }, // Mengubah data ke JSON string
            })

            if (!response.ok) {
                throw new Error('Error adding user');
            }
            setAntrean([])

            alert(`Semua antrean telah dihapus`)
            const data = await response.json()
        } catch (error) {
            alert('Terjadi kesalahan saat menghapus antrean')
            console.error(error)
        }
    }, [antrean])

    return (
        <div className="mt-4">
            <p className="mb-3 text-red-700">Tolong panggil pasien sesuai antrean!</p>
            <div className="rounded-lg border border-orange-700">
                <Table className=''>
                    <TableHeader>
                        <TableRow className='border-b-2 border-orange-700 bg-orange-700 bg-opacity-10'>
                            <TableHead className="font-bold text-slate-900 w-[15rem]">Nama</TableHead>
                            <TableHead className="font-bold text-slate-900 w-[8rem]">No Urut</TableHead>
                            <TableHead className="font-bold text-slate-900 w-[10rem]">Waktu Ambil Nomor</TableHead>
                            <TableHead className="font-bold text-slate-900 w-[10rem]">Panggil | Hapus</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {antrean.map((ant) => (
                            <TableRow
                                className="cursor-pointer border-b border-orange-700"
                                key={ant.id}
                            >
                                <TableCell className="font-normal">{ant.nama}</TableCell>
                                <TableCell className="font-normal">{ant.no_urut}</TableCell>
                                <TableCell>{formatTanggalIndonesia(ant.timestamp)}</TableCell>
                                <TableCell>
                                    <Button
                                        variant={"destructive"}
                                        onClick={() => handleHapusAntrean(ant)}
                                    >Hapus</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div className="flex justify-center mt-5">
                <Button
                    onClick={() => handleHapusAllAntrean()}
                >
                    Hapus Semua
                </Button>
            </div>
        </div>
    )
}