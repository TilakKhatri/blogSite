import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//     apiKey: "AIzaSyCskU1t9NeGfURz1FK1hr55cH9NKnfFFf0",
//     authDomain: "blog-app-e1513.firebaseapp.com",
//     projectId: "blog-app-e1513",
//     storageBucket: "blog-app-e1513.appspot.com",
//     messagingSenderId: "998241705122",
//     appId: "1:998241705122:web:def54e2c163e8cc4468bfb"
// };
const firebaseConfig = {
    apiKey: "AIzaSyDWhDiOT3cn0gZ9h1AaImnxoLFtRE53MnI",
    authDomain: "movie-app-b4c15.firebaseapp.com",
    projectId: "movie-app-b4c15",
    storageBucket: "movie-app-b4c15.appspot.com",
    messagingSenderId: "493876849996",
    appId: "1:493876849996:web:cb043bf3463db3d59033e9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export { app, db, storage };


