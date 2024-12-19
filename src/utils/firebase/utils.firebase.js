import { initializeApp } from "firebase/app";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc} from 'firebase/firestore';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCsqtqob44MGY-S6j_NBFNhVc4O9khSB7E",
  authDomain: "crwn-clothing-db-92eed.firebaseapp.com",
  projectId: "crwn-clothing-db-92eed",
  storageBucket: "crwn-clothing-db-92eed.firebasestorage.app",
  messagingSenderId: "704239392558",
  appId: "1:704239392558:web:3042148c20b38300e38cbf",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ 
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const useDocRef = doc(db, 'users', userAuth.uid);
    console.log(useDocRef);
    
    const userSnapshot = await getDoc(useDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(useDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log('error creating the user', error.message);
            
        }
    }
};

