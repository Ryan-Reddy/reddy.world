// This snippet file was generated by processing the source file:
// ./auth-next/anonymous.js
//
// To update the snippets in this file, edit the source and then run
// 'npm run snippets'.
// [START auth_anon_sign_in_modular]
import {getAuth, signInAnonymously} from "firebase/auth";

export function anonSignIn() {


  const auth = getAuth();
  signInAnonymously(auth)
    .then(() => {
      console.log('Signed in ANON..')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
    });
// [END auth_anon_sign_in_modular]
}