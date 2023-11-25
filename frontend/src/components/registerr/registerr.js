import React,{useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import { Heading } from "../head/head";
export const Registerr=() =>
{
    const nav=useNavigate();
    
    
    const [name,sname]=useState("");
    const [gmail,sgmail]=useState("");
    const [password,spassword]=useState("");
    const [conpassword,cpassword]=useState("");
    const Reg=async()=>
    {
        if(password===conpassword){
            try
        {
            const res=await axios.post("https://server-bjj8.onrender.com/register/"+name+"/"+gmail+"/"+password+"/"+conpassword)
            {
                if(res.data)
                {
                    alert("saved");
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
        else{
            alert("your password and conform password is not same");
        }
    }
    return(
        <>
        <Heading/>
        <nav className="head"></nav>
        <div className="body">
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
                    <input type="name" name='password' placeholder="Enter password" onChange={(e)=>spassword(e.target.value)}></input>
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
        </div>
        <footer className="foot"></footer>
        </>
);
}

