import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDRJHEcTXirTvGlhY28PxEVs7fS0nu9CPk",
  authDomain: "react-balance-sheet-891c5.firebaseapp.com",
  projectId: "react-balance-sheet-891c5",
  storageBucket: "react-balance-sheet-891c5.appspot.com",
  messagingSenderId: "437262016746",
  appId: "1:437262016746:web:08f78ba266e6991ad3b793",
  measurementId: "G-2ZJG087HC1"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);


// export const createUserDocument =  async (user , data) => {

//     if(!user) return;

//     // const userRef = await addDoc(`users/${user.uid}`);
//     const userRef = collection(db , "users");

//     // const docRef = await addDoc(collection(db,`users/${user.uid}`), {
//     //     first: "Ada",
//     //     last: "Lovelace",
//     //     born: 1815
//     //   });



//     // const getData = await userRef.get();

//     // if(!getData){

//         const {email} = user;
//         const {userData} = data;

//         try{
//             // userRef.set({
//             //     userData,
//             //     email,
//             //     createdAt: new Date(),
//             // });
//             const docRef = await addDoc(collection(db, "users"), {
//                 first: "Alan",
//                 middle: "Mathison",
//                 last: "Turing",
//                 born: 1912
//               });
//               console.log("Document written with ID: ", docRef.id);
//         }
//         catch(err){
//             console.log("showing Errors", err);
//         }
//     // }
// }