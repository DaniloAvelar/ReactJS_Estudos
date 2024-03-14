// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6ZlfC1-CD3wgH4Q_e0aLlhM7PaIP3k6o",
    authDomain: "miniblog-6b71b.firebaseapp.com",
    projectId: "miniblog-6b71b",
    storageBucket: "miniblog-6b71b.appspot.com",
    messagingSenderId: "193328871560",
    appId: "1:193328871560:web:9e0e8a4a031ed40f34c73d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//inicializando o DB com o metodo get
const db = getFirestore(app);

//para utilizar em todos os componentes
export { db };