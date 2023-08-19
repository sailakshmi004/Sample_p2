import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heading } from "../head/head";
import axios from "axios";
export const Register=()=>
{
    const nav=useNavigate();
    const [name,sname]=useState("");
    const [gmail,sgmail]=useState("");
    const [password,spassword]=useState("");
    const [conpassword,cpassword]=useState("");
    const Reg=async()=>
    {
        try{
            const result=await axios.post("http://loaclhost:8000/registers/"+name+"/"+gmail+"/"+password+"/"+conpassword)
            {
                if(result.data)
                {
                    alert("saved succesffully");
                    nav('/login')

                }
                else
                {
                    alert("try again");
                }
            }
        
        }
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
                    <input type="name" name='name' placeholder="Enter your fullname" onChange={(e)=>sname(e.target.value)}></input>
                </td>
            </tr>
            <tr>
                <td className="input">
                    <label for="name">Gmail-</label>
                </td>
                <td className="input"> 
                <input type="mail"  name='mail'placeholder="Enter your Gmail" onChange={(e)=>sgmail(e.target.value)}></input>
                </td>
            </tr>
            <tr>
                <td className="input">
                    <label for="name">Password</label>
                </td>
                <td className="input">
                    <input type="name" name='password' placeholder="Enter password" onChange={(e)=>spassword(e.target.value)} ></input>
                </td>
            </tr>
            <tr>
                <td className="input">
                    <label for="name">Conform password</label>
                </td>
                <td className="input">
                    <input type="text"  name='conpassword' placeholder="Conform your password" onChange={(e)=>cpassword(e.target.value)}></input>
                </td>
            </tr>
            <button style={{margin:'5% 40% 0vh 100%'}} onClick={Reg}>Register</button>
        </table>
        <footer className="foot"></footer>
        
        </>
    )
}