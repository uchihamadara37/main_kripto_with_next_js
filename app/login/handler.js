import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("andrea37");
    
    const data = await db.collection("user_kripto").find({}).toArray();
    res.json(data);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Error connecting to database' });
  }
}