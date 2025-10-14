<script setup lang="ts">
import Input from '@/components/ui/Input.vue'
</script>

<template>
  <div class="grid grid-cols-2 gap-4 items-center">
    <!-- TODO: faire un composant Input -->
     <Input />
    <!-- TODO: appliquer un style au texte  : gris si < 3, vert >= 3 et < 5, rouge >= 5 -->
    <div>Resultat : <span class="text-gray-500 font-medium text-sm">aucun nom</span></div>
  </div>
</template>