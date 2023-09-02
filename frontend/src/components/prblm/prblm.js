import {React,  useEffect,  useState } from "react";
import axios from 'axios';
export  const Problem = () => {
    const[pro,setpro]=useState([]);
    useEffect(()=>
      {
        axios.get("https://server-bjj8.onrender.com/prblm")
        .then((result)=>
          {
            setpro(result.data);
            console.log(result.data)
          })
      })
      
    
        return(
            <>
                <div>
                 {
                pro.map((data)=>
                (
                  <tr>
                    {data.prblm}
                  </tr>
                    
                ))
                 }
                </div>
              


               
           </>
      )
}