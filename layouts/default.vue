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
  
  <style scoped>
    .wrapper{
      min-height: 100dvh;
      font-family: Mangueira Alt,sans-serif;
      display: flex;
      flex-direction: column;
    }
  </style>