<template>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </template>
  
  <!-- ページトランジションを設定する場合は以下 -->
  <style>
    .layout-enter-active,
    .layout-leave-active {
        transition: opacity 0.2s;
    }
    .layout-enter-from,
    .layout-leave-to {
        opacity: 0;
    }
  </style>
