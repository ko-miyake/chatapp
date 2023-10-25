import { initializeApp } from 'firebase/app';
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
//import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { Firestore, getFirestore } from 'firebase/firestore'
//import { getStorage, connectStorageEmulator } from "firebase/storage";
import { getAuth, connectAuthEmulator } from "firebase/auth";

import { defineNuxtPlugin } from '#app';


export default defineNuxtPlugin(() => {
    const runtimeConfig = useRuntimeConfig();

    const firebaseConfig = {
        apiKey: runtimeConfig.public.apiKey,
        authDomain: runtimeConfig.public.authDomain,
        databaseURL: runtimeConfig.public.databaseURL,
        projectId: runtimeConfig.public.projectId,
        storageBucket: runtimeConfig.public.storageBucket,
        messagingSenderId: runtimeConfig.public.messagingSenderId,
        appId: runtimeConfig.public.appId
    };
    initializeApp(firebaseConfig);

    // const db = getFirestore(firebaseConfig)
});

 
