<script setup lang="ts">
    const { token } =  useAuth();
    const logout = async ():void => {
        await useAuth().signOut();
    }
</script>
<template>
    <header class="flex gap-4 overflow-hidden bg-white w-full p-4 items-center">
        <div>
            <h1><NuxtLink to="/" class="flex gap-1 items-center"><img class="w-8" src="/images/chatImage.png"> ChatApp</NuxtLink></h1>
        </div>
        <div class="ml-auto flex gap-2">
            <template v-if="useRoute().path.indexOf('login') != -1 || useRoute().path.indexOf('register')  != -1">
                <NuxtLink to="/login" class="flex gap-1 items-center">ログイン</NuxtLink>
                <NuxtLink to="/register" class="flex gap-1 items-center">会員登録</NuxtLink>
            </template>
            <template v-else>
                <NuxtLink to="/mypage" class="flex gap-1 items-center"> <img class="w-6 h-6" src="/images/user.png" alt=""> {{ token.userName }}さん</NuxtLink>
                <p @click="logout">ログアウト</p>
            </template>

        </div>
    </header>
</template>

<style>

</style>