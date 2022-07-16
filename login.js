import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyD-jmmMIf2K7KDcTdVi4Sa0l2U89-nNu5s",
    authDomain: "canteen-89bbb.firebaseapp.com",
    projectId: "canteen-89bbb",
    storageBucket: "canteen-89bbb.appspot.com",
    messagingSenderId: "560733757542",
    appId: "1:560733757542:web:f60887c1b5ebe522834da7",
    measurementId: "G-0MG42CYJPL"
  };

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider(app);
const auth = getAuth(app);
function login(){
    console.log("starts login");

    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(user.email);  

      window.location.assign("./services.html");
        
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}

function logout(){
    signOut(auth).then(() => {
        window.location.assign("./index.html");
        console.log("Sign-out successful");
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        // window.location.("user.html");
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log("logined");
      console.log(user.email);
      window.location.assign("./services.html");
      
      // ...
    } else {
        
        console.log("User is signed out");
      // User is signed out
      // ...
    }
  });




document.getElementById("googleBtn").addEventListener("click", login);
