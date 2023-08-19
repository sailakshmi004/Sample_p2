import React from "react";

import { useNavigate } from "react-router-dom";


export const Welcome=()=>
{
    const nav=useNavigate();
    const Wel=()=>
    {
        nav('/aduser')
    }
    const Home=()=>
    {
        nav('/')
    }
    const About=()=>
    {
        nav('/about')
    }
    return(
        <>
        <nav>
        
             <div className="head"> 
            < font style={{margin:' 0% 0% 0vh 85%'}} onClick={Home}>Home</font>
            < font style={{margin:' 0% 0% 0vh 2%'}} onClick={About}>About</font>
            
            <button className="visit" onClick={Wel}>VISIT!</button>
            </div>
            </nav>
            <div className="body">

            </div>
            
            {/* <button style={{marginLeft:'46%', borderRadius:'65%',background:'pink',width:'100px',color:'black'}}onClick={Wel}><b>Visit</b></button>
             */}
            
           
            <footer className="foot">
                
            </footer>
        
        </>
    )
}