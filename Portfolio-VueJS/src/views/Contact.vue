<script setup>
</script>

<template>
    <section class=" min-h-screen flex flex-col items-center justify-center text-center">
        <div class="p-8" >
            <h1 class="text-6xl font-semibold text-white mt-12 mb-32">Entre em contato comigo</h1>
            <p class="text-white text-lg mb-12">Caso tenha gostado do meu perfil e do que sou capaz,<br>sinta-se vontade para entrar em contato por algum destes canais!</p>
        </div>
        <div class="rounded-xl  flex flex-row w-full justify-center gap-5 p-5" >
            <a href="https://wa.me/14996286334" class="bg-slate-900 cursor-pointer border border-white/30 rounded-2xl py-10 w-64 hover:scale-105 hover:shadow-xl transition transform duration-200 hover:brightness-125 hover:shadow-[0_0_15px_theme('colors.green.500')]">
                <h1 class="bg-clip-text text-transparent bg-gradient-to-r from-green-200 to-green-500 font-bold" >Whatsapp</h1>
                <i class="mb-5 text-green-400 text-7xl fa-brands fa-square-whatsapp"></i>
                <p class="text-gray-300">Mande uma mensagem!</p>
            </a>
            <a href="https://github.com/ma-pedroza" class=" bg-slate-900 cursor-pointer border border-white/30 rounded-2xl py-10 w-64 hover:scale-105 hover:shadow-xl transition transform duration-200 hover:brightness-125 hover:shadow-[0_0_15px_theme('colors.purple.500')]">
                <h1 class="bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-purple-900 font-bold">Github</h1>
                <i class="mb-5 text-neutral-200 text-7xl fa-brands fa-square-github "></i>
                <p class="text-gray-300">Veja meus projetos.</p>
            </a>
            <a href="https://www.linkedin.com/in/matheus-pedroza19" class="bg-slate-900 cursor-pointer border border-white/30 rounded-2xl py-10 w-64 hover:scale-105 hover:shadow-xl transition transform duration-200 hover:brightness-125 hover:shadow-[0_0_15px_theme('colors.blue.500')]">
                <h1 class="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-blue-500 font-bold">Linkedin</h1>
                <i class="mb-5 text-blue-500 text-7xl fa-brands fa-linkedin"></i>
                <p class="text-gray-300">Conecte-se comigo!</p>
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=matheusgomeszpedroza@gmail.com" class=" bg-slate-900 cursor-pointer border border-white/30 rounded-2xl py-10 w-64 hover:scale-105 hover:shadow-xl transition transform duration-200 hover:brightness-125 hover:shadow-[0_0_15px_theme('colors.red.500')]">
                <h1 class="bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-neutral-200 font-bold">Email</h1>
                <i class="mb-5 text-red-700 text-7xl fa-solid fa-square-envelope"></i>
                <p class="text-gray-300">Envie um email.</p>
            </a>
        </div>  
    
    </section>
    
</template>

<style scoped>
</style>