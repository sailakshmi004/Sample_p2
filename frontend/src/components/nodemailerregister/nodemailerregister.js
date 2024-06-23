import React, { useState } from 'react';
import './noderegister.css'
import axios from "axios";

import { Link ,useNavigate} from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
export const Register = ()=>{
	const nav = useNavigate();
	const [name, SetName] = useState("");
	const [mail, SetMail] = useState("");
	const [password, SetPassword] = useState("");
	const [conpassword, SetconPassword] = useState("");
	const [load, setLoad] = useState(false);
	const toast = useToast()


	const Register = async () => {
        try {
            setLoad(true);
            const res = await axios.post(process.env.REACT_APP_Server + "/signup/" + name + "/" + mail + "/" + password + "/" + conpassword )
            if (res.data.message) {
                toast({
                    title:'Registered Successfully!',
                    status:'success',
                    position:'top-right',
                    isClosable:true,
                })
                setLoad(false);
                nav('/login');
            } else {
                setLoad(false);
                console.log(res)
                alert("Try again");

            }
        } catch (e) {
            setLoad(false);
            alert("Please Fill the details")
            console.log(e);
        }
    };





    return(
        <>
		<div className='bg'>
            <div className="col-md-4 col-md-offset-4" id="login">
						<section id="inner-wrapper" className="login">
			
								
									<div className="form-group">
										<div className="input-group">
											<span className="input-group-addon"><i className="fa fa-user"> </i></span>
											
											<input type="text" className="form-control" 
											name='name'
											id='name'
											value={name} 
											placeholder="Name"  
											onChange={(e) => SetName(e.target.value)}></input>
										</div>
									</div>
									<div className="form-group">
										<div className="input-group">
											<span className="input-group-addon"><i className="fa fa-envelope"> </i></span>
											<input type="email" 
											name='email'
											id='email'
											className="form-control" 
											placeholder="name@gmail.com"
											value={mail}
											onChange={(e) => SetMail(e.target.value)}

											></input>
										</div>
									</div>
									<div className="form-group">
										<div className="input-group">
											<span className="input-group-addon"><i className="fa fa-key"> </i></span>
											<input type="password" 
											className="form-control" 
											placeholder="Password"
											name='password'
											id='password'
											value={password}
											onChange={(e) => SetPassword(e.target.value)}
											></input>
										</div>
									</div>
									<div className="form-group">
										<div className="input-group">
											<span className="input-group-addon"><i className="fa fa-key"> </i></span>
											<input type="password"
											className="form-control" 
											placeholder="Confirm Password"
											name='conpassword'
											id='conpassword'
											value={conpassword}
											onChange={(e) => SetconPassword(e.target.value)}
											></input>
										</div>
									</div>
									<button onClick={Register} type="submit" className="btn btn-success btn-block">
						{load ? "Please wait" : "Sign up"}

									</button>
							
							<br/>
                            <p className="registr-footer-text">
                        Already have an account? <Link style={{color:'blue'}}to="/login">Sign in</Link>
                    </p>
						</section></div>
						</div>
        </>
    )
}