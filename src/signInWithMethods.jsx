import {useState} from 'react';
import { GoogleAuthProvider,FacebookAuthProvider,signOut,GithubAuthProvider, signInWithPopup } from "firebase/auth";
import auth from '/data/data/com.termux/files/home/firebase-authentication/src/conponents/config';

 //  import { FacebookAuthProvider } from "firebase/auth";
  // import { GithubAuthProvider } from "firebase/auth";
 const SignInMethod = ()=>{
   const [googleUser,setGoogleUser]= useState(null);
   const googleProvider = new GoogleAuthProvider();
   const googleBtn =()=>{
     signInWithPopup(auth,googleProvider)
     .then((res)=>setGoogleUser(res.user))
     .catch((error)=>alert(error));
   }
   const facebookBtn =()=>{
     const provider =new FacebookAuthProvider();
     signInWithPopup(auth, provider)
     .then((res)=>alert(res.user))
     .catch((error)=>alert(error.message))
   }
   const githubBtn =()=>{
     const provider = new GithubAuthProvider()
     signInWithPopup(auth, provider)
     .then((res)=>alert(res.user))
     .catch((error)=>alert(error.message));
   }
   const logOutBtn =()=>{
     signOut(auth)
     .then((res)=>{
     alert("successfull sign out")
    setGoogleUser(null);
     })
      .catch((error)=>alert(error))
   }
   return (<> 
  <div>
  {googleUser && <div> 
  <p>{googleUser.displayName}</p>
  <p>{googleUser.email}</p>
  </div>}
   <button onClick={googleBtn}>Google sign In</button>
    <button onClick={facebookBtn}>Facebook sign In</button>
    <button onClick={githubBtn}>Github sign In</button>
     <div><button onClick={logOutBtn}>Log Out</button></div>
    </div>
   </>)
 }
 export default SignInMethod;