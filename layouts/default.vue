<script>

</script>

<template>
    <div class="wrapper bg-backgoundColor">
      <TheHeader class="header" />
      <main class="main p-4">
        <slot />  
      </main>
      <TheFooter />
    </div>


  </template>


  <!-- ページトランジションを設定する場合は以下 -->
  <style>
      .wrapper{
      min-height: 100dvh;
      font-family: Mangueira Alt,sans-serif;
      display: flex;
      flex-direction: column;
    }
    .layout-enter-active,
    .layout-leave-active {
        transition: opacity 0.2s;
    }
    .layout-enter-from,
    .layout-leave-to {
        opacity: 0;
    }
  </style>