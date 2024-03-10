import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCFXDX5RJ5YX148852LFI6H_UDg3jH1gN0",
    authDomain: "thiago-estudo.firebaseapp.com",
    projectId: "thiago-estudo",
    storageBucket: "thiago-estudo.appspot.com",
    messagingSenderId: "329816816705",
    appId: "1:329816816705:web:2c68e25a049303ef631ac0"
};

export const app = initializeApp(firebaseConfig); 

export const db = getFirestore(app);