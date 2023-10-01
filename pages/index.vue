<script setup lang="ts">
  const email: Ref<string> = ref('');
  const password: Ref<string> = ref('');

//   const signIn = async (): Promise<void> => {
//     await useAuth().signIn(email.value, password.value);
//     if (useAuth().token.value) {
//       navigateTo('/');
//     }
//   }
</script>


<template>
    <div>
        <BaseCardBox class="Hoge
        ">
            <h1>ログイン画面</h1>
            <form action="">
                <div class="flex">
                    <p>email</p>
                    <BaseInputText v-model="email" />
                </div>
                <div class="flex">
                    <p>password</p>
                    <BaseInputText v-model="password" />
                </div>
            </form>
        </BaseCardBox>

    </div>
  </template>
  
  <!-- <script>
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
  </script> -->
  