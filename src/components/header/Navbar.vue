<script setup lang="ts">
import UserLoggin from './UserLoggin.vue'
</script>

<template>
  <nav class="bg-white shadow-md fixed w-full top-0 left-0 z-50">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 text-2xl font-bold text-primary-500">
          Cooperl
        </div>

        <div class="flex gap-4">
          <!-- TODO: afficher la liste des pages -->
          <router-link as="div" to="/exo-1" class="hover:text-primary-500 font-medium">Exo 1</router-link>
          <router-link as="div" to="/exo-2" class="hover:text-primary-500 font-medium">Exo 2</router-link>
        </div>

        <UserLoggin />
      </div>
    </div>
  </nav>
</template>
