<script setup>
import Card from "../components/Card.vue";
</script>

<template>
  <div class="flex justify-between gap-12 mt-auto px-8 py-3">
    <div class="text-white mt-12 start">
      <h1 class="mb-3 text-gray-300 text">Olá, Meu Nome é</h1>
      <h1 class="text-7xl font-extrabold mb-3">Matheus Pedroza</h1>
      <p class="mb-6 text-gray-300 text-xl">| Futuro Desenvolvedor Front-End </p>
      <button
        class="btn font-bold text-xl bg-teal-400 text-white px-5 p-3 rounded-full hover:scale-110 transition-transform hover:bg-gradient-to-r hover:from-cyan-200 hover:to-sky-300 hover:brightness-125"
      >
        <router-link to="/aboutMe">Conheça mais</router-link>
      </button>
    </div>
    <div class="">
      <Card tipo="home"></Card>
    </div>
  </div>
</template>
