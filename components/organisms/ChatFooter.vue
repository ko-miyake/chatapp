<script setup lang="ts">
    const text: Ref<string> = ref('');
    const createRoom = async (): Promise<void> => {
        await useDB().sendChat(text.value, useRoute().params.id);
        text.value = '';
        const element = document.documentElement;
        const bottom: number = element.scrollHeight - element.clientHeight;
        window.scroll(0, bottom);
    } 

</script>

<template>
    <div class="bg-white mt-auto p-4">
        <form action="" @submit.prevent="onSubmit" class="form flex gap-2">
            <BaseInputText v-model="text"/>
            <BaseButton @click="createRoom" class="w-20">作成</BaseButton>
        </form>
    </div>
</template>

