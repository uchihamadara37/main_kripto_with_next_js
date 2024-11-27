import { NextResponse } from "next/server";
import { executeQuery } from "@/lib/mysql";

export async function DELETE(request, { params }) {
    try {
        const { id } = await params; // Mengambil parameter id dari URL

        const data = await executeQuery({
            query: "DELETE FROM antrean WHERE id = ?",
            values: [id],
        });

        return NextResponse.json({
            message: "Antrean deleted successfully",
            data,
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function GET(request, { params }) {
    try {
        const { id } = await params; // Mengambil parameter id dari URL

        const data = await executeQuery({
            query: "SELECT * FROM antrean WHERE id_user = ?",
            values: [id],
        });

        return NextResponse.json({ data });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
