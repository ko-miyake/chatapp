<script setup lang="ts">
  
  const props = defineProps({
    iconData: Promise<String>,
  })
  const iconData = ref(props.iconData);
  const src = await iconData.value;
</script>

<template>
    <div>
        <div class="text-center">
            <BaseIcon class="shrink-0">
                <slot name="image"><img :src="src" /></slot>
            </BaseIcon>
            <slot name="name"><span>name</span></slot>

        </div>
        <div>
            <BaseChatText>
                <slot name="text">samleText</slot>
            </BaseChatText> 
        </div>

    </div>

</template>