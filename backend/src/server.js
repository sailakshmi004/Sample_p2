import cors from 'cors';
import express from 'express';
import { connectToDB, db } from './db.js';
const app=express();
app.use(express.json());
app.use(cors());
//check server//
app.get('/',(req,res)=>{
    res.send("server is running")
})

//adminlogin

app.get('/login/:name/:password',async(req,res)=>{
    const details=await db.collection('saii').findOne({Name:req.params.name,Password:req.params.password})
    res.json(details);
})

app.post('/register/:name/:gmail/:password/:conpassword/',async(req,res)=>
{
    const details=await db.collection('saii').insertOne({Name:req.params.name,Gmail:req.params.gmail,Password:req.params.password})
    res.json(details);
})
app.post('/update/:name/:password',async (req,res)=>{
  
    const details = await db.collection('saii').findOneAndUpdate({Name:req.params.name},{$set:{password:req.params.password}})
    res.json(details);
})

app.post('/usercontent/:prblm',async(req,res)=>{
    const details=await db.collection('prblm').insertOne({prblm:req.params.prblm})
    res.json(details);
})
app.get('/prblm',async(req,res)=>{
    const details=await db.collection('prblm').find().toArray();
    res.json(details);

})
connectToDB(()=>{
    app.listen(8000,()=>{
        console.log("server running at port 8000")
    })
})