import { NextResponse } from "next/server";
import { executeQuery } from "@/lib/mysql";

export async function GET(request, { params }) {
    try {
        // console.log("okokoko")
        // Mengambil parameter id dari URL
        // console.log("route email :", email)
        const data = await executeQuery({
            query: "SELECT * FROM antrean ORDER BY no_urut ASC",
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
            nama,
        } = body; // Sesuaikan sesuai dengan kolom yang kamu butuhkan

        const cekIdData = await executeQuery({
            query: "SELECT * FROM antrean WHERE id_user = ?;",
            values: [id_user]
        })
        if (cekIdData.length > 0){
            return NextResponse.json({
                message: "Kamu sudah mengambil antrean!",
                data : [],
            });
        }

        const maxAntre = await executeQuery({
            query: "SELECT * FROM antrean WHERE no_urut = (SELECT MAX(no_urut) FROM antrean);",
            values: []
        })
        if (!id_user || !nama) {
            throw new Error("id_user dan nama harus diisi.");
        }

        let noMax = 0
        if (maxAntre.length > 0){
            noMax = maxAntre[0].no_urut
        }
        
        const data = await executeQuery({
            query: "INSERT INTO `antrean` (`id_user`, `nama`, `no_urut`) VALUES (?, ?, ?);",
            values: [
                id_user,
                nama,
                noMax+1
            ],
        });

        return NextResponse.json({
            message: "Antrean created successfully",
            data,
            noMax: noMax+1
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    try {
        // console.log("okokoko")
        // Mengambil parameter id dari URL
        // console.log("route email :", email)
        const data = await executeQuery({
            query: "DELETE FROM antrean",
            values: [],
        });

        return NextResponse.json({ data });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}