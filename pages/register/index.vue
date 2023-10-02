<script setup lang="ts">
definePageMeta({
  layout: "auth",
});
const email: Ref<string> = ref('');
const password: Ref<string> = ref('');
const userName: Ref<string> = ref('');

const signUp = async (): Promise<void> => {
  console.log(email);
  await useAuth().signUp(email.value, password.value, userName.value);
}
</script>

<template>
    <div>
        <BaseCardBox class="mx-auto max-w-xl	">
            <h1 class="font-bold	mb-10">ユーザー登録</h1>
                <div class="mb-6">
                    <BaseInputText v-model="email" placeholder="メールアドレス"/>
                </div>
                <div class="mb-6">
                    <BaseInputText v-model="userName" placeholder="ユーザー名"/>
                </div>
                <div class="mb-6">
                    <BaseInputText v-model="password" placeholder="パスワード" type="password"/>
                </div>
                <BaseButton @click="signUp">登録</BaseButton>
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
 
 
