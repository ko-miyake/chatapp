<script setup lang="ts">
    import { doc, setDoc, updateDoc, getFirestore } from "firebase/firestore"; 

    const db = getFirestore();
    const {token} = useAuth();

 // Create an initial document to update.
    const frankDocRef = doc(db, `/user/${token.uid}`);
    
    await setDoc(frankDocRef, {
        name: "Frank",
        favorites: { food: "Pizza", color: "Blue", subject: "recess" },
        age: 12
    });

</script>

<template>
    index
</template>