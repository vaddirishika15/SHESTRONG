import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyDREgHMys48WHUphUoVXHokT9xeRyRANgs",
  authDomain: "loginpage-b7d34.firebaseapp.com",
  projectId: "loginpage-b7d34",
  storageBucket: "loginpage-b7d34.appspot.com",
  messagingSenderId: "954777866363",
  appId: "1:954777866363:web:73ff8ed8cf41feb9df52de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const submit=document.getElementById('submit');
submit.addEventListener("click",function(event){
event.preventDefault()
const email=document.getElementById('email').value;
const password=document.getElementById('password').value;
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Account login successfully!")
    window.location.href= "in.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
})
