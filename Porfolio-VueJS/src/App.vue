<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="min-h-screen bg-gradient-to-r from-slate-800 via-slate-900 to-neutral-900">
    <Navbar />
    <div class="container mx-32 py-12">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap");

body {
  font-family: "Noto Sans", sans-serif;
}
</style>
