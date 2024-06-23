
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyC8AU_tpx_IvPMMpCCHTxEXj9WMtMcwZNk",
//   authDomain: "sai-firebase-996a7.firebaseapp.com",
//   projectId: "sai-firebase-996a7",
//   storageBucket: "sai-firebase-996a7.appspot.com",
//   messagingSenderId: "840655543357",
//   appId: "1:840655543357:web:ec55e867370ba4894e9e54"
// };

// const app = initializeApp(firebaseConfig);
// export const auth =getAuth(app)
// export default firebaseConfig;




// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {



//   apiKey: process.env.REACT_APP_Firebaseapi,
//     authDomain: "otpgen-162af.firebaseapp.com",
//     projectId: "otpgen-162af",
//     storageBucket: process.env.REACT_APP_bucket,
//     messagingSenderId: process.env.REACT_APP_msgid,
//     appId: process.env.REACT_APP_fireappid,

  

// };
// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);


// src/firebase/setup.js

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_Firebaseapi,
//   authDomain: process.env.REACT_APP_auth,
//   projectId: process.env.REACT_APP_projectid,
//   storageBucket: process.env.REACT_APP_bucket,
//   messagingSenderId: process.env.REACT_APP_msgid,
//   appId: process.env.REACT_APP_fireappid,
// };

// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8AU_tpx_IvPMMpCCHTxEXj9WMtMcwZNk",
  authDomain: "sai-firebase-996a7.firebaseapp.com",
  projectId: "sai-firebase-996a7",
  storageBucket: "sai-firebase-996a7.appspot.com",
  messagingSenderId: "840655543357",
  appId: "1:840655543357:web:ec55e867370ba4894e9e54"
};

const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)