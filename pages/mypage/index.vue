<script setup lang="ts">
    const { token } =  useAuth();
    const imageRef = ref(null);
    const name: Ref<string> = ref(token.value.userName);
    const img:string = token.value.photoURL;

    const up = () => {
        useStorage().uploadIcon(imageRef.value.files[0]);
    }

    const changeName = () => {
        useAuth().changeUserName(name.value);
    }

    const loadFile = (e) => {
        const input = e.target;
        const file = input.files[0];
        const type = file.type;
        const output = document.getElementById('preview_img');
            output.src = URL.createObjectURL(event.target.files[0]);
            output.onload = function() {
                URL.revokeObjectURL(output.src)
            }
    };
</script>

<template>
    <div>
        <BaseCardBox>
            <h1>マイページ</h1>
            <div class="flex gap-2 flex-wrap flex-col mt-2">
                <div>
                    <h2>アイコン</h2>
                    <div class="flex items-center space-x-6">
                        <div class="shrink-0">
                            <img id='preview_img' :src="img" class="h-16 w-16 object-cover rounded-full" alt="Current profile photo" />
                        </div>
                        <label class="block">
                        <span class="sr-only">Choose profile photo</span>
                        <input type="file" accept="image/png" ref="imageRef" @change="loadFile" class="block w-full text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-violet-700
                            hover:file:bg-violet-100
                        "/>
                        </label>
                    </div>
                    <BaseButton @click="up" class="w-full mt-2">アップロード</BaseButton>

                </div>
                <div class="mt-4">
                    <h2>ユーザー名</h2>
                    <div class="flex gap-2">
                        <BaseInputText v-model="name"/>
                        <BaseButton @click="changeName" class="w-20">変更</BaseButton>
                    </div>
                </div>         


            </div>
        </BaseCardBox>

    </div>
  </template>
