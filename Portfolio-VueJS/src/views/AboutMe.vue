<script setup>
import Card from "../components/Card.vue";
</script>

<template>
<div class="py-5 px-2 flex flex-col justify-center" >
    <div class="flex flex-row">
        <div class="w-1/3">
        <Card tipo = 'about'></Card>
       
    </div>
    <div class="w-2/3">
        <div class="text-white p-5" style="border: 1px solid white; color: white;">
         <p class="font-bold">── SOBRE MIM</p>
         <h1 class="font-extrabold text-3xl">Quem sou eu?</h1><br>
         <p class="text-gray-300">Olá! Eu sou o Matheus Gomes Pedroza, um entusiasta da tecnologia, apaixonado por aprender e criar. Atualmente, estou cursando Análise e Desenvolvimento de Sistemas na Unimar, onde tenho desenvolvido muitos projetos para aprimorar minhas habilidades em diversas áreas da tecnologia.</p>
         <br>
         <p class="text-gray-300">Tenho trabalhado com projetos de aprendizagem usando tecnologias como Node.js, Vue.js, Vite, Tailwind CSS e outras ferramentas modernas do ecossistema web.</p><br>
         <p class="text-gray-300">Estou totalmente focado em aprender, evoluir a cada dia e alcançar minha primeira oportunidade na área de tecnologia, onde poderei aplicar meus conhecimentos e crescer como profissional.</p>
         
         
    </div>
    </div>
    
    
    </div>
    <div class="flex flex-col">
        <h1 class="text-center font-bold text-xl text-white">Principais Tecnologias</h1>
        <div class="bg-zinc-800 grid grid-cols-3" style="border: 1px solid white;"   >
            <div class="flex flex-col items-center justify-center mb-5 mt-5"><h1 class="text-white font-semibold">HTML</h1><i class="text-emerald-200  text-7xl fa-brands fa-html5"></i></div>
            <div class="flex flex-col items-center justify-center mb-5 mt-5"><h1 class="text-white font-semibold">CSS</h1><i class="text-emerald-200 text-7xl fa-brands fa-css3-alt"></i></div>
            <div class="flex flex-col items-center justify-center mb-5 mt-5"><h1 class="text-white font-semibold">VUE.JS</h1><i class="text-emerald-200  text-7xl fa-brands fa-vuejs"></i></div>
        <!-- <div class="flex flex-col items-center justify-center mb-5 mt-5"><h1 class="text-white font-semibold">NODE.S</h1><i class="text-emerald-200  text-7xl fa-brands fa-node-js"></i></div>    -->
        </div> 
    </div>
    <div class="flex flex-col items-center">
        <h2 class="text-2xl font-semibold mb-4 text-center text-white">Soft Skills</h2>
        <div class="grid grid-cols-2 gap-4">
        <div class="bg-gray-800 p-4 rounded-xl text-center text-white">💬 Comunicação</div>
        <div class="bg-gray-800 p-4 rounded-xl text-center text-white">🚀 Proatividade</div>
        <div class="bg-gray-800 p-4 rounded-xl text-center text-white">🔧 Resolução de problemas</div>
        <div class="bg-gray-800 p-4 rounded-xl text-center text-white">💡 Curiosidade</div>
      </div>
    </div>
</div>


</template>

