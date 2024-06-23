
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import './nodelogin.css';

export const Login = () => {
    const [showOtpInput, setShowOtpInput] = useState(false);
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const toast = useToast();

    const handleGetOtpClick = () => {
        if (email) {
            setShowOtpInput(true);
        } else {
            toast({
                title: "Email required.",
                description: "Please fill in the fields.",
                status: "warning",
                duration: 5000,
                isClosable: true,
            });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Logic to handle OTP submission
        console.log('OTP submitted:', otp);
    };

    return (
        <>
            <div className="col-md-4 col-md-offset-4" id="login">
                <section id="inner-wrapper" className="login">
                    <article>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-envelope"> </i></span>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your Gmail"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <button
                            type="button"
                            className="btn btn-success btn-block"
                            onClick={handleGetOtpClick}
                        >
                            Get OTP
                        </button>
                        {showOtpInput && (
                            <>
                                <div className="form-group" style={{ marginTop: '10px' }}>
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-key"> </i></span>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter OTP"
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-success btn-block"
                                    onClick={handleSubmit}
                                    disabled={!otp}
                                >
                                    Submit
                                </button>
                            </>
                        )}
                    </article>
                    <br />
                    <p className="registr-footer-text">
                        Don't have an account? <Link style={{color:'blue'}}to="/register">Sign up</Link>
                    </p>
                </section>
            </div>
        </>
    );
};

// import React, { useState } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
// import {
//   Box,
//   Button,
//   FormControl,
//   FormLabel,
//   Input,
//   InputGroup,
//   InputLeftElement,
//   useToast,
// } from '@chakra-ui/react';
// import { EmailIcon, LockIcon } from '@chakra-ui/icons';

// export const Login = () => {
//   const [showOtpInput, setShowOtpInput] = useState(false);
//   const [email, setEmail] = useState('');
//   const [otp, setOtp] = useState('');
//   const toast = useToast();

//   const handleGetOtpClick = () => {
//     if (email) {
//       setShowOtpInput(true);
//     } else {
//       toast({
//         title: 'Email required.',
//         description: 'Please fill in the Gmail field.',
//         status: 'warning',
//         duration: 5000,
//         isClosable: true,
//       });
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Logic to handle OTP submission
//     console.log('OTP submitted:', otp);
//   };

//   return (
//     <Box width="sm" mx="auto" mt="10">
//       <Box bg="white" p="6" boxShadow="lg" rounded="lg">
//         <form onSubmit={handleSubmit}>
//           <FormControl isRequired>
//             <FormLabel>Email</FormLabel>
//             <InputGroup>
//               <InputLeftElement pointerEvents="none">
//                 <EmailIcon color="gray.300" />
//               </InputLeftElement>
//               <Input
//                 type="email"
//                 placeholder="Enter your Gmail"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </InputGroup>
//           </FormControl>
//           <Button
//             colorScheme="teal"
//             width="full"
//             mt="4"
//             onClick={handleGetOtpClick}
//           >
//             Get OTP
//           </Button>
//           {showOtpInput && (
//             <>
//               <FormControl isRequired mt="4">
//                 <FormLabel>OTP</FormLabel>
//                 <InputGroup>
//                   <InputLeftElement pointerEvents="none">
//                     <LockIcon color="gray.300" />
//                   </InputLeftElement>
//                   <Input
//                     type="text"
//                     placeholder="Enter OTP"
//                     value={otp}
//                     onChange={(e) => setOtp(e.target.value)}
//                   />
//                 </InputGroup>
//               </FormControl>
//               <Button
//                 colorScheme="teal"
//                 width="full"
//                 mt="4"
//                 type="submit"
//                 disabled={!otp}
//               >
//                 Submit
//               </Button>
//             </>
//           )}
//         </form>
//         <Box mt="4" textAlign="center">
//           <RouterLink to="/register" style={{ color: 'blue.500' }}>
//             Don't have an account? Sign up
//           </RouterLink>
//         </Box>
//       </Box>
//     </Box>
//   );
// };
