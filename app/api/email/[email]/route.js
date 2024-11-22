import { NextResponse } from "next/server";
import { executeQuery } from "@/lib/mysql";

export async function GET(request, { params }) {
    try {
        // console.log("okokoko")
        const { email } = await params; // Mengambil parameter id dari URL
        // console.log("route email :", email)
        const data = await executeQuery({
            query: "SELECT * FROM user WHERE email = ?",
            values: [email],
        });

        return NextResponse.json({ data });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}