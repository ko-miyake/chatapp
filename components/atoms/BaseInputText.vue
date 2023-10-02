<script setup lang="ts">
const props = withDefaults(defineProps<{modelValue: string;}>(),
{
  modelValue: '' 
});

const emit = defineEmits<{
  (e: 'update:modelValue', text: string): void
}>();

const text = computed({
  get: () => props.modelValue,
  set: (value) => { // 値に変更があると呼ばれるsetter
    emit('update:modelValue', value);
  },
});
</script>

<template>
     <input type="text" v-model="text" class="bg-inputColor border border-gray-300 text-gray-900 text-sm rounded focus-visible:outline-originColor focus-visible:border-originColor focus:border-originColor block w-full px-2 py-3 " required>
</template>