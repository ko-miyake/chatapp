<script>

</script>

<template>
    <div class="wrapper bg-secondaryColor">
      <TheHeader class="header" />
      <main class="main">
        <slot />  
      </main>
      <TheFooter />
    </div>


  </template>
  
  <style scoped>
    .wrapper{
      min-height: 100dvh;
      padding: 1rem;
    }
  </style>