// // import React, { useState } from "react";
// // import axios from "axios";
// // import { Link, useNavigate } from "react-router-dom";
// // import { useToast } from "@chakra-ui/react";

// // export const Login = () => {
// //     const nav = useNavigate();
// //     const toast = useToast();
// //     const [email, setEmail] = useState("");
// //     const [otp, setOtp] = useState("");
// //     const [loading, setLoading] = useState(false);
// //     const [showOtpInput, setShowOtpInput] = useState(false); 

// //     const handleGetOtp = async () => {
// //         try {
// //             setLoading(true);
// //             const res = await axios.post(`${process.env.REACT_APP_Server}/get-otp`, { email });
// //             if (res.data.message === "success") {
// //                 toast({
// //                     title: 'OTP Sent Successfully!',
// //                     status: 'success',
// //                     position: 'top-right',
// //                     isClosable: true,
// //                 });
// //                 setShowOtpInput(true); 
// //             } else {
// //                 setLoading(false);
// //                 console.log(res.data);
// //                 alert('Failed to send OTP. Please try again.');
// //             }
// //         } catch (error) {
// //             setLoading(false);
// //             console.error('Error sending OTP:', error);
// //             alert('Error sending OTP. Please check your email and try again.');
// //         }
// //     };

// //     const handleLogin = async () => {
// //         try {
// //             setLoading(true);
// //             const res = await axios.post(`${process.env.REACT_APP_Server}/login`, { email, otp });
// //             if (res.data.message === "success") {
// //                 toast({
// //                     title: 'Logged in Successfully!',
// //                     status: 'success',
// //                     position: 'top-right',
// //                     isClosable: true,
// //                 });
// //                 setLoading(false);
// //                 nav('/dashboard'); 
// //             } else {
// //                 setLoading(false);
// //                 console.log(res.data);
// //                 alert('Login failed. Invalid OTP.');
// //             }
// //         } catch (error) {
// //             setLoading(false);
// //             console.error('Error logging in:', error);
// //             alert('Error logging in. Please try again.');
// //         }
// //     };

// //     return (
// //         <section className="login-section">
// //             <div className="container">
// //                 <div className="row justify-content-center">
// //                     <div className="col-lg-6">
// //                         <div className="card shadow-lg border-0 rounded-lg mt-5">
// //                             <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
// //                             <div className="card-body">
// //                                 <div className="form-group">
// //                                     <label className="small mb-1" htmlFor="email">Email</label>
// //                                     <input
// //                                         className="form-control py-4"
// //                                         id="email"
// //                                         type="email"
// //                                         aria-describedby="emailHelp"
// //                                         placeholder="Enter your email address"
// //                                         value={email}
// //                                         onChange={(e) => setEmail(e.target.value)}
// //                                         required
// //                                     />
// //                                 </div>
// //                                 {showOtpInput && (
// //                                     <div className="form-group">
// //                                         <label className="small mb-1" htmlFor="otp">OTP</label>
// //                                         <input
// //                                             className="form-control py-4"
// //                                             id="otp"
// //                                             type="text"
// //                                             placeholder="Enter OTP"
// //                                             value={otp}
// //                                             onChange={(e) => setOtp(e.target.value)}
// //                                             required
// //                                         />
// //                                     </div>
// //                                 )}
// //                                 <div className="form-group mt-4 mb-0">
// //                                     {!showOtpInput ? (
// //                                         <button
// //                                             className="btn btn-primary btn-block"
// //                                             onClick={handleGetOtp}
// //                                             disabled={loading}
// //                                         >
// //                                             {loading ? "Sending OTP..." : "Get OTP"}
// //                                         </button>
// //                                     ) : (
// //                                         <button
// //                                             className="btn btn-primary btn-block"
// //                                             onClick={handleLogin}
// //                                             disabled={loading}
// //                                         >
// //                                             {loading ? "Logging in..." : "Login"}
// //                                         </button>
// //                                     )}
// //                                 </div>
// //                             </div>
// //                             <div className="card-footer text-center">
// //                                 <div className="small">
// //                                     Don't have an account? <Link to="/register">Sign up</Link>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </section>
// //     );
// // };

// import React, { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import { useToast } from "@chakra-ui/react";

// export const Login = () => {
//     const nav = useNavigate();
//     const toast = useToast();
//     const [email, setEmail] = useState("");
//     const [otp, setOtp] = useState("");
//     const [loading, setLoading] = useState(false);
//     const [showOtpInput, setShowOtpInput] = useState(false); 

//     const handleGetOtp = async () => {
//         try {
//             setLoading(true);
//             const res = await axios.post(`${process.env.REACT_APP_Server}/get-otp`, { email });
//             if (res.data.message) {
//                 toast({
//                     title: 'OTP Sent Successfully!',
//                     status: 'success',
//                     position: 'top-right',
//                     isClosable: true,
//                 });
//                 setShowOtpInput(true); 
//             } else {
//                 setLoading(false);
//                 console.log(res.data);
//                 alert('Failed to send OTP. Please try again.');
//             }
//         } catch (error) {
//             setLoading(false);
//             console.error('Error sending OTP:', error);
//             alert('Error sending OTP. Please check your email and try again.');
//         }
//     };

