<template>
  Hey this is page 1

  <button @click="goToPage2">go to page 2</button>

  <br /><br /><br /><br /><br />
  let's make this workkk
</template>

<script setup>
  import { useRouter } from "vue-router";
  const router = useRouter();
  const goToPage2 = () => router.push("/page2");
</script>

<style scoped>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>
