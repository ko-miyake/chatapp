<script setup lang="ts">


const email: string = '';
const password: string = '';
 

</script>

<template>
    <div>
        <BaseCardBox class="Hoge">
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



<!-- <template>
    <div class="signup-form">
      <p class="title">SNSアカウントで登録</p>
      <ul class="signup-buttons">
        <li><button class="google-button" @click="googleSignUp"><span>Googleで登録</span></button></li>
      </ul>
    </div>
  </template>
   
   <script setup lang="ts">

 //   const signIn = async (): Promise<void> => {
 //     await useAuth().signIn(email.value, password.value);
 //     if (useAuth().token.value) {
 //       navigateTo('/');
 //     }
 //   }
 </script> -->
 
 
