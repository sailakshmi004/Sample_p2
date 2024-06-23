// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import PrimaryButton from "./shared/button";
// import firebase from './firebase'
// // import GoogleLogin from "./google-login";

// const PhoneLogin = () => {
//   const [form, setForm] = useState(true);
//   const [alert, setAlert] = useState(false);
//   const [mobile, setMobile] = useState("");
//   const [otp, setOtp] = useState("");

//   const setUpRecaptcha = () => {
//     window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
//       "recaptcha-container",
//       {
//         size: "invisible",
//         callback: function (response) {
//           console.log("Captcha Resolved");
//           onSignInSubmit();
//         },
//         defaultCountry: "IN",
//       }
//     );
//   };

//   const onSignInSubmit = (e) => {
//     e.preventDefault();
//     setUpRecaptcha();
//     let phoneNumber = "+91" + mobile;
//     console.log(phoneNumber);
//     let appVerifier = window.recaptchaVerifier;
//     firebase
//       .auth()
//       .signInWithPhoneNumber(phoneNumber, appVerifier)
//       .then(function (confirmationResult) {
//         // SMS sent. Prompt user to type the code from the message, then sign the
//         // user in with confirmationResult.confirm(code).
//         window.confirmationResult = confirmationResult;
//         console.log("OTP is sent");
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };

//   const onSubmitOtp = (e) => {
//     e.preventDefault();
//     let otpInput = otp;
//     let optConfirm = window.confirmationResult;
//     optConfirm
//       .confirm(otpInput)
//       .then(function (result) {
//         // User signed in successfully.
//         let user = result.user;
//         console.log("User signed in successfully:", user);
//       })
//       .catch(function (error) {
//         console.log(error);
//         alert("Incorrect OTP");
//       });
//   };

//   const onChangeHandler = (e) => {
//     const { name, value } = e.target;
//     if (name === "mobile") {
//       setMobile(value);
//     } else if (name === "otp") {
//       setOtp(value);
//     }
//   };

//   return (
//     <div>
//       <Container fluid="sm" className="mt-3">
//         <Row className="justify-content-center">
//           <Col xs={12} md={6} lg={5}>
//             <h2 className="mb-3">Login</h2>
//             <Form className="form" onSubmit={onSignInSubmit}>
//               <div id="recaptcha-container"></div>
//               <Form.Group>
//                 <Form.Control
//                   type="number"
//                   name="mobile"
//                   placeholder="Mobile Number"
//                   onChange={onChangeHandler}
//                   required
//                 />
//               </Form.Group>
//               <PrimaryButton button="Submit" type="submit" />
//             </Form>
//           </Col>
//         </Row>
//         <Row className="justify-content-center">
//           <Col xs={12} md={6} lg={5}>
//             <h2 className="mb-3">Enter OTP</h2>
//             <Form className="form" onSubmit={onSubmitOtp}>
//               <Form.Group>
//                 <Form.Control
//                   id="otp"
//                   type="number"
//                   name="otp"
//                   placeholder="OTP"
//                   onChange={onChangeHandler}
//                 />
//               </Form.Group>
//               <PrimaryButton button="Submit" type="submit" />
//             </Form>
//           </Col>
//         </Row>
//         {/* <GoogleLogin /> */}
//       </Container>
//     </div>
//   );
// };

// export default PhoneLogin;
// import React, { useState } from "react";
// import  Form  from "react-bootstrap/Form";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import firebaseConfig from "../firebase/setup";
// import { getAuth, RecaptchaVerifier } from "firebase/auth";

// // import PrimaryButton from "../shared/button"; // Ensure correct path
// // import GoogleLogin from "../google-login"; // Ensure correct path

// const PhoneLogin = () => {
//   const [form, setForm] = useState(true);
//   const [alert, setAlert] = useState(false);
//   const [mobile, setMobile] = useState("");
//   const [otp, setOtp] = useState("");

