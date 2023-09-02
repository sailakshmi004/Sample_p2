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
// app.post('/registers/:name/:mail/:password/:cpassword',async(req,res)=>
// {
//     const details=await db.collection("saii").insertOne({Name:req.params.name,Gmail:req.params.mail,Password:req.params.password,Cpassword:req.params.cpassword})
//     res.json(details);
// })
// // app.get('/login/:gmail/:password',async(req,res)=>)


// 
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
// app.post('/update/:name/:password/',async(req,res)=>
// {
//     const details=await db.collection('saii').findOneAndUpdate({Name:req.params.name,Password:req.params.password})
//     res.json(details);
// })
// app.post('/usercontent/:input/',async(req,res) => {
//     const details = await db.collection('input').insertOne({input:req.params.input});
//     res.json(details);

// })
// app.get('/output/:input',async(req,res)=>{
//     const details=await db.collection('input').findOne({input:req.params.enter})
//     res.json(details);
// })
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