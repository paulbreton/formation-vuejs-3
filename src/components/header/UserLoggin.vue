<script setup lang="ts"></script>

<template>
  <!-- TODO: Si l'utilisateur est connecté alors le rediriger sur son profil sinon sur la page de connexion -->
  <RouterLink to="/login">
    <button class="bg-primary-500 text-white px-4 py-2 rounded font-medium cursor-pointer">Se connecter</button>
  </RouterLink>
</template>