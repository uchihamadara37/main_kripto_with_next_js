import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        console.log("Mencoba koneksi ke database...");
        const client = await clientPromise;

        if (!client) {
            console.error("Koneksi database gagal");
            return NextResponse.json(
                { error: "Database connection failed" },
                { status: 500 }
            );
        }

        console.log("Koneksi berhasil, mengambil database...");
        const db = client.db("test");

        if (!db) {
            console.error("Gagal mengakses database");
            return NextResponse.json(
                { error: "Failed to access database" },
                { status: 500 }
            );
        }

        console.log("Mencoba mengambil data users...");
        const users = await db.collection("user_kripto").find({}).toArray();

        console.log("Data users:", users);
        return NextResponse.json({ users });
    } catch (error) {
        console.error("Error detail:", error.message);
        return NextResponse.json(
            {
                error: "Internal Server Error",
                message: error.message,
                stack:
                    process.env.NODE_ENV === "development"
                        ? error.stack
                        : undefined,
            },
            { status: 500 }
        );
    }
}

export async function POST(request) {
    try {
        const client = await clientPromise;
        const db = client.db("andrea37");
        const data = await request.json();

        const result = await db.collection("user_kripto").insertOne(data);

        return NextResponse.json(result, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}