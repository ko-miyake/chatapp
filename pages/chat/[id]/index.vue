<script setup lang="ts">
    import { doc, setDoc, updateDoc, getFirestore } from "firebase/firestore"; 

    definePageMeta({
        layout: "chat",
    });

    type ChatText = {
        chatroom: string| null,
        username: string | null,
        userID: string | null
        text: string | null,
        date: string | null
    }

    const { token } = useAuth();
    let roomVal: ChatText[] | null = null;
    // const roomVal: ChatText[] | null = await useDB().getRoom(useRoute().params.id);
    roomVal = await useDB().getRoom(useRoute().params.id);

    const hoge = ref<HTMLElement>("messageElement");
    console.log(hoge);

    nextTick(() => {
        setTimeout(() => {
            const element = document.documentElement;
            const bottom: number = element.scrollHeight - element.clientHeight;
            window.scroll(0, bottom);    
            console.log("hoge");
        }, 200);
    })
    // const observer: MutationObserver = new MutationObserver((mutation) => {
    //     const element = document.documentElement;
    //     const bottom: number = element.scrollHeight - element.clientHeight;
    //     window.scroll(0, bottom);
    // });
    // observer.observe(roomVal, {
    //     childList: true,
    //     subtree: true
    // });

    // const db = getFirestore();
    // const frankDocRef = doc(db, `/user/${token.value.uid}`);


    // console.log(token.value);

    // await setDoc(frankDocRef, {
    //     name: token.value.useName,
    //     iconData: null,
    //     profile: "hogehgoe",
    // });
</script>


<template>
    <div class="p-4 flex flex-col gap-4">
        <ChatTextItem ref="messageElement" v-if="roomVal" v-for="value in roomVal" class="flex gap-4" :class="{'flex-row-reverse [&>div>.chat]:bg-green-300':value.userID == token.uid}">
            <template v-slot:text class="bg-white">
                {{ value.text }}
            </template>
            <template v-slot:name>
                {{ value.username }}
            </template>
        </ChatTextItem>
    </div>
</template>

<!--  :class="{'gap-4':value.userID == token.value.uid}"" -->