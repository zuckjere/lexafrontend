<script setup>
import Asside from '../components/Asside.vue'
import { ref, onMounted } from 'vue'

const stats = ref([
  { title: 'Arbitres actifs', value: 24, color: 'from-indigo-500 to-indigo-600', progress: 0.7 },
  { title: 'Matchs planifiés', value: 18, color: 'from-purple-500 to-purple-600', progress: 0.5 },
  { title: 'Rapports exportés', value: 12, color: 'from-pink-500 to-pink-600', progress: 0.3 },
  { title: 'Notifications', value: 5, color: 'from-emerald-500 to-emerald-600', progress: 0.2 },
])

const recentMatches = ref([
  { match: "Team A vs Team B", date: "2025-11-14", status: "Planifié" },
  { match: "Team C vs Team D", date: "2025-11-15", status: "Terminé" },
  { match: "Team E vs Team F", date: "2025-11-16", status: "Annulé" },
])

// Popup déconnexion
const showLogout = ref(false)
const toggleLogout = () => { showLogout.value = !showLogout.value }

// Animation compteur
onMounted(() => {
  stats.value.forEach((s) => {
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
    <Asside />

    <main class="flex-1 p-8 md:p-12 space-y-12">
      <!-- Header -->
      <header class="flex justify-between items-center mb-12">
        <h1 class="text-4xl font-bold">Dashboard Admin</h1>
        <div class="flex items-center gap-6">
          <div class="relative cursor-pointer" @click="toggleLogout">
            <img src="https://i.pravatar.cc/40" class="w-10 h-10 rounded-full border-2 border-indigo-400" />
            <span class="ml-2 font-medium text-white">Admin</span>
          </div>
        </div>
      </header>

      <!-- Stats -->
      <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="(s,i) in stats" 
          :key="i" 
          class="relative p-6 rounded-2xl bg-slate-800 hover:scale-105 shadow-lg transition-transform overflow-hidden"
        >
          <div class="absolute inset-0 bg-gradient-to-r rounded-2xl opacity-20" :class="s.color"></div>
          <h3 class="text-slate-300 mb-2">{{ s.title }}</h3>
          <p class="text-3xl font-bold text-white">{{ s.display || 0 }}</p>
          <div class="h-2 w-full bg-slate-700 rounded mt-3">
            <div class="h-2 rounded bg-white transition-all" :style="{width: (s.progress*100)+'%'}"></div>
          </div>
        </div>
      </section>

      <!-- Actions principales -->
      <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="p-8 bg-slate-800 rounded-2xl shadow-lg hover:scale-105 transition-transform flex flex-col justify-between hover:shadow-2xl">
          <div>
            <h2 class="text-xl font-semibold mb-2">Ajouter un arbitre</h2>
            <p class="text-slate-400">Créez un profil et gérez ses informations.</p>
          </div>
          <i class="ph-bold ph-user-circle text-4xl text-indigo-400 self-end mt-4 animate-icon-float"></i>
        </div>
        <div class="p-8 bg-slate-800 rounded-2xl shadow-lg hover:scale-105 transition-transform flex flex-col justify-between hover:shadow-2xl">
          <div>
            <h2 class="text-xl font-semibold mb-2">Planifier un match</h2>
            <p class="text-slate-400">Assignez des arbitres et planifiez les horaires.</p>
          </div>
          <i class="ph-bold ph-soccer-ball text-4xl text-purple-400 self-end mt-4 animate-icon-float"></i>
        </div>
        <div class="p-8 bg-slate-800 rounded-2xl shadow-lg hover:scale-105 transition-transform flex flex-col justify-between hover:shadow-2xl">
          <div>
            <h2 class="text-xl font-semibold mb-2">Voir les statistiques</h2>
            <p class="text-slate-400">Accédez aux performances et historiques.</p>
          </div>
          <i class="ph-bold ph-chart-pie text-4xl text-pink-400 self-end mt-4 animate-icon-float"></i>
        </div>
      </section>

      <!-- Derniers matchs -->
      <section class="bg-slate-800 p-8 rounded-2xl shadow-lg">
        <h2 class="text-2xl font-bold mb-6">Derniers événements</h2>
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="text-slate-400">
                <th class="p-3">Match</th>
                <th class="p-3">Date</th>
                <th class="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(m,i) in recentMatches" :key="i" class="border-b border-slate-700 hover:bg-slate-700 transition">
                <td class="p-3">{{ m.match }}</td>
                <td class="p-3">{{ m.date }}</td>
                <td class="p-3">
                  <span :class="{
                    'bg-green-500': m.status==='Terminé',
                    'bg-yellow-500': m.status==='Planifié',
                    'bg-red-500': m.status==='Annulé'
                  }" class="px-3 py-1 rounded-full text-sm">{{ m.status }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Floating CTA -->
      <button class="fixed bottom-10 right-10 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-4 rounded-full shadow-2xl text-lg font-bold transition-all animate-pulse flex items-center gap-2">
        <i class="ph-bold ph-plus"></i> Ajouter
      </button>
    </main>

    <!-- Popup Déconnexion -->
    <transition name="fade">
      <div v-if="showLogout" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div class="bg-slate-800 p-8 rounded-2xl shadow-xl w-80 text-center">
          <h2 class="text-xl font-bold mb-4">Se déconnecter ?</h2>
          <p class="text-slate-400 mb-6">Voulez-vous vraiment vous déconnecter de votre session admin ?</p>
          <div class="flex justify-around">
            <button @click="showLogout = false" class="px-6 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition">Annuler</button>
            <button class="px-6 py-2 bg-red-500 rounded-lg hover:bg-red-600 transition">Déconnexion</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
@keyframes icon-float {
  0%,100%{transform:translateY(0px);}
  50%{transform:translateY(-8px);}
}
.animate-icon-float{
  animation:icon-float 3s ease-in-out infinite;
}
.animate-pulse{
  animation:pulse 2s infinite;
}
@keyframes pulse{
  0%,100%{opacity:1; transform: scale(1);}
  50%{opacity:0.7; transform: scale(1.05);}
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
