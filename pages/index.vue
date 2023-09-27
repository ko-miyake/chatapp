<template>
    <div>
      <h1>ログイン画面</h1>
      <div class="hogehoge">
        <div class="flex">
            <p>email</p>
            <input type="text" v-model="email">
        </div>
        <div class="flex">
            <p>password</p>
            <input type="text" v-model="password">
        </div>
        <button @click="signIn"></button>
        
      </div>
    </div>
  </template>
  
  <script>
  import {
      getAuth,
      createUserWithEmailAndPassword,
      signOut,
  } from 'firebase/auth';
  
  export default {
      data: () => ({
          currentUser: null,
          email: "",
          password: ""
      }),
      methods: {
          signIn(){

            try{
                const auth = getAuth();
                console.log( "try" );
                // firebase v9 
                createUserWithEmailAndPassword(auth, this.email, this.password)
                    .then((userCredential) => {
                    const user = userCredential.user;
                    console.log( user );
                    })
                    .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log( errorCode );
                    console.log( errorMessage );
                    });
                } catch(e){
                    console.error(e);
                }
            },
          signOutUser() {
              signOut(getAuth());
          }
          
      }
  }
  </script>
  