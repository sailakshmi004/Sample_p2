import React from "react";

import { useNavigate } from "react-router-dom";


import { Heading } from "../head/head";
export const Aduser=()=>
{
    const nav=useNavigate();
    const Ad=()=>
    {
        nav('/admin')
    }
    const User=()=>
    {
        nav('/login')
    }
    return(
        <>
        <Heading/>
        <nav className="head">
            <button className="b1">
            <font style={{width:'80px',color:'black'}} onClick={Ad}>Admin</font></button>
            <button className="b2">
            <font style={{width:'80px',color:'black'}} onClick={User}>User</font></button>
            
            
        
            {/* <button style={{margin:' 24.5% 0% 0vh 22%',background:'pink',width:'80px',color:'black'}} onClick={Ad}>Admin</button>
            <button style={{margin:'  24% 0% 0vh 47%',background:'pink',width:'80px',color:'black'}}onClick={User}><b>User</b></button> 
             */}
        </nav>
        <div className="body"></div>
        
        <footer className="foot"></footer>
        </>
    )

}
