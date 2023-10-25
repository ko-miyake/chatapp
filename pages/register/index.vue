<script setup lang="ts">
  definePageMeta({
    layout: "auth",
  });
  const email: Ref<string> = ref('');
  const password: Ref<string> = ref('');
  const userName: Ref<string> = ref('');

  let emailErrorMassage : Ref<string> = ref('');
  let passwordErrorMassage: Ref<string> = ref('');
  const emailRegexp = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
  const passwordRegexp = /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,20}$/i;

const signUp = async (): Promise<void> => {
  
      if (emailRegexp.test(email.value)) {
        emailErrorMassage.value = "このメールアドレスは無効です。正しい形式で入力してください。";
      }
      if (passwordRegexp.test(password.value)) {
        passwordErrorMassage.value = "このパスワードは無効です。半角英数字を含んで8-20文字の範囲内で入力してください。";
      }
      if (email.value === "") {
        emailErrorMassage.value = "メールアドレスを入力してください。";
      }
      if (password.value === "") {
        passwordErrorMassage.value = "パスワードを入力してください。";
      }
      if (emailErrorMassage.value !== "" || passwordErrorMassage.value !== "") {
        return;
      }
      
      await useAuth().signUp(email.value, password.value, userName.value);
}


</script>

<template>
    <div>
        <BaseCardBox class="mx-auto max-w-xl	">
            <h1 class="font-bold	mb-10">ユーザー登録</h1>
            <form action="" @submit.prevent="onSubmit" class="">
                <div class="mb-6">
                    <BaseInputText v-model="email" placeholder="メールアドレス" require />
                    <p v-if="emailErrorMassage" class="hoge">{{ emailErrorMassage }}</p>
                </div>
                <div class="mb-6">
                    <BaseInputText v-model="userName" placeholder="ユーザー名" require />
                </div>
                <div class="mb-6">
                    <BaseInputText v-model="password" placeholder="パスワード" type="password" require />
                    <p v-if="passwordErrorMassage" class="hoge">{{ passwordErrorMassage }}</p>
                </div>
                <BaseButton class="w-full" @click="signUp">登録</BaseButton>
              </form>
        </BaseCardBox>

    </div>
  </template>
