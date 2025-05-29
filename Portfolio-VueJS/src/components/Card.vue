  <template>
    <div class="relative w-[450px] h-[450px]" v-if="tipo == 'home'">
      <div class="rounded-full bg-gradient-to-r from-fuchsia-900 to-rose-900 blur-3xl absolute inset-0 opacity-70">
      </div> 
      <img
        class="h-full w-full relative z-10 hover:scale-105 transition-transform rounded-full shadow-md duration-300 opacity-90 drop-shadow-lg " 
        src="../assets/Imagem do WhatsApp de 2025-05-25 à(s) 22.00.25_724c8543.jpg"
        alt=""
      />  
    </div>
    
    <div v-if="tipo == 'about'" class="shadow-xl rounded-sm bg-neutral-950 p-2 text-white">
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