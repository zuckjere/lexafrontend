<script setup>
import { ref } from 'vue'

const emit = defineEmits(['close'])

const newReferee = ref({
  username: '',
  password: '',
  age: '',
  level: '',
  available: true
})

const saveReferee = () => {
  if (!newReferee.value.username || !newReferee.value.password || !newReferee.value.age || !newReferee.value.level) {
    alert("Veuillez remplir tous les champs.")
    return
  }
  console.log("Nouvel arbitre ajouté :", newReferee.value)
  alert(`✅ Arbitre ${newReferee.value.username} ajouté avec succès !`)
  emit('close')
}
</script>

<template>
  <transition name="fade">
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div class="bg-slate-900 w-[95%] md:w-[500px] p-8 rounded-3xl shadow-2xl border border-slate-700 flex flex-col">
        <h2 class="text-3xl font-bold mb-6 text-center text-white">Ajouter un arbitre</h2>

        <form @submit.prevent="saveReferee" class="grid grid-cols-1 gap-4">
          <input v-model="newReferee.username" type="text" placeholder="Nom d'utilisateur"
            class="p-3 rounded-lg bg-slate-800 text-white outline-none focus:ring-2 focus:ring-indigo-500" />
          
          <input v-model="newReferee.password" type="password" placeholder="Mot de passe"
            class="p-3 rounded-lg bg-slate-800 text-white outline-none focus:ring-2 focus:ring-indigo-500" />

          <div class="grid grid-cols-2 gap-4">
            <input v-model="newReferee.age" type="number" placeholder="Âge"
              class="p-3 rounded-lg bg-slate-800 text-white outline-none focus:ring-2 focus:ring-indigo-500" />
            
            <select v-model="newReferee.level" class="p-3 rounded-lg bg-slate-800 text-white outline-none focus:ring-2 focus:ring-indigo-500">
              <option disabled value="">Niveau</option>
              <option>Débutant</option>
              <option>Intermédiaire</option>
              <option>Professionnel</option>
            </select>
          </div>

          <label class="flex items-center gap-3 mt-2 text-white">
            <input v-model="newReferee.available" type="checkbox" class="w-5 h-5 accent-indigo-500" />
            Disponible
          </label>

          <div class="flex gap-4 mt-4">
            <button type="button" @click="$emit('close')"
              class="flex-1 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg text-white font-semibold transition">Annuler</button>
            <button type="submit"
              class="flex-1 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg text-white font-semibold transition">Enregistrer</button>
          </div>
        </form>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
