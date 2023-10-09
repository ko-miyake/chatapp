<script setup lang="ts">
    const { token } =  useAuth();
</script>
<template>
    <header class="flex gap-4 overflow-hidden bg-white w-full p-4">
        <div>
            <h1>チャットアプリ</h1>
        </div>
        
        <div class="ml-auto flex">
            {{ token.userName }}さん
        </div>
    </header>
</template>

<style>

</style>