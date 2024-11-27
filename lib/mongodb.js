
import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
    throw new Error("Please add your Mongo URI to .env.local");
}

// const uri = process.env.MONGODB_URI;
const uri = "mongodb+srv://andrea37:jangkrik97@cluster0.kxqpk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
let client;
let clientPromise;

// MONGODB_URI=mongodb+srv://andrea37:jangkrik97@cluster0.kxqpk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
try {
    const options = {
        maxPoolSize: 10,
        connectTimeoutMS: 10000, // 30 seconds
        socketTimeoutMS: 10000, // 45 seconds
    };

    if (process.env.NODE_ENV === "development") {
        console.log("Running in development mode");
        if (!global._mongoClientPromise) {
            console.log("Creating new MongoDB client...");
            client = new MongoClient(uri, options);
            global._mongoClientPromise = client
                .connect()
                .then((client) => {
                    console.log("MongoDB connected successfully");
                    return client;
                })
                .catch((err) => {
                    console.error("MongoDB connection error:", err);
                    throw err;
                });
        }
        clientPromise = global._mongoClientPromise;
    } else {
        console.log("Running in production mode");
        client = new MongoClient(uri, options);
        clientPromise = client
            .connect()
            .then((client) => {
                console.log("MongoDB connected successfully");
                return client;
            })
            .catch((err) => {
                console.error("MongoDB connection error:", err);
                throw err;
            });
    }
} catch (error) {
    console.error("MongoDB initialization error:", error);
    throw error;
}

export default clientPromise;
