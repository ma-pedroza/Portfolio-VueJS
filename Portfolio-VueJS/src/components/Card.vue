  <template>
    <div v-if="tipo == 'home'"
      class="hover:scale-105 transition-transform rounded-md text-black shadow-md bg-white p-4 hover:bg-gray-200 hover:shadow-x"
    >
      <img
        class="h-[450px] w-[350px]" 
        src="https://i.redd.it/is-my-chihuahua-fat-v0-ub5fmrr6ufnb1.jpg?width=4032&format=pjpg&auto=webp&s=6735e08fb2c12f03a832a4087be25f0c976b7d04"
        alt=""
      />
      <h1 class="text-center font-bold mt-3">Matheus Gomes Pedroza</h1>
    </div>
    <div v-if="tipo == 'about'" class="shadow-xl rounded-sm bg-neutral-900 p-2 text-white">
      <img
        class="h-[430px] w-[650px]" 
        src="../assets/Imagem do WhatsApp de 2025-05-25 à(s) 22.00.25_724c8543.jpg"
        alt=""
      />
    </div>
  </template>


<script>
export default{
  props: {
    tipo: {
      type: String,
      required: true
    }
  }
}
</script>