import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBJmnkroCkj58cL1EseuqemqrnyorPynZQ",
  authDomain: "canteen-project-356313.firebaseapp.com",
  projectId: "canteen-project-356313",
  storageBucket: "canteen-project-356313.appspot.com",
  messagingSenderId: "683765830754",
  appId: "1:683765830754:web:3ed07d6ffe367828e0ed3b",
  measurementId: "G-0MG42CYJPL",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider(app);
const auth = getAuth(app);
const googleBtn = document.getElementById("googleBtn");
function checkButton() {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      if (user) location.replace("services.html");
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

googleBtn.addEventListener("click", checkButton);
