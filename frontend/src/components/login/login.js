// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";
// import { Heading } from "../head/head";
// export const Login=()=>
// {
//     const nav=useNavigate();
//     const [gmail,sgmail]=useState("");
//     const [password,spassword]=useState("");
//     const Log=async()=>{
        
//         try{
//             const result=await axios.get("http://loaclhost:8000/login/"+gmail+"/"+password)
//             {
//                 if(result.data)
//                 {
//                     nav('/usercontent')

//                 }
//                 else
//                 {
//                     alert("try again")
//                 }
//             }
//         }
//         catch(e)
//         {
//             console.log(e)
//         }
//     }
    // const Reg=()=>
    // {
    //     nav('/registerpp')
    // }
    // const For=()=>
    // {
    //     nav('/forgotp')
//     }
//     return(
//         <>
        // <Heading/>
        // <nav className="head">
        // </nav>
        // <div className="body"></div>
        // <table className="data">
        //     <tr>
        //             <td className="input">
        //             <label for="gmail"><b>Gmail-</b></label>
        //         </td>
        //         <td className="input">
        //         <input type="gmail" name='mail' placeholder="Enter Gmail" onChange={(e)=>sgmail(e.target.value)} ></input>
        //         </td>
        //     </tr>
        //     <tr>
        //     <td className="input">
        //         <label for="password"><b>Password-</b></label>
        //     </td>
            
        //     <td className="input">
        //     <input type="password" name='password' placeholder="Enter password" onChange={(e)=>spassword(e.target.value)}></input>
        //     </td>
        //     </tr>
            
        // <button style={{margin:'5% 40% 0vh 100%'}} onClick={Log}>Login</button><br/><br/>
        
        // <tr>
        //     <td>
        // <button  style={{background:'none',border:'none',marginBottom:'5vh',color:'blue'}} onClick={Reg}><b>Register🤷🏼‍♀</b></button><br/>
        // </td>
        // <td  align="right">
        // <button  style={{background:'none',border:'none',marginBottom:'5vh',color:'indigo'}} onClick={For}><b>Fogot🤷🏼‍♀</b></button>
        // </td>
        // </tr>
        // {/* <button style={{margin:'10%,40%,0vh,150%'}} onClick={Forgot}>Forgot password</button> */}
        // </table>
        // <footer className="foot"></footer>
//         </>
//     )
// }
import React, {  useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Heading } from "../head/head";
export const Login=() =>
{
    const nav=useNavigate();
    const [name,sname]=useState([]);
    const [password,spassword]=useState([]);  
    
    const Log=async()=>
    {
        try
        {
            const res=await axios.get("https://server-bjj8.onrender.com/login/"+name+"/"+password)
            
                if(res.data)
                {

                    nav('/usercontent');
                }
                else
                {
                    alert("try again");
                }
            }

        
        catch(e)
        {
            
            console.log(e)
        }
       
    }
    const Reg=()=>
    {
        nav('/registerpp')
    }
    const For=()=>
    {
        nav('/forgotp')

    }
    return(
        <>
        <Heading/>
         <nav className="head">
         </nav>
         <div className="body"></div>
        <table className="data">
            <tr>
                    <td className="input">
                    <label for="gmail"><b>Name-</b></label>
                </td>
                <td className="input">
                <input type="gmail" name='mail' placeholder="Enter Gmail" onChange={(e)=>sname(e.target.value)} ></input>
                </td>
             </tr>
             <tr>
             <td className="input">
                <label for="password"><b>Password-</b></label>
            </td>
            
             <td className="input">
             <input type="password" name='password' placeholder="Enter password" onChange={(e)=>spassword(e.target.value)}></input>
             </td>
            </tr>
            
         <button style={{margin:'5% 40% 0vh 100%'}} onClick={Log}>Login</button><br/><br/>
        
        <tr>
            <td>
        <button  style={{background:'none',border:'none',marginBottom:'5vh',color:'blue'}} onClick={Reg}><b>Register🤷🏼‍♀</b></button><br/>
         </td>
         <td  align="right">
         <button  style={{background:'none',border:'none',marginBottom:'5vh',color:'indigo'}} onClick={For}><b>Fogot🤷🏼‍♀</b></button>
         </td>
         </tr>
         {/* <button style={{margin:'10%,40%,0vh,150%'}} onClick={Forgot}>Forgot password</button> */}
         </table>
        <footer className="foot"></footer>
        
        </>
    )
}
