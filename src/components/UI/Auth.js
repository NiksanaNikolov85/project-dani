import { initializeApp } from "firebase/app";
import {
    getAuth,
    signOut,
    signInWithEmailAndPassword,
    connectAuthEmulator,
    createUserWithEmailAndPassword } from "firebase/auth";
import { showLoginError} from './ErrorLogin';

const firebaseConfig = initializeApp(
    {
        apiKey: "AIzaSyAlJ6XlljwGnr5xV68nbHcC5D7WcywbbZU",
        authDomain: "project-dani-33e86.firebaseapp.com",
        projectId: "project-dani-33e86",
        storageBucket: "project-dani-33e86.appspot.com",
        messagingSenderId: "981773648772",
        appId: "1:981773648772:web:d622121e2c295b16a5d3d1",
        measurementId: "G-2NXCSZ5CCR"
    }
);

const auth = getAuth(firebaseConfig);
connectAuthEmulator(auth, "http://localhost:9099/");


export const loginEmailPassword = async (loginEmail, loginPassword) => {
    try {
        const userData = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        console.log(userData.user, 7777);   
    }
    catch(error){
        console.log(error.message,777777);
        showLoginError(error);
    }
}

export const createAccount = async (loginEmail, loginPassword) => {
    try {
        const userData = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
        console.log(userData.user, 7777);
    }
    catch (error) {
        console.log(error.message, 4444444);
        showLoginError(error);
    }
}

export const logOut = async () => {
    try {const logOutData = await signOut(auth)}
catch( error) {
console.log('Izhod');
    }
}

 



