// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Heading } from "../head/head";
// import axios from "axios";
// export const Update=()=>
// {
//     const nav=useNavigate();
//     const [name,sname]=useState([]);
//     const [password,spassword]=useState([]); 
//     // const [conpassword,cpassword]=useState([]); 
//     const Up=async()=>
//     {
//         // if(password){
//         try
//         {
//             const res=await axios.get("http://localhost:8000/update/"+name+"/"+password)
            
//                 if(res.data)
//                 {

//                     nav('/login');
//                 }
//                 else
//                 {
//                     alert("try again");
//                 }
//             }
//         catch(e)
//         {
            
//             console.log(e)
//         }
    
//     }
//     return(
//         <>
        // <Heading/>
        // <nav className="head"></nav>
        // <div className="body"></div>
        // <table className="data">
        //     <tr>
        //         <td className="input">
        //             <label for="name">Name-</label>
        //         </td>
        //         <td className="input">
        //             <input type="name" placeholder="Enter your name" onChange={(e)=>sname(e.target.value)}></input>
        //         </td>
        //     </tr>
        //     <tr>
        //         <td className="input">
        //             <label for="name">Password-</label>
        //         </td>
        //         <td className="input"> 
        //         <input type="name" placeholder="Enter your Password" onChange={(e)=>spassword(e.target.value)}></input>
        //         </td>
        //     </tr>
        //     {/* <tr>
        //         <td className="input">
        //             <label for="name">Conform Password</label>
        //         </td>
        //         <td className="input">
        //             <input type="name" placeholder="conform your password" onChange={(e)=>cpassword(e.target.value)}></input>
        //         </td>
        //     </tr>
        //      */}
        //     <button style={{margin:'5% 40% 0vh 100%'}} onClick={Up}>Login</button>
        // </table>
        // <footer className="foot"></footer>
//         </>
//     )
//             }

import React from 'react';
import axios from 'axios';
import {useState} from 'react';
import {useNavigate} from "react-router-dom";
import { Heading } from '../head/head';
 export const Update=()=>{
    const nav=useNavigate();
const [name,sname]=useState([]);
const [newpsw,snewpsw]=useState([])
const Up=async()=>
{
  try
  {
    const isGoal = await axios.post("https://server-bjj8.onrender.com/update/"+name+"/"+newpsw);
  if(isGoal.data)
  {
    alert("saved");
      nav('/usercontent');

  }
  else{
    alert("try again");
} }
catch(e)
  {
    console.log(e)
  }
  }
  

return(
    <>
    <Heading/>
        <nav className="head"></nav>
        <div className="body"></div>
        <table className="data">
            <tr>
                <td className="input">
                    <label for="name">Name-</label>
                </td>
                <td className="input">
                    <input type="name" placeholder="Enter your name" onChange={(e)=>sname(e.target.value)}></input>
                </td>
            </tr>
            <tr>
                <td className="input">
                    <label for="name">Password-</label>
                </td>
                <td className="input"> 
                <input type="name" placeholder="Enter your Password" onChange={(e)=>snewpsw(e.target.value)}></input>
                </td>
            </tr>
            {/* <tr>
                <td className="input">
                    <label for="name">Conform Password</label>
                </td>
                <td className="input">
                    <input type="name" placeholder="conform your password" onChange={(e)=>cpassword(e.target.value)}></input>
                </td>
            </tr>
             */}
            <button style={{margin:'5% 40% 0vh 100%'}} onClick={Up}>Login</button>
        </table>
        <footer className="foot"></footer>
    
</>
);
}
