<script setup lang="ts">  
  const chatRoomName: Ref<string> = ref('');
  const chatRooms = await useDB().getChatRooms();
  // console.log(useState('chatrooms'));
  console.log(chatRooms);
  const createRoom = async (): Promise<void> => {
    await useDB().createChatRoom(chatRoomName.value);
  }

</script>


<template>
    <BaseCardBox>
        <h1>新規チャットルーム作成</h1>
        <div class="flex gap-2">
          <BaseInputText" v-model="chatRoomName"/>
          <BaseButton @click="createRoom" class="w-20">作成</BaseButton>
        </div>
    </BaseCardBox>

    <ul class="flex gap-4 mt-4 w-full">
      <li v-for="room in chatRooms" :key="room.id" class="max-w-[50%]">
        <BaseLinkCardBox :link="`/works/${room.id}/`">
          <h2>title</h2>
          <p>comment</p>
        </BaseLinkCardBox>
      </li>
    </ul>
</template>
  
