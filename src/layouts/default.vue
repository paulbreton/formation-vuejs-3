<script setup lang="ts">
import Navbar from '../components/header/Navbar.vue'
</script>

<template>
  <Navbar />

  <main class="mt-20">
    <slot />
  </main>
</template>