//   const setUpRecaptcha = () => {
//     window.recaptchaVerifier = new firebaseConfig.auth.RecaptchaVerifier(
//       "recaptcha-container",
//       {
//         size: "invisible",
//         callback: function (response) {
//           console.log("Captcha Resolved");
//           onSignInSubmit();
//         },
//         defaultCountry: "IN",
//       }
//     );
//   };


//   const onSignInSubmit = (e) => {
//     e.preventDefault();
//     setUpRecaptcha();
//     let phoneNumber = "+91" + mobile;
//     console.log(phoneNumber);
//     let appVerifier = window.recaptchaVerifier;
//     firebaseConfig
//       .auth()
//       .signInWithPhoneNumber(phoneNumber, appVerifier)
//       .then(function (confirmationResult) {
//         window.confirmationResult = confirmationResult;
//         console.log("OTP is sent");
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };

//   const onSubmitOtp = (e) => {
//     e.preventDefault();
//     let otpInput = otp;
//     let optConfirm = window.confirmationResult;
//     optConfirm
//       .confirm(otpInput)
//       .then(function (result) {
//         let user = result.user;
//         console.log("User signed in successfully:", user);
//       })
//       .catch(function (error) {
//         console.log(error);
//         alert("Incorrect OTP");
//       });
//   };

//   const onChangeHandler = (e) => {
//     const { name, value } = e.target;
//     if (name === "mobile") {
//       setMobile(value);
//     } else if (name === "otp") {
//       setOtp(value);
//     }
//   };

//   return (
//     <div>
//       <Container fluid="sm" className="mt-3">
//         <Row className="justify-content-center">
//           <Col xs={12} md={6} lg={5}>
//             <h2 className="mb-3">Login</h2>
//             <Form className="form" onSubmit={onSignInSubmit}>
//               <div id="recaptcha-container"></div>
//               <Form.Group>
//                 <Form.Control
//                   type="number"
//                   name="mobile"
//                   placeholder="Mobile Number"
//                   onChange={onChangeHandler}
//                   required
//                 />
//               </Form.Group>
//               <button button="Submit" type="submit" >Submit</button>
//             </Form>
//           </Col>
//         </Row>
//         <Row className="justify-content-center">
//           <Col xs={12} md={6} lg={5}>
//             <h2 className="mb-3">Enter OTP</h2>
//             <Form className="form" onSubmit={onSubmitOtp}>
//               <Form.Group>
//                 <Form.Control
//                   id="otp"
//                   type="number"
//                   name="otp"
//                   placeholder="OTP"
//                   onChange={onChangeHandler}
//                 />
//               </Form.Group>
//               <button button="Submit" type="submit">Submit</button>
//             </Form>
//           </Col>
//         </Row>
//         {/* <GoogleLogin /> */}
//       </Container>
//     </div>
//   );
// };

// export default PhoneLogin;


// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import GoogleLogin from "../googlelogin/googlelogin";
// import PrimaryButton from "../button/button";
// import { auth , RecaptchaVerifier, signInWithPhoneNumber } from "../firebase/setup";
//     import { formToJSON } from "axios";
// // import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "../../firebase"; // Ensure correct path

// const PhoneLogin = () => {
//   const [mobile, setMobile] = useState("");
//   const [otp, setOtp] = useState("");
//   const [confirmationResult, setConfirmationResult] = useState(null);

//   const setUpRecaptcha = () => {
//     window.recaptchaVerifier = new RecaptchaVerifier(
//       "recaptcha-container",
//       {
//         size: "invisible",
//         callback: (response) => {
//           console.log("Captcha Resolved");
//           onSignInSubmit();
//         },
//         defaultCountry: "IN",
//       },
//       auth
//     );
//   };

//   const onSignInSubmit = (e) => {
//     e.preventDefault();
//     setUpRecaptcha();
//     const phoneNumber = "+91" + mobile;
//     const appVerifier = window.recaptchaVerifier;

//     signInWithPhoneNumber(auth, phoneNumber, appVerifier)
//       .then((confirmationResult) => {
//         setConfirmationResult(confirmationResult);
//         console.log("OTP is sent");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const onSubmitOtp = (e) => {
//     e.preventDefault();
//     if (confirmationResult) {
//       confirmationResult
//         .confirm(otp)
//         .then((result) => {
//           console.log("User signed in successfully:", result.user);
//         })
//         .catch((error) => {
//           console.log(error);
//           alert("Incorrect OTP");
//         });
//     }
//   };

//   const onChangeHandler = (e) => {
//     const { name, value } = e.target;
//     if (name === "mobile") {
//       setMobile(value);
//     } else if (name === "otp") {
//       setOtp(value);
//     }
//   };

//   return (
//     <div>
//       <Container fluid="sm" className="mt-3">
//         <Row className="justify-content-center">
//           <Col xs={12} md={6} lg={5}>
//             <h2 className="mb-3">Login</h2>
//             <Form className="form" onSubmit={onSignInSubmit}>
//               <div id="recaptcha-container"></div>
//               <Form.Group>
//                 <Form.Control
//                   type="number"
//                   name="mobile"
//                   placeholder="Mobile Number"
//                   onChange={onChangeHandler}
//                   required
//                 />
//               </Form.Group>
//               <PrimaryButton button="Submit" type="submit" />
//             </Form>
//           </Col>
//         </Row>
//         <Row className="justify-content-center">
//           <Col xs={12} md={6} lg={5}>
//             <h2 className="mb-3">Enter OTP</h2>
//             <Form className="form" onSubmit={onSubmitOtp}>
//               <Form.Group>
//                 <Form.Control
//                   id="otp"
//                   type="number"
//                   name="otp"
//                   placeholder="OTP"
//                   onChange={onChangeHandler}
//                 />
//               </Form.Group>
//               <PrimaryButton button="Submit" type="submit" />
//             </Form>
//           </Col>
//         </Row>
//         <GoogleLogin />
//       </Container>
//     </div>
//   );
// };

// export default PhoneLogin;


// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import GoogleLogin from "../googlelogin/googlelogin";
// import PrimaryButton from "../button/button";
// import { auth , getAuth,RecaptchaVerifier, signInWithPhoneNumber } from "../firebase/setup";
// // const PhoneLogin = () => {
// //   const [mobile, setMobile] = useState("");
// //   const [otp, setOtp] = useState("");
// //   const [confirmationResult, setConfirmationResult] = useState(null);

// //   const setUpRecaptcha = () => {
// //     if (!window.recaptchaVerifier) {
// //       window.recaptchaVerifier = new RecaptchaVerifier(
// //         "recaptcha-container",
// //         {
// //           size: "invisible",
// //           callback: (response) => {
// //             console.log("Captcha Resolved");
// //             onSignInSubmit();
// //           },
// //           defaultCountry: "IN",
// //         },
// //         auth
// //       );
// //     }
// //   };

// const PhoneLogin = () => {
//     const [mobile, setMobile] = useState("");
//     const [otp, setOtp] = useState("");
//     const [confirmationResult, setConfirmationResult] = useState(null);
//     let recaptchaVerifier = null;
  
//     const setUpRecaptcha = () => {
//       if (!recaptchaVerifier) {
//         recaptchaVerifier = new RecaptchaVerifier("sign-in-button", {
//           size: "invisible",
//           callback: (response) => {
//             console.log("Captcha Resolved");
//             onSignInSubmit();
//           },
//         });
//       }
//     };


//   const onSignInSubmit = (e) => {
//     e.preventDefault();
//     setUpRecaptcha();
//     const phoneNumber = "+91" + mobile;
//     const appVerifier = window.recaptchaVerifier;

//     signInWithPhoneNumber(auth, phoneNumber, appVerifier)
//       .then((confirmationResult) => {
//         setConfirmationResult(confirmationResult);
//         console.log("OTP is sent");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const onSubmitOtp = (e) => {
//     e.preventDefault();
//     if (confirmationResult) {
//       confirmationResult
//         .confirm(otp)
//         .then((result) => {
//           console.log("User signed in successfully:", result.user);
//         })
//         .catch((error) => {
//           console.log(error);
//           alert("Incorrect OTP");
//         });
//     }
//   };

