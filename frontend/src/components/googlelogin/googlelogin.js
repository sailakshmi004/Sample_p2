// import React from 'react';
// import { Button } from 'react-bootstrap';
// import { auth, GoogleAuthProvider, signInWithPopup } from "../firebase/setup";

// const GoogleLogin = () => {
//   const handleLogin = () => {
//     const provider = new GoogleAuthProvider();
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         console.log(result.user);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return <Button onClick={handleLogin}>Login with Google</Button>;
// };

// export default GoogleLogin;


import React from 'react';
import { Button } from 'react-bootstrap';
import { auth, GoogleAuthProvider, signInWithPopup } from "../firebase/setup";

const GoogleLogin = () => {
  const handleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return <Button onClick={handleLogin}>Login with Google</Button>;
};

export default GoogleLogin;
