import {React,  useEffect,  useState } from "react";
import axios from 'axios';

export  const Problem = () => {
    const[pro,setpro]=useState([]);
    useEffect(()=>
      {
        axios.get("http://localhost:8000/prblm")
        .then( (result)=>
          {
            setpro(result.data);
          })
      })
      
    
        return(
            <>
                <div>
                 {
                pro.map((data)=>
                (
                    <>
                      
                        <table></table>
                    {data.prblm}<br/>
                    
                    <br/>
                    
                    </>
                ))
                 }
                </div>
              


               
            </>
        )
}