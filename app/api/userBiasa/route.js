import { NextResponse } from "next/server";
import { executeQuery } from "@/lib/mysql";

export async function GET() {
    try {
        const data = await executeQuery({
            query: "SELECT * FROM user WHERE role != 'admin'",
        });
        return NextResponse.json({ data });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}