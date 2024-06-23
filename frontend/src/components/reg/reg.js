import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

export const Register = () => {
    const nav = useNavigate();
    const toast = useToast();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    
    const Register1 = async () => {
        try {
            setLoading(true);
            const res = await axios.post(process.env.REACT_APP_Server + "/signup/" + name + "/" + email )
            if (res.data.message) {
                toast({
                    title:'Registered Successfully!',
                    status:'success',
                    position:'top-right',
                    isClosable:true,
                })
                setLoading(false);
                nav('/login');
            } else {
                setLoading(false);
                console.log(res)
                toast({
                    title:'User Already Exists',
                    status:'error',
                    position:'bottom-right',
                    isClosable:true
                })

            }
        } catch (e) {
            setLoading(false);
            toast({
                title:'Please fill in details',
                status:'error',
                position:'top-right'
            })
            console.log(e);
        }
    };

    

    return (
        <section className="registration-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="card shadow-lg border-0 rounded-lg mt-5">
                            <div className="card-header"><h3 className="text-center font-weight-light my-4">Registration</h3></div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label className="small mb-1" htmlFor="name">Full Name</label>
                                    <input
                                        className="form-control py-4"
                                        id="name"
                                        type="text"
                                        placeholder="Enter your full name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value.toUpperCase())}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="small mb-1" htmlFor="email">Email</label>
                                    <input
                                        className="form-control py-4"
                                        id="email"
                                        type="email"
                                        aria-describedby="emailHelp"
                                        placeholder="Example.,name@gmail.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group mt-4 mb-0">
                                    <button
                                        className="btn btn-primary btn-block"
                                        onClick={Register1}
                                        disabled={loading}
                                    >
                                        {loading ? "Please wait..." : "Sign up"}
                                    </button>
                                </div>
                            </div>
                            <div className="card-footer text-center">
                                <div className="small">
                                    Already have an account? <Link style={{color:'blue'}} to="/login">Sign in</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

