import axios from "axios";
import React, { useState } from "react";
export const User=()=>
{
    const[prblm,sprblm]=useState([]);
    const Us=async()=>
    {
      try{
        const res=await axios.post("http://localhost:8000/usercontent/"+prblm)
        if(res.data)
        {
            alert("saved successfully")
        }
        else{
            alert("check")
        }
      }
    catch(e)
    {
        console.log(e)
    }
}
    return(
        <>
        <nav className="head"></nav>
        
        <div className="body">
        <textarea className="user" rows="10" cols="50" placeholder="type your text...!!" onChange={(e)=>sprblm(e.target.value)}></textarea>
        <table>
            <td align="center"></td>
        </table>
        <font style={{margin:'5vh 50%',color:'blue'}} onClick={Us}><b>Submit</b></font>
        {/* <button  onClick={Us}>submit</button> */}
        </div>
        
        <footer className="foot"></footer>
        
        </>
    )
    
}