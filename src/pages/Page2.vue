<template>
  This is page 2

  <button @click="goToPage1" style="margin: 20px 20px 0 0">go to page 1</button>

  <br /><br /><br /><br /><br />
  change n 2
</template>

<script setup>
  import { useRouter } from "vue-router";
  const router = useRouter();
  const goToPage1 = () => router.push("/");
</script>
