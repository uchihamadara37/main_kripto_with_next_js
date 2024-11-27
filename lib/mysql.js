import mysql from "mysql2/promise";

const pool = mysql.createPool({
    // host: process.env.MYSQL_HOST,
    // user: process.env.MYSQL_USER,
    // password: process.env.MYSQL_PASSWORD,
    // database: process.env.MYSQL_DATABASE,
    host: "103.161.185.232",
    user: "andre3",
    password: "FalconJannah#1",
    database: "kriptografi",
    
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

export async function executeQuery({ query, values = [] }) {

    try {
        console.log(process.env.MYSQL_HOST);
        const [results] = await pool.execute(query, values);
        return results;
    } catch (error) {
        console.log("Error mase : ",error)
        
        throw Error(error.message);
    }
}
