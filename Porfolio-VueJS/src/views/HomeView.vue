<script setup>
import Card from "../components/Card.vue";
</script>

<template>
  <div class="flex justify-start mt-12">
    <div class="text-white mt-12 start">
      <h1 class="mb-3 text-gray-300 text-xl">Olá, Meu Nome é</h1>
      <h1 class="text-7xl font-extrabold mb-3">Matheus Pedroza</h1>
      <p class="mb-6 text-gray-300 text-xl">| Futuro Desenvolvedor Front-End</p>
      <button
        class="btn text-xl bg-teal-300 text-white p-3 rounded-full hover:scale-110 transition-transform hover:bg-teal-200"
      >
        Conheça mais
      </button>
    </div>
    <div class="ml-auto">
      <Card></Card>
    </div>
  </div>
</template>
