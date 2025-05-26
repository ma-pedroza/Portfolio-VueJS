<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template class="">
  <Navbar />
  <div class="flex justify-center items-center min-h-screen bg-gradient-to-r from-slate-800 via-slate-900 to-neutral-900">
    <div class="container flex justify-center max-w-7xl py-12">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

body {
  font-family: "Montserrat", sans-serif;
}
</style>