//     const handleLogin = async () => {
//         try {
//             setLoading(true);
//             const res = await axios.post(`${process.env.REACT_APP_Server}/login`, { email, otp });
//             if (res.data.message === "Logged in Successfully") {
//                 toast({
//                     title: 'Logged in Successfully!',
//                     status: 'success',
//                     position: 'top-right',
//                     isClosable: true,
//                 });
//                 setLoading(false);
//                 nav('/dashboard'); 
//             } else {
//                 setLoading(false);
//                 console.log(res.data);
//                 alert('Login failed. Invalid OTP.');
//             }
//         } catch (error) {
//             setLoading(false);
//             console.error('Error logging in:', error);
//             alert('Error logging in. Please try again.');
//         }
//     };

//     return (
//         <section className="login-section">
//             <div className="container">
//                 <div className="row justify-content-center">
//                     <div className="col-lg-6">
//                         <div className="card shadow-lg border-0 rounded-lg mt-5">
//                             <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
//                             <div className="card-body">
//                                 <div className="form-group">
//                                     <label className="small mb-1" htmlFor="email">Email</label>
//                                     <input
//                                         className="form-control py-4"
//                                         id="email"
//                                         type="email"
//                                         aria-describedby="emailHelp"
//                                         placeholder="Enter your email address"
//                                         value={email}
//                                         onChange={(e) => setEmail(e.target.value)}
//                                         required
//                                     />
//                                 </div>
//                                 {showOtpInput && (
//                                     <div className="form-group">
//                                         <label className="small mb-1" htmlFor="otp">OTP</label>
//                                         <input
//                                             className="form-control py-4"
//                                             id="otp"
//                                             type="text"
//                                             placeholder="Enter OTP"
//                                             value={otp}
//                                             onChange={(e) => setOtp(e.target.value)}
//                                             required
//                                         />
//                                     </div>
//                                 )}
//                                 <div className="form-group mt-4 mb-0">
//                                     {!showOtpInput ? (
//                                         <button
//                                             className="btn btn-primary btn-block"
//                                             onClick={handleGetOtp}
//                                             disabled={loading}
//                                         >
//                                             {loading ? "Sending OTP..." : "Get OTP"}
//                                         </button>
//                                     ) : (
//                                         <button
//                                             className="btn btn-primary btn-block"
//                                             onClick={handleLogin}
//                                             disabled={loading}
//                                         >
//                                             {loading ? "Logging in..." : "Login"}
//                                         </button>
//                                     )}
//                                 </div>
//                             </div>
//                             <div className="card-footer text-center">
//                                 <div className="small">
//                                     Don't have an account? <Link to="/register">Sign up</Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };



import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

export const Login = () => {
    const nav = useNavigate();
    const toast = useToast();
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const [showOtp, setShowOtp] = useState(false); 

    const GetOtp = async () => {
        try {
            setLoading(true);
            const res = await axios.post(`${process.env.REACT_APP_Server}/get-otp`, { email });
            if (res.data.message) {
                toast({
                    title: 'OTP Sent Successfully!',
                    status: 'success',
                    position: 'top-right',
                    isClosable: true,
                });
                setShowOtp(true); 
            } else {
                setLoading(false);
                console.log(res.data);
                alert('Failed to send OTP. Please try again.');
            }
        } catch (error) {
            setLoading(false);
            console.error('Error sending OTP:', error);
            toast({
                title:"User Not Found",
                status:"info"
            })
        }
    };

    const handleLogin = async () => {
        try {
            setLoading(true);
            const res = await axios.post(`${process.env.REACT_APP_Server}/verify-otp`, { email, otp });
            if (res.data.message === "Logged in Successfully") {
                toast({
                    title: 'Logged in Successfully!',
                    status: 'success',
                    position: 'top-right',
                    isClosable: true,
                });
                setLoading(false);
                nav('/'); 
            } else {
                setLoading(false);
                console.log(res.data);
                alert('Login failed. Invalid OTP.');
            }
        } catch (error) {
            setLoading(false);
            console.error('Error logging in:', error);
            alert('Error logging in. Please try again.');
        }
    };

    return (
        <section className="login-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="card shadow-lg border-0 rounded-lg mt-5">
                            <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label className="small mb-1" htmlFor="email">Email</label>
                                    <input
                                        className="form-control py-4"
                                        id="email"
                                        type="email"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter your email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                {showOtp && (
                                    <div className="form-group">
                                        <label className="small mb-1" htmlFor="otp">OTP</label>
                                        <input
                                            className="form-control py-4"
                                            id="otp"
                                            type="text"
                                            placeholder="Enter OTP"
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value)}
                                            required
                                        />
                                    </div>
                                )}
                                <div className="form-group mt-4 mb-0">
                                    {!showOtp ? (
                                        <button
                                            className="btn btn-primary btn-block"
                                            onClick={GetOtp}
                                            disabled={loading}
                                        >
                                            {loading ? "Sending OTP..." : "Get OTP"}
                                        </button>
                                    ) : (
                                        <button
                                            className="btn btn-primary btn-block"
                                            onClick={handleLogin}
                                        >Login
                                        </button>
                                    )}
                                </div>
                            </div>
                            <div className="card-footer text-center">
                                <div className="small">
                                    Don't have an account? <Link style={{color:'blue'}} to="/register">Sign up</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;

