<script setup lang="ts">
  const email: Ref<string> = ref('');
  const password: Ref<string> = ref('');

  const signUp = async (): Promise<void> => {
    await useAuth().signIn(email.value, password.value);
  }
</script>

<template>
    <div>
        <BaseCardBox class="mx-auto max-w-xl">
            <h1 class="font-bold	mb-10">ログイン</h1>
                <div class="mb-6">
                    <BaseInputText v-model="email" placeholder="メールアドレス"/>
                </div>
                <div class="mb-6">
                    <BaseInputText v-model="password" placeholder="パスワード" type="password"/>
                </div>
                <BaseButton class="w-full" @click="signUp">登録</BaseButton>
        </BaseCardBox>

    </div>
  </template>


 
