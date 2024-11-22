// pages/api/users/[id].js
import { ObjectId } from "mongodb";
// import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { executeQuery } from "@/lib/mysql";

export async function GET(request, { params }) {
    try {
        const { id } = await params; // Mengambil parameter id dari URL

        const data = await executeQuery({
            query: "SELECT * FROM user WHERE id = ?",
            values: [id],
        });

        return NextResponse.json({ data });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PUT(request, { params }) {
    try {
        const { id } = await params; // Mengambil parameter id dari URL
        const body = await request.json(); // Mengambil data dari body request
        const { name, email, password, score } = body; // Sesuaikan kolom yang dibutuhkan

        const data = await executeQuery({
            query: "UPDATE user SET name = ?, email = ?, password = ?, score = ? WHERE id = ?",
            values: [name, email, password, score, id],
        });

        return NextResponse.json({
            message: "User updated successfully",
            data,
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    try {
        const { id } = await params; // Mengambil parameter id dari URL

        const data = await executeQuery({
            query: "DELETE FROM user WHERE id = ?",
            values: [id],
        });

        return NextResponse.json({
            message: "User deleted successfully",
            data,
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// export default async function handler(req, res) {
//   try {
//     const client = await clientPromise;
//     const db = client.db("andrea37");
//     const collection = db.collection("user_kripto");

//     // Get the user ID from the URL
//     const { id } = req.query;

//     switch (req.method) {
//       case 'GET':
//         const user = await collection.findOne({
//           _id: new ObjectId(id)
//         });

//         if (!user) {
//           return res.status(404).json({ error: 'User not found' });
//         }

//         res.status(200).json(user);
//         break;

//       case 'PUT':
//         const updateResult = await collection.updateOne(
//           { _id: new ObjectId(id) },
//           { $set: req.body }
//         );

//         if (updateResult.matchedCount === 0) {
//           return res.status(404).json({ error: 'User not found' });
//         }

//         res.status(200).json(updateResult);
//         break;

//       case 'DELETE':
//         const deleteResult = await collection.deleteOne({
//           _id: new ObjectId(id)
//         });

//         if (deleteResult.deletedCount === 0) {
//           return res.status(404).json({ error: 'User not found' });
//         }

//         res.status(200).json(deleteResult);
//         break;

//       default:
//         res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
//         res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
//   } catch (error) {
//     console.error('Database Error:', error);
//     res.status(500).json({ error: 'Error connecting to database' });
//   }
// }
