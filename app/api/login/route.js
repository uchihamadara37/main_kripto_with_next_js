import { NextRequest, NextResponse } from "next/server";
import { executeQuery } from "@/lib/mysql";

export async function POST(request) {
    try {
        const body = await request.json(); // Mengambil data dari body request
        const { email, password } = body; // Sesuaikan sesuai dengan kolom yang kamu butuhkan

        const data = await executeQuery({
            query: "SELECT * FROM user WHERE email = ? AND password = ?",
            values: [email, password],
        });

        return NextResponse.json({ message: "berhasil", data });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
