<script setup>
import Card from "../components/Card.vue";
</script>

<template>
<div class="py-5 px-10 flex justify-center" style="border: 1px solid white;">
    <div>
        <Card tipo = 'about'></Card>
       
    </div>
    <div>
        <div class="text-white p-5" style="border: 1px solid white; color: white;">
         <p class="font-bold">── SOBRE MIM</p>
         <h1 class="font-extrabold text-3xl">Quem sou eu?</h1>
         <p>ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.<br>In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.</p>
         <p>ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.<br>In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.</p> 
    </div>
    <div class="bg-zinc-800 grid grid-cols-3" style="border: 1px solid white;"   >
        <div class="flex flex-col items-center justify-center mb-5 mt-5"><h1 class="text-white font-semibold">HTML</h1><i class="text-emerald-200  text-7xl fa-brands fa-html5"></i></div>
        <div class="flex flex-col items-center justify-center mb-5 mt-5"><h1 class="text-white font-semibold">CSS</h1><i class="text-emerald-200 text-7xl fa-brands fa-css3-alt"></i></div>
        <div class="flex flex-col items-center justify-center mb-5 mt-5"><h1 class="text-white font-semibold">VUE.JS</h1><i class="text-emerald-200  text-7xl fa-brands fa-vuejs"></i></div>

    </div>  
    </div>
    
</div>
</template>

