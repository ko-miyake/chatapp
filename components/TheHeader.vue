<script setup lang="ts">
    const { token } =  useAuth();
</script>
<template>
    <header class="flex gap-4 overflow-hidden bg-white w-full p-4 items-center">
        <div>
            <h1><NuxtLink to="/" class="flex gap-1 items-center"><img class="w-8" src="/images/chatImage.png"> ChatApp</NuxtLink></h1>
        </div>
        
        <div class="ml-auto flex gap-2">
            <span class="flex gap-1 items-center"> <img class="w-6 h-6" src="/images/user.png" alt=""> {{ token.userName }}さん</span>
            <NuxtLink to="/">ログアウト</NuxtLink>
        </div>
    </header>
</template>

<style>

</style>