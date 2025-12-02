<script setup>
import { ref, onMounted } from 'vue'
import Asside from '../components/Asside.vue'
import HeaderAdmin from '../components/HeaderAdmin.vue'
import StartCard from '../components/StartCard.vue'
import RefereeTable from '../components/RefereeTable.vue'
import MatchTable from '../components/MatchTable.vue'
import RefereeForm from '../components/RefereeForm.vue'

// Menu actif
const activeSection = ref('dashboard')

// Statistiques
const stats = ref([
  { title: 'Arbitres actifs', value: 24, color: 'from-indigo-500 to-indigo-600', progress: 0.7, display: 0 },
  { title: 'Matchs planifiés', value: 18, color: 'from-purple-500 to-purple-600', progress: 0.5, display: 0 },
  { title: 'Rapports exportés', value: 12, color: 'from-pink-500 to-pink-600', progress: 0.3, display: 0 },
  { title: 'Notifications', value: 5, color: 'from-emerald-500 to-emerald-600', progress: 0.2, display: 0 },
])

// Données arbitres
const referees = ref([
  { id: 1, username: 'JeanDupont', age: 30, level: 'Intermédiaire', available: true },
  { id: 2, username: 'MarieLeroy', age: 25, level: 'Débutant', available: false },
  { id: 3, username: 'PaulMartin', age: 35, level: 'Professionnel', available: true },
])

// Données des matchs
const recentMatches = ref([
  { id: 1, match: "Team A vs Team B", date: "2025-11-14", status: "Planifié" },
  { id: 2, match: "Team C vs Team D", date: "2025-11-15", status: "Terminé" },
  { id: 3, match: "Team E vs Team F", date: "2025-11-16", status: "Annulé" },
])

// Popup ajout arbitre
const showAddReferee = ref(false)
const openAddPopup = () => showAddReferee.value = true
const closeAddPopup = () => showAddReferee.value = false

// Popup déconnexion
const showLogout = ref(false)
const toggleLogout = () => showLogout.value = !showLogout.value

// Animation compteur
onMounted(() => {
  stats.value.forEach(s => {
    let count = 0
    const step = s.value / 50
    const interval = setInterval(() => {
      count += step
      if (count >= s.value) { count = s.value; clearInterval(interval) }
      s.display = Math.round(count)
    }, 20)
  })
})
</script>

<template>
  <div class="flex min-h-screen bg-slate-900 text-white">
    <!-- Sidebar -->
    <Asside v-model:active-section="activeSection" />

    <main class="flex-1 p-8 md:p-12">
      <!-- Header -->
      <HeaderAdmin @toggle-logout="toggleLogout" />

      <!-- Dashboard -->
      <section v-if="activeSection === 'dashboard'" class="space-y-8">
        <h2 class="text-2xl font-bold mb-4">Tableau de bord</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StartCard v-for="(s,i) in stats" :key="i" :stat="s" />
        </div>
      </section>

      <!-- Gestion des arbitres -->
      <section v-if="activeSection === 'referees'" class="space-y-8">
        <h2 class="text-2xl font-bold mb-4">Gestion des arbitres</h2>
        <RefereeTable 
          :referees="referees" 
          @edit="console.log('Edit', $event)" 
          @delete="console.log('Delete', $event)" 
        />
        <button @click="openAddPopup" class="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg transition">
          Ajouter un arbitre
        </button>
        <RefereeForm v-if="showAddReferee" @close="closeAddPopup" />
      </section>

      <!-- Gestion des matchs -->
      <section v-if="activeSection === 'matches'" class="space-y-8">
        <h2 class="text-2xl font-bold mb-4">Gestion des matchs</h2>
        <MatchTable :matches="recentMatches" />
      </section>

      <!-- Statistiques -->
      <section v-if="activeSection === 'stats'" class="space-y-8">
        <h2 class="text-2xl font-bold mb-4">Statistiques</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StartCard v-for="(s,i) in stats" :key="i" :stat="s" />
        </div>
      </section>

      <!-- Exportation -->
      <section v-if="activeSection === 'export'" class="space-y-8">
        <h2 class="text-2xl font-bold mb-4">Exportation</h2>
        <div class="p-8 bg-slate-800 rounded-2xl shadow-lg">
          <p class="text-slate-300">Ici, vous pourrez exporter vos rapports, statistiques et données.</p>
          <button class="mt-4 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg shadow-lg transition">
            Exporter les données
          </button>
        </div>
      </section>

      <!-- Popup Déconnexion -->
      <div v-if="showLogout" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div class="bg-slate-800 p-8 rounded-2xl shadow-xl w-80 text-center">
          <h2 class="text-xl font-bold mb-4">Se déconnecter ?</h2>
          <p class="text-slate-400 mb-6">Voulez-vous vraiment vous déconnecter de votre session admin ?</p>
          <div class="flex justify-around">
            <button @click="toggleLogout" class="px-6 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition">Annuler</button>
            <button class="px-6 py-2 bg-red-500 rounded-lg hover:bg-red-600 transition">Déconnexion</button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.animate-pulse { animation: pulse 2s infinite; }
@keyframes pulse { 0%,100%{opacity:1; transform:scale(1);} 50%{opacity:0.7; transform:scale(1.05);} }
</style>
