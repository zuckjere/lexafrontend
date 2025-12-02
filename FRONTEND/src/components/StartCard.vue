<script setup>
defineProps({
  title: String,
  value: Number,
  progress: Number,
  colorStart: String, // couleur début dégradé
  colorEnd: String,   // couleur fin dégradé
})
</script>

<template>
  <div class="relative p-6 rounded-2xl bg-slate-800 hover:scale-105 hover:shadow-2xl transition-transform duration-300 overflow-hidden cursor-pointer w-full h-48 flex flex-col justify-between">
    <!-- Glow arrière-plan -->
    <div 
      class="absolute inset-0 rounded-2xl opacity-20 blur-3xl"
      :style="{ background: `linear-gradient(135deg, ${colorStart}, ${colorEnd})` }"
    ></div>

    <!-- Contenu -->
    <div class="relative z-10 flex flex-col justify-between h-full">
      <!-- Titre -->
      <h3 class="text-slate-300 text-lg font-semibold">{{ title }}</h3>

      <!-- Chiffre central -->
      <p class="text-5xl font-bold text-white text-center my-4">{{ value }}</p>

      <!-- Barre de progression -->
      <div class="h-4 w-full bg-slate-700 rounded-full overflow-hidden">
        <div 
          class="h-4 rounded-full transition-all duration-500"
          :style="{ width: (progress * 100) + '%', background: `linear-gradient(135deg, ${colorStart}, ${colorEnd})` }"
        ></div>
      </div>

      <!-- Label Progression -->
      <div class="mt-2 flex justify-end">
        <span class="text-xs text-slate-400 tracking-wide">Progression</span>
      </div>
    </div>
  </div>
</template>
