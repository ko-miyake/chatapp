<script>
export default {
  // modelの設定を行う
  model: {
    prop: 'parentInput', //　親モデルの値を'parentModel'というkeyで受け取る
    event: 'input' // イベント種別
  },
  props: {
    parentModel: String // 親モデルの値が入ってくるので、型を指定してあげる
  },
  computed: {
    computedModel: {
      get () {
        return this.parentModel
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>

<template>
     <input type="text" v-model="computedModel" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required>
</template>