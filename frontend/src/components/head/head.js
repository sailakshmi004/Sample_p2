import React from "react";
import { useNavigate } from "react-router-dom";
export const Heading=()=>
{
    const nav=useNavigate();
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
    
    <nav className="head1">
        {/* <div className="head1"> */}
              {/* <div className="head1" > */}
              <font onClick={Home}><b>Home</b></font>
                
                <font style={{marginLeft:'5%',background:'none',width:'80px',color:'black'}}onClick={About}><b>About</b></font>
                
              <div className="body"></div>
                
                {/* <button style={{marginLeft:'90%',background:'none',width:'80px',color:'black'}}onClick={About}><b>About</b></button> */}
              {/* </div> */}
    
            
    </nav>

    </>
   ) 
}




// export const Footer=()=>
// {
//     return(
//         <>
//         <footer></footer>
//         </>
//     )
// }