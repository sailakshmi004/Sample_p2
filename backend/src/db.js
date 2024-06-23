// import {MongoClient} from "mongodb";
// let db; 
// async function connectToDB(cb){
//     const url = "mongodb+srv://sailakshmi:sailakshmiborra@sailakshmi.uv7cqqk.mongodb.net/?retryWrites=true&w=majority";
//     const client = new MongoClient(url);
//     await client.connect();
//     db = client.db("Sai");
//     cb();
// }

// export {db,connectToDB};

import dot from 'dotenv';
import { MongoClient } from "mongodb";
dot.config();
let db; 

async function connectToDB(cb){
    const url = `${process.env.database}`
    const client = new MongoClient(url);
    await client.connect();
    db = client.db("NewProject");
    cb();
}
export { connectToDB, db };
