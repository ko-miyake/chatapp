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
    roomVal = await useDB().getRoom(useRoute().params.id);;

    nextTick(() => {
        setTimeout(() => {
            const element = document.documentElement;
            const bottom: number = element.scrollHeight - element.clientHeight;
            window.scroll(0, bottom);    
        }, 300);
    })

    const getIconData = ( uid: string ):string => {
        const url = useStorage().getIcon(uid);
        return url;
    }
    
</script>


<template>
    <div class="p-4 flex flex-col gap-4">
        <template v-if="roomVal" v-for="value in roomVal" >
            <ChatTextItem ref="messageElement" class="flex gap-4" :class="{'flex-row-reverse [&>div>.chat]:bg-green-300':value.userID == token.uid}" :iconData = "getIconData(value.userID)">
                <template v-slot:text class="bg-white">
                    {{ value.text }}
                </template>
                <template v-slot:name>
                    {{ value.username }}
                </template>
            </ChatTextItem>
        </template>

    </div>
</template>

<!--  :class="{'gap-4':value.userID == token.value.uid}"" -->