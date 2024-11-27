"use client";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import style from "./style.module.css"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react"
import { EncryptAES } from "./lib/encryptAES";

// import { useSession } from "next-auth/react";
import { EncryptVigenere, DecryptVigenere} from "@/lib/encryptVigenere"

const hashPassword = async (password: string) => {
    const msgUint8 = new TextEncoder().encode(password); // Konversi teks ke Uint8Array 
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8); // Menghasilkan hash 
    const hashArray = Array.from(new Uint8Array(hashBuffer)); // Konversi hash ke array 
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // Konversi ke hex return hashHex; 
    return hashHex
}


export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const { data: session, status } = useSession()

    // if (status === "loading") {
    //     return (
    //         <div className="flex items-center justify-center min-h-screen">
    //             <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    //         </div>
    //     )
    // }



    function base64ToHex(base64 : string): string {
        const buffer = Buffer.from(base64, 'base64')
        return buffer.toString('hex')
    }
    
    function hexToBase64(hexString : string): string {
        const buffer = Buffer.from(hexString, 'hex')
        return buffer.toString('base64')
    }

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();

        const hashedPass = await hashPassword(password)

        const payload = {
            email,
            password: hashedPass,
        }

        try {
            const data = await fetch(`http://localhost:3000/api/login`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Connection': 'keep-alive',
                        'Keep-Alive': 'timeout=7'
                    },
                    body: JSON.stringify(payload),
                }
            )
            if (data.ok) {
                const datas = await data.json()
                console.log(datas)
                if (datas.data.length > 0) {

                    let newEmail = EncryptVigenere(email, "jangkrik")
                    const emailLabel = EncryptVigenere("email", "jangkrik")
                    // console.log(emailLabel)
                    console.log("signin hex:", newEmail)
                    console.log("berhasil login")
                    router.push(`/play?${emailLabel}=${newEmail}`)
                    return;
                } else {
                    console.log("gagal login")
                }
            } else {
                alert("gagal fetch..")
                return
            }
        } catch (error) {
            console.log(error)
        }


    }, [email, password])

    return (

        <div className="root-login min-h-screen flex items-center justify-center bg-cover bg-center p-4">
            <div className="block lg:hidden absolute inset-0 bg-black opacity-30 pointer-events-none z-0"></div>

            <div className="relative z-2">
                <div className="flex flex-col lg:flex-row items-center justify-center lg:w-[90rem]">
                    
                    {/* side kiri <==== */}
                    <div className="w-full md:w-1/2 lg:w-1/2 mb-8 lg:mb-0 mt-10 lg:mt-0 ">
                        <h1 className="text-slate-200 text-shadow text-5xl font-bold text-center lg:text-left mb-4 ">Kunjungan Medis Pukesmas</h1>
                        <p className=" hidden lg:block text-gray-200 text-center text-shadow lg:text-left text-2xl mb-10">Dibangun dengan Vercel | Next.JS | Shadcn/UI</p>

                        <div className="flex flex-col lg:flex-row items-center gap-5 ">
                            {/* profil */}
                            <div className="img flex-none hidden lg:block">
                                <img src="/slice1.jpg" alt="..." className=" border-4 lg:border-2 p-1 border-slate-100 rounded-full lg:w-20 lg:h-20" />
                            </div>
                            <div className=" hidden lg:block border-t-2 lg:border-t-0 pt-4 lg:pt-0 lg:border-l-2 lg:pl-5 border-slate-100">
                                <p className="grow font-normal lg:font-medium text-xl lg:text-3xl text-slate-100 lg:mb-2 text-shadow">Andrea Alfian S.</p>
                                <p className="grow font-normal lg:font-medium text-xl lg:text-2xl text-slate-100 text-center lg:text-start text-shadow">123220078</p>

                            </div>
                        </div>
                        {/* <div className="mt-10 border-t-2 border-slate-50 w-[15rem]"></div> */}
                        <h1 className="mt-5 lg:mt-10 text-gray-200 text-center text-shadow lg:text-left text-xl break-words mb-7 lg:mb-3">Fitur Umum enkripsi dan dekripsi text, <br />steganografi (text dalam gambar), dan file Excel dapat digunakan tanpa login</h1>
                        <div className="flex justify-center lg:justify-start">
                            <Button
                                variant={"secondary"}
                                className={cn("text-lg")}
                                onClick={() => router.push("/homepage")}
                            >
                                Gunakan Fitur Umum Sekarang
                            </Button>

                        </div>

                    </div>



                    {/* side kanan ==> */}
                    <div className="glassmor w-full md:w-1/2 lg:w-1/2 p-8 rounded-2xl shadow-md max-w-xl">
                        <h1 className="text-2xl font-bold mb-6 text-white text-center">Silakan Masuk</h1>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-slate-100 text-lg font-medium">Email</Label>
                                <Input id="email" type="email" placeholder="Enter your email" required className="bg-white placeholder-slate-50"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password" className="text-slate-100 text-lg font-medium">Password</Label>
                                <Input id="password" type="password" placeholder="Enter your password" required className="bg-white placeholder-slate-50"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <Button type="submit" className="w-full bg-red-950 text-xl"
                                onClick={(e) => handleSubmit}
                            >
                                Log in
                            </Button>
                        </form>
                        <div className="mt-4 text-center">

                            <p className="mt-2 text-center text-yellow-300 text-lg">
                                Belum punya akun?
                                <Button variant="link" className={cn("text-base text-slate-50")}
                                    onClick={() => router.push("/signup")}
                                >
                                    Daftar di sini.
                                </Button>

                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}
