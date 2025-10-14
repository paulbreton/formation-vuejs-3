<script setup lang="ts"></script>

<template>
  <div>Mon premier composant</div>

  <div class="flex flex-col gap-4">
    <div class="border border-gray-200 rounded-lg p-4 flex justify-between">
      <div class="flex-col gap-4">
        <div class="font-medium text-primary-500">Mon todo 1</div>
        <div class="text-sm text-gray-500">Description de mon todo</div>
      </div>

      <button class="bg-white text-gray-900 ring ring-gray-200 shadow-sm px-4 py-2 rounded font-medium cursor-pointer">À faire</button>
    </div>
  </div>
</template>