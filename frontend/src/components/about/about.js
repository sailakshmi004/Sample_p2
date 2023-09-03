import React from "react";
import { useNavigate } from "react-router-dom";
export const About=()=>
{
    const nav=useNavigate();
    const Contact=()=>
    {
        nav('/contact')

    }
    return(
        <>
        
        
        <div className="about"></div>
            
        <div className="font">
            Welcome to my App 😉.!!
        <h5 className="h5" onClick={Contact}>contact us</h5>
        </div>
        </>
    )
}