import { NextResponse } from "next/server";
import { executeQuery } from "@/lib/mysql";

export async function GET(request, { params }) {
    try {
        // console.log("okokoko")
        const { id } = await params; // Mengambil parameter id dari URL
        // console.log("route email :", email)
        const data = await executeQuery({
            query: "SELECT r.id as id, r.id_user as id_user, r.keluhan as keluhan, r.keterangan as keterangan, r.id_admin as id_admin, r.timestamp as timestamp, u.name as name_admin FROM riwayat r JOIN user u ON r.id_admin = u.id WHERE r.id_user = ?",
            values: [id],
        });

        return NextResponse.json({ data });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}