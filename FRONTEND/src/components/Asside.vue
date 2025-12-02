<script setup>
import { ref } from 'vue'

// Définir les items du menu
const menuItems = ref([
  { title: 'Tableau de bord', icon: 'ph-bold ph-house', key: 'dashboard' },
  { title: 'Gestion des arbitres', icon: 'ph-bold ph-user-circle', key: 'referees' },
  { title: 'Gestion des matchs', icon: 'ph-bold ph-soccer-ball', key: 'matches' },
  { title: 'Statistiques', icon: 'ph-bold ph-chart-pie', key: 'stats' },
  { title: 'Exportation', icon: 'ph-bold ph-file-arrow-down', key: 'export' },
])

// Index actif
const activeIndex = ref(0)

// Émettre la clé de la section active
const emit = defineEmits(['update:activeSection'])

const setActive = (index) => {
  activeIndex.value = index
  emit('update:activeSection', menuItems.value[index].key)
}
</script>

<template>
  <aside class="w-64 bg-slate-800 border-r border-slate-700 min-h-screen p-6 flex flex-col space-y-8">
    <h2 class="text-2xl font-bold text-indigo-400 mb-4">Admin Panel</h2>
    <ul class="flex flex-col gap-3">
      <li 
        v-for="(item, i) in menuItems" 
        :key="i"
        @click="setActive(i)"
        :class="[
          'flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-300 group',
          activeIndex === i ? 'bg-indigo-600/30' : 'hover:bg-slate-700'
        ]"
      >
        <i :class="[item.icon, 'text-indigo-400 w-6 h-6 group-hover:scale-110 transition-transform']"></i>
        <span :class="activeIndex === i ? 'text-indigo-400 font-bold' : 'text-white font-medium group-hover:text-indigo-400 transition-colors'">
          {{ item.title }}
        </span>
      </li>
    </ul>
  </aside>
</template>
