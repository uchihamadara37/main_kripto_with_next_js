import { NextResponse } from "next/server";
import { executeQuery } from "@/lib/mysql";

export async function GET(request, { params }) {
    try {
        // console.log("okokoko")
        // Mengambil parameter id dari URL
        // console.log("route email :", email)
        const data = await executeQuery({
            query: "SELECT u2.name as nama_pasien, u2.nik as nik, r.id as id, r.id_user as id_user, r.keluhan as keluhan, r.keterangan as keterangan, r.id_admin as id_admin, r.timestamp as timestamp, u.name as name_admin FROM riwayat r INNER JOIN user u ON r.id_admin = u.id INNER JOIN user u2 ON r.id_user = u2.id ORDER BY timestamp DESC;",
            values: [],
        });

        return NextResponse.json({ data });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const body = await request.json(); // Mengambil data dari body request
        const {
            id_user,
            keluhan,
            keterangan,
            id_admin,
        } = body; // Sesuaikan sesuai dengan kolom yang kamu butuhkan

        const data = await executeQuery({
            query: "INSERT INTO `riwayat` (`id_user`, `keluhan`, `keterangan`, `id_admin`) VALUES (?, ?, ?, ?);",
            values: [
                id_user,
                keluhan,
                keterangan,
                id_admin
            ],
        });

        return NextResponse.json({
            message: "Riwayat created successfully",
            data,
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
