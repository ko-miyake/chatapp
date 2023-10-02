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
    <BaseCardBox class="Hoge">
        <h1>リアルタイムチャット</h1>
    </BaseCardBox>
</template>
  