//   const onChangeHandler = (e) => {
//     const { name, value } = e.target;
//     if (name === "mobile") {
//       setMobile(value);
//     } else if (name === "otp") {
//       setOtp(value);
//     }
//   };

//   return (
//     <div>
//       <Container fluid="sm" className="mt-3">
//         <Row className="justify-content-center">
//           <Col xs={12} md={6} lg={5}>
//             <h2 className="mb-3">Login</h2>
//             <Form className="form" onSubmit={onSignInSubmit}>
//               <div id="recaptcha-container"></div>
//               <Form.Group>
//                 <Form.Control
//                   type="number"
//                   name="mobile"
//                   placeholder="Mobile Number"
//                   onChange={onChangeHandler}
//                   required
//                 />
//               </Form.Group>
//               <PrimaryButton button="Submit" type="submit" />
//             </Form>
//           </Col>
//         </Row>
//         <Row className="justify-content-center">
//           <Col xs={12} md={6} lg={5}>
//             <h2 className="mb-3">Enter OTP</h2>
//             <Form className="form" onSubmit={onSubmitOtp}>
//               <Form.Group>
//                 <Form.Control
//                   id="otp"
//                   type="number"
//                   name="otp"
//                   placeholder="OTP"
//                   onChange={onChangeHandler}
//                 />
//               </Form.Group>
//               <PrimaryButton button="Submit" type="submit" />
//             </Form>
//           </Col>
//         </Row>
//         <GoogleLogin />
//       </Container>
//     </div>
//   );
// };

// export default PhoneLogin;


import React, { useState } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import { auth } from "../firebase/setup";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import PrimaryButton from "../button/button";

const PhoneLogin = () => {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  let recaptchaVerifier = null;
  let confirmationResult = null;

  const setUpRecaptcha = () => {
    if (!recaptchaVerifier) {
      recaptchaVerifier = new RecaptchaVerifier("recaptcha-container", {
        size: "invisible",
        callback: (response) => {
          console.log("Captcha resolved");
          onSignInSubmit();
        },
        defaultCountry: "IN" // Adjust as needed
      }, auth);
    }
  };

  const onSignInSubmit = (e) => {
    e.preventDefault();
    setUpRecaptcha();
    const phoneNumber = "+91" + mobile;
    
    signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier)
      .then((result) => {
        confirmationResult = result;
        console.log("OTP is sent");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSubmitOtp = (e) => {
    e.preventDefault();
    if (confirmationResult) {
      confirmationResult
        .confirm(otp)
        .then((result) => {
          console.log("User signed in successfully:", result.user);
        })
        .catch((error) => {
          console.log(error);
          alert("Incorrect OTP");
        });
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "mobile") {
      setMobile(value);
    } else if (name === "otp") {
      setOtp(value);
    }
  };

  return (
    <div>
      <Container fluid="sm" className="mt-3">
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={5}>
            <h2 className="mb-3">Login</h2>
            <Form className="form" onSubmit={onSignInSubmit}>
              <div id="recaptcha-container"></div>
              <Form.Group>
                <Form.Control
                  type="number"
                  name="mobile"
                  placeholder="Mobile Number"
                  onChange={onChangeHandler}
                  required
                />
              </Form.Group>
              <PrimaryButton button="Submit" type="submit" />
            </Form>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={5}>
            <h2 className="mb-3">Enter OTP</h2>
            <Form className="form" onSubmit={onSubmitOtp}>
              <Form.Group>
                <Form.Control
                  id="otp"
                  type="number"
                  name="otp"
                  placeholder="OTP"
                  onChange={onChangeHandler}
                />
              </Form.Group>
              <PrimaryButton button="Submit" type="submit" />
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PhoneLogin;
