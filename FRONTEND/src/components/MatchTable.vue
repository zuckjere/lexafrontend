<script setup>
import { ref, defineEmits } from 'vue'

const props = defineProps({
  matches: Array,
  referees: Array
})

const emit = defineEmits(['edit','delete','add'])

const showAddMatch = ref(false)
const newMatch = ref({
  teamA: '',
  teamB: '',
  referees: [],
  date: '',
  time: '',
  stadium: '',
  city: '',
  message: '',
  status: 'Planifié'
})

const openAddMatch = () => {
  newMatch.value = {
    teamA: '',
    teamB: '',
    referees: [],
    date: '',
    time: '',
    stadium: '',
    city: '',
    message: '',
    status: 'Planifié'
  }
  showAddMatch.value = true
}

const saveMatch = () => {
  if (!newMatch.value.teamA || !newMatch.value.teamB || !newMatch.value.date || !newMatch.value.time) {
    alert("Veuillez remplir les champs essentiels.")
    return
  }
  emit('add', {...newMatch.value})
  showAddMatch.value = false
  alert(`✅ Match ${newMatch.value.teamA} vs ${newMatch.value.teamB} ajouté !`)
}
</script>

<template>
  <div>
    <!-- Header / Action -->
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-bold text-white">Gestion des Matchs</h2>
      <button @click="openAddMatch" class="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 rounded text-white font-semibold transition">
        Ajouter un match
      </button>
    </div>

    <!-- Table -->
    <div class="overflow-x-auto bg-slate-800 rounded-lg shadow">
      <table class="w-full text-left border-collapse">
        <thead class="bg-slate-700 text-slate-300">
          <tr>
            <th class="p-3">Équipes</th>
            <th class="p-3">Arbitres</th>
            <th class="p-3">Date & Heure</th>
            <th class="p-3">Stade / Ville</th>
            <th class="p-3">Statut</th>
            <th class="p-3">Message</th>
            <th class="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="m in matches" :key="m.id" class="border-b border-slate-700 hover:bg-slate-700 transition">
            <td class="p-3">{{ m.teamA }} vs {{ m.teamB }}</td>
            <td class="p-3">
              <span v-for="ref in m.referees" :key="ref.id" class="inline-block bg-indigo-600 px-2 py-1 rounded-full text-xs mr-1">
                {{ ref.username }}
              </span>
            </td>
            <td class="p-3">{{ m.date }} {{ m.time }}</td>
            <td class="p-3">{{ m.stadium }} / {{ m.city }}</td>
            <td class="p-3">
              <span :class="{
                'bg-green-500': m.status === 'Terminé',
                'bg-yellow-500': m.status === 'Planifié',
                'bg-red-500': m.status === 'Annulé'
              }" class="px-3 py-1 rounded-full text-xs text-white">
                {{ m.status }}
              </span>
            </td>
            <td class="p-3">{{ m.message || '-' }}</td>
            <td class="p-3 flex gap-2">
              <button @click="$emit('edit', m)" class="px-3 py-1 bg-yellow-500 rounded hover:bg-yellow-600 transition">Modifier</button>
              <button @click="$emit('delete', m.id)" class="px-3 py-1 bg-red-500 rounded hover:bg-red-600 transition">Supprimer</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Popup Ajouter Match -->
    <div v-if="showAddMatch" class="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div class="bg-slate-800 p-6 rounded-2xl w-[90%] md:w-[600px] shadow-2xl space-y-4">
        <h3 class="text-xl font-bold text-white text-center">Ajouter un Match</h3>
        <form @submit.prevent="saveMatch" class="space-y-3">

          <div class="grid grid-cols-2 gap-4">
            <input v-model="newMatch.teamA" type="text" placeholder="Équipe A" class="p-2 rounded bg-slate-700 text-white w-full" />
            <input v-model="newMatch.teamB" type="text" placeholder="Équipe B" class="p-2 rounded bg-slate-700 text-white w-full" />
          </div>

          <div>
            <label class="text-slate-300 mb-1 block">Arbitres</label>
            <select v-model="newMatch.referees" multiple class="p-2 rounded bg-slate-700 text-white w-full">
              <option v-for="r in referees" :key="r.id" :value="r">{{ r.username }}</option>
            </select>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <input v-model="newMatch.date" type="date" class="p-2 rounded bg-slate-700 text-white w-full" />
            <input v-model="newMatch.time" type="time" class="p-2 rounded bg-slate-700 text-white w-full" />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <input v-model="newMatch.stadium" type="text" placeholder="Stade" class="p-2 rounded bg-slate-700 text-white w-full" />
            <input v-model="newMatch.city" type="text" placeholder="Ville" class="p-2 rounded bg-slate-700 text-white w-full" />
          </div>

          <div>
            <textarea v-model="newMatch.message" placeholder="Message / Note" class="p-2 rounded bg-slate-700 text-white w-full"></textarea>
          </div>

          <div class="flex justify-end gap-2">
            <button type="button" @click="showAddMatch = false" class="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded text-white">Annuler</button>
            <button type="submit" class="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 rounded text-white font-bold">Ajouter</button>
          </div>

        </form>
      </div>
    </div>
  </div>
</template>
