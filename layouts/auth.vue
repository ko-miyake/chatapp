<script>

</script>

<template>
    <div class="wrapper bg-backgoundColor py-8 px-4">
      <TheHeader class="header fixed top-0 w-full" />
      <main class="main">
        <slot />  
      </main>
      <ChatFooter class="fixed bottom-0 w-full" />

    </div>


  </template>
  
  <style scoped>
    .wrapper{
      min-height: 100dvh;
      font-family: Mangueira Alt,sans-serif;
    }
  </style>