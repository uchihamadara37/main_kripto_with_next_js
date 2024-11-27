"use client";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DropdownMenuRadioGroupDemo } from "@/components/inputRadioGroup"
import { Switch } from "@/components/ui/switch";
import { Label } from "@radix-ui/react-label";

const hashPassword = async (password: string) => {
    const msgUint8 = new TextEncoder().encode(password); // Konversi teks ke Uint8Array 
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8); // Menghasilkan hash 
    const hashArray = Array.from(new Uint8Array(hashBuffer)); // Konversi hash ke array 
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // Konversi ke hex return hashHex; 
    return hashHex
}



export default function SignupPage() {
    const router = useRouter();
    const [name, setname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [nik, setNik] = useState("");
    const [birth_date, setBirthDate] = useState("");
    const [gender, setGender] = useState("");
    const [status, setStatus] = useState("");
    const [address, setAddress] = useState("");
    const [token, setToken] = useState("");

    const [isAdmin, setIsAdmin] = useState(false);





    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        // Logika signup di sini
        console.log("Signup:", name, email, password, password2);

        // filter dahulu
        if (password != password2) {
            alert("Ulangi password dengan benar!")
            return
        }
        if (nik == "" || nik.length < 8){
            alert("Tolong isi NIK dengan benar")
            return;
        }

        // jika user biasa
        try {
            const data = await fetch(`/api/email/${email}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Connection': 'keep-alive',
                        'Keep-Alive': 'timeout=5'
                    }
                }
            )
            if (data.ok) {
                const datas = await data.json()
                console.log(datas)
                if (datas.data.length > 0) {
                    alert("email tersebut sudah digunakan!")
                    return;
                } else {
                    console.log("lanjut")
                }
            }
        } catch (error) {
            console.log(error)
        }

        // const score = 0;
        const hashedPassword = await hashPassword(password);
        console.log("hashedPass", hashedPassword)
        

        if ((token != '' && token != "jangkrik")){
            alert('Pastikan kamu memiliki token admin yang sesuai')
            return;
        }

        if (token == "jangkrik"){
            console.log("sebagai admin")
            try {
                const payload = {
                    name,
                    email,
                    password: hashedPassword,
                    nik,
                    birth_date,
                    status,
                    gender,
                    address,
                    token : 'admin'
                };
                const response = await fetch('/api/user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Connection': 'keep-alive',
                        'Keep-Alive': 'timeout=5'
                    },
                    body: JSON.stringify(payload), // Mengubah data ke JSON string
                });
    
                if (!response.ok) {
                    throw new Error('Error adding user');
                }
    
                const data = await response.json();
                console.log('User added successfully:', data);
                setIsDialogOpen(true)
    
            } catch (error: any) {
                setIsDialogOpen(false)
                console.error('Error:', error.message);
            }
        }else{
            // user biasa
            try {
                const payload = {
                    name,
                    email,
                    password: hashedPassword,
                    nik,
                    birth_date,
                    status,
                    gender,
                    address,
                    token : 'biasa'
                };
                const response = await fetch('/api/user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Connection': 'keep-alive',
                        'Keep-Alive': 'timeout=5'
                    },
                    body: JSON.stringify(payload), // Mengubah data ke JSON string
                });
    
                if (!response.ok) {
                    throw new Error('Error adding user');
                }
    
                const data = await response.json();
                console.log('User added successfully:', data);
                setIsDialogOpen(true)
    
            } catch (error: any) {
                setIsDialogOpen(false)
                console.error('Error:', error.message);
            }
        }
    }, [name, email, password, password2, nik, birth_date, status, gender, address, token])

    const handleHayukLogin = (e: React.FormEvent) => {
        setIsDialogOpen(false)

        router.push('/')
    }
    useEffect(() => {
        console.log("isadmin : ", isAdmin)
    }, [isAdmin])

    return (
        <div className="root-login  min-h-screen flex items-center justify-center bg-cover bg-center">
            <div className="block lg:hidden absolute inset-0 bg-black opacity-30 pointer-events-none z-0"></div>
            {/* start dialog*/}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle className="text-center">Selamat</DialogTitle>
                        <DialogDescription>

                        </DialogDescription>
                    </DialogHeader>
                    <div className="break-words text-center">
                        <p>Akun dengan nama {name} dan email {email} berhasil dibuat. Silakan ke menu login! </p>

                    </div>
                    <DialogFooter className="">
                        <Button className="mx-auto"
                            type="submit"
                            onClick={(e) => handleHayukLogin(e)}
                        >
                            Hayuk Login!
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            {/* finish dialog */}



            <div className="glassmor p-8 rounded-lg shadow-md w-[60rem]">
                <div className="flex flex-row justify-between">
                    <Button variant={"ghost"}
                        className="mb-3 bg-white"
                        onClick={() => router.push("/")}
                    >
                        Kembali ke Login
                    </Button>
                    <div className=" lg:border rounded-lg flex items-center px-2 lg:bg-slate-50 bg-opacity-30">
                        <Label htmlFor="airplane-mode" className="text-white lg:text-red-950 font-semibold mr-3">For Admin</Label>
                        <Switch checked={isAdmin} onCheckedChange={(checked) => setIsAdmin(checked)} id="airplane-mode" />
                    </div>
                </div>
                <h1 className="text-xl mt-5 lg:mt-0 lg:text-3xl font-semibold mb-6 text-slate-50 text-center">Daftar Akun Kunjungan Pasien</h1>

                <form onSubmit={handleSubmit} className="">
                    <div className="flex flex-col lg:flex-row items-center w-full gap-4">
                        <div className="flex-initial w-full lg:w-1/2">

                            <div className="mb-3">
                                <label className="block text-slate-50 mb-2">Nama</label>
                                <input
                                    required
                                    type="text"
                                    className="w-full p-2 rounded border-0 "
                                    placeholder="name user anda..."
                                    value={name}
                                    onChange={(e) => setname(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="block text-slate-50 mb-2">
                                    Email
                                </label>
                                <input
                                    required
                                    type="email"
                                    className="w-full p-2 rounded border-0 "
                                    value={email}
                                    placeholder="your_@email.com..."
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="block text-slate-50 mb-2">
                                    Password
                                </label>
                                <input
                                    required
                                    type="password"
                                    className="w-full p-2 rounded border-0 "
                                    placeholder="***"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="block text-slate-50 mb-2">
                                    Ulangi Password
                                </label>
                                <input
                                    required
                                    type="password"
                                    className="w-full p-2 rounded border-0 "
                                    placeholder="***"
                                    value={password2}
                                    onChange={(e) => setPassword2(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="border-t-2 border-white h-1 w-1/2 mt-3"> </div>
                        <div className="  flex-initial w-full lg:w-1/2">
                            <div className="mb-3">
                                <label className="block text-slate-50 mb-2">NIK</label>
                                <input
                                    required
                                    type="number"
                                    className="w-full p-2 rounded border-0 "
                                    placeholder="nomor nik anda.."
                                    value={nik}
                                    onChange={(e) => setNik(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="block text-slate-50 mb-2">
                                    Tanggal Lahir
                                </label>
                                <input
                                    required
                                    type="date"
                                    className="w-full p-2 rounded border-0 "
                                    value={birth_date}
                                    onChange={(e) => setBirthDate(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="block text-slate-50 mb-2">
                                    Status
                                </label>
                                <select
                                    className="w-full rounded-md border-0 "
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                    required
                                >
                                    <option value="">Silakan pilih</option>
                                    <option value="Menikah">Menikah</option>
                                    <option value="Bekum menikah">Belum menikah</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="block text-slate-50 mb-2">
                                    Gender
                                </label>
                                <select className="w-full rounded-md border-0 "
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                    required
                                >
                                    <option value="">Silakan pilih</option>
                                    <option value="Laki-laki">Laki-laki</option>
                                    <option value="Perempuan">Perempuan</option>
                                </select>

                            </div>
                        </div>
                    </div>
                    <label className="block text-slate-50 mb-2">
                        Alamat lengkap
                    </label>
                    <textarea
                        name=""
                        id=""
                        placeholder="alamat lengkap domisili anda..."
                        className="w-full rounded-md h-[6rem] mb-2 border-0 "
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    ></textarea>

                    {/* jika admin */}
                    {isAdmin && (
                        <div className="flex flex-col items-center mb-2">
                            <label
                                htmlFor="token"
                                className="block text-slate-50 mb-2"
                            >Token Admin</label>
                            <input
                                type="password"
                                name="token"
                                className="border-0 rounded-md mb-2"
                                required
                                value={token}
                                onChange={(e) => setToken(e.target.value)}
                            />
                            {/* <p className="mb-3 text-white font-semibold">Untuk registrasi admin wajib menggunakan token</p> */}
                        </div>
                    )}
                    <div className="flex justify-center">
                        <Button
                            type="submit"
                            className="w-60 bg-red-950 text-white p-2 rounded hover:bg-yellow-600"
                            onClick={(e) => handleSubmit}
                        >
                            Daftar
                        </Button>
                    </div>
                </form>
                <p className="mt-4 text-center text-slate-50">
                    Sudah punya akun?{" "}
                    <span
                        className="text-yellow-300 cursor-pointer"
                        onClick={() => router.push("/")}
                    >
                        Login di sini
                    </span>
                </p>
            </div>
        </div>
    );
}
