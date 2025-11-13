<script setup>
defineProps({
  referees: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['edit', 'delete'])
</script>

<template>
  <div class="overflow-x-auto bg-slate-800 rounded-2xl shadow-lg p-4">
    <table class="min-w-full text-left">
      <thead class="bg-slate-700">
        <tr>
          <th class="px-4 py-2 text-slate-300">Nom d'utilisateur</th>
          <th class="px-4 py-2 text-slate-300">Âge</th>
          <th class="px-4 py-2 text-slate-300">Niveau</th>
          <th class="px-4 py-2 text-slate-300">Disponible</th>
          <th class="px-4 py-2 text-slate-300">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="referee in referees" :key="referee.id" class="border-b border-slate-700 hover:bg-slate-700 transition">
          <td class="px-4 py-2">{{ referee.username }}</td>
          <td class="px-4 py-2">{{ referee.age }}</td>
          <td class="px-4 py-2">{{ referee.level }}</td>
          <td class="px-4 py-2">
            <span 
              :class="referee.available ? 'bg-green-500' : 'bg-red-500'" 
              class="px-3 py-1 rounded-full text-sm text-white"
            >
              {{ referee.available ? 'Oui' : 'Non' }}
            </span>
          </td>
          <td class="px-4 py-2 flex gap-2">
            <button @click="$emit('edit', referee)" class="px-3 py-1 bg-yellow-500 rounded hover:bg-yellow-600 transition">Modifier</button>
            <button @click="$emit('delete', referee.id)" class="px-3 py-1 bg-red-500 rounded hover:bg-red-600 transition">Supprimer</button>
          </td>
        </tr>
        <tr v-if="referees.length === 0">
          <td colspan="5" class="text-center text-slate-400 py-6">Aucun arbitre à afficher</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
/* Hover effect for table rows */
tr:hover td {
  transition: background-color 0.3s;
}
</style>
