<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>

<template>
  <header class="w-full bg-gradient-to-r from-slate-800 via-slate-800 to-slate-900 text-white shadow-lg border-b border-slate-700 backdrop-blur-md bg-opacity-95 sticky top-0 z-40">
    <div class="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
      <div class="flex items-center space-x-3 group cursor-pointer">
        <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-lg group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
          R
        </div>
        <span class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">RefMaster</span>
      </div>

      <nav class="hidden md:flex space-x-1">
        <a href="#" class="px-4 py-2 rounded-lg text-slate-300 font-medium hover:text-white hover:bg-slate-700/50 transition-all duration-300 ">
          <i class="ph-bold ph-house inline-block w-4 h-4 mr-2"></i>Accueil
        </a>
        <a href="#" class="px-4 py-2 rounded-lg text-slate-300 font-medium hover:text-white hover:bg-slate-700/50 transition-all duration-300">
          <i class="ph-bold ph-gauge inline-block w-4 h-4 mr-2"></i>Dashboard
        </a>
        <a href="#" class="px-4 py-2 rounded-lg text-slate-300 font-medium hover:text-white hover:bg-slate-700/50 transition-all duration-300">
          <i class="ph-bold ph-users inline-block w-4 h-4 mr-2"></i>Arbitres
        </a>
        <a href="#" class="px-4 py-2 rounded-lg text-slate-300 font-medium hover:text-white hover:bg-slate-700/50 transition-all duration-300">
          <i class="ph-bold ph-football inline-block w-4 h-4 mr-2"></i>Matchs
        </a>
      </nav>

      <div class="md:hidden flex items-center">
        <button @click="isOpen = !isOpen" class="focus:outline-none text-2xl text-slate-300 hover:text-white transition">
          <i v-if="!isOpen" class="ph-bold ph-list w-6 h-6"></i>
          <i v-else class="ph-bold ph-x w-6 h-6"></i>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="isOpen" class="md:hidden bg-slate-700/50 backdrop-blur-md px-6 py-4 space-y-2 absolute top-full left-0 w-full z-50 border-t border-slate-700">
      <a href="#" class="block px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-600/50 transition-all duration-300 font-medium">
        <i class="ph-bold ph-house inline-block w-4 h-4 mr-2"></i>Accueil
      </a>
      <a href="#" class="block px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-600/50 transition-all duration-300 font-medium">
        <i class="ph-bold ph-gauge inline-block w-4 h-4 mr-2"></i>Dashboard
      </a>
      <a href="#" class="block px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-600/50 transition-all duration-300 font-medium">
        <i class="ph-bold ph-users inline-block w-4 h-4 mr-2"></i>Arbitres
      </a>
      <a href="#" class="block px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-600/50 transition-all duration-300 font-medium">
        <i class="ph-bold ph-football inline-block w-4 h-4 mr-2"></i>Matchs
      </a>
    </div>
  </header>
</template>
