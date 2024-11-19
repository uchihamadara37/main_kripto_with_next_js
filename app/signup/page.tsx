"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button} from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignupPage() {
    const router = useRouter();
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault();
        // Logika signup di sini
        console.log("Signup:", nama, email, password);
        
    };

    return (
        <div className="root-login min-h-screen flex items-center justify-center bg-cover bg-center">
            <div className="glassmor p-8 rounded-lg shadow-md w-96">
                <Button variant={"ghost"} 
                    className="mb-3 bg-white"
                    onClick={() => router.push("/login")}
                >
                    Kembali ke Login
                    </Button>
                
                <h1 className="text-2xl font-bold mb-6 text-slate-50">Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-slate-50 mb-2">Nama</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded"
                            placeholder="Nama user anda..."
                            value={nama}
                            onChange={(e) => setNama(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-slate-50 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full p-2 border rounded"
                            value={email}
                            placeholder="your_@email.com..."
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-slate-50 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            className="w-full p-2 border rounded"
                            placeholder="***"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Button
                        type="submit"
                        className="w-full bg-red-950 text-white p-2 rounded hover:bg-yellow-600"
                    >
                        Daftar
                    </Button>
                </form>
                <p className="mt-4 text-center text-slate-50">
                    Sudah punya akun?{" "}
                    <span
                        className="text-yellow-300 cursor-pointer"
                        onClick={() => router.push("/login")}
                    >
                        Login di sini
                    </span>
                </p>
            </div>
        </div>
    );
}
