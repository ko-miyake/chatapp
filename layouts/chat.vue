<template>
    <div class="wrapper bg-backgoundColor">
      <TheHeader class="header fixed top-0 w-full" />
      <main class="main pt-14 pb-78">
        <slot />  
      </main>
      <ChatFooter class="fixed bottom-0 w-full" />
    </div>


  </template>
  
  <style scoped>
    .wrapper{
      min-height: 100dvh;
      font-family: Mangueira Alt,sans-serif;
      display: flex;
      flex-direction: column;
    }
    .pb-78{
      padding-bottom: 78px;
    }
  </style>