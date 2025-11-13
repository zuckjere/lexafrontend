<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')
const showPassword = ref(false)

const handleLogin = () => {
  if (!username.value || !password.value) {
    alert('Veuillez remplir tous les champs.')
    return
  }
  alert(`Connexion réussie pour ${username.value} ✅`)
}
</script>

<template>
  <div class="relative flex items-center justify-center h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
    
    <!-- Dégradés animés -->
    <div class="absolute top-0 left-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

    <!-- Conteneur principal -->
    <div class="relative z-10 w-full max-w-md bg-slate-800/60 backdrop-blur-xl rounded-2xl p-10 border border-slate-700 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 animate-fade-in-up">
      <div class="text-center mb-10">
        <div class="flex justify-center items-center space-x-3 mb-4">
          <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-2xl shadow-lg">
            R
          </div>
          <span class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            RefMaster
          </span>
        </div>
        <h1 class="text-2xl font-semibold text-white">Connexion</h1>
        <p class="text-slate-400 mt-2">Accédez à votre espace de gestion</p>
      </div>

      <!-- Formulaire -->
      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label for="username" class="block text-sm font-medium text-slate-300 mb-2">
            Nom d’utilisateur
          </label>
          <div class="relative">
            <i class="ph-bold ph-user absolute left-3 top-3.5 text-slate-400 text-xl"></i>
            <input
              v-model="username"
              id="username"
              type="text"
              placeholder="Entrez votre nom d'utilisateur"
              class="w-full bg-slate-900/70 border border-slate-700 rounded-lg py-3 pl-10 pr-4 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-slate-300 mb-2">
            Mot de passe
          </label>
          <div class="relative">
            <i class="ph-bold ph-lock absolute left-3 top-3.5 text-slate-400 text-xl"></i>
            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              id="password"
              placeholder="••••••••"
              class="w-full bg-slate-900/70 border border-slate-700 rounded-lg py-3 pl-10 pr-12 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
            <button type="button" class="absolute right-3 top-3 text-slate-400 hover:text-indigo-400 transition" @click="showPassword = !showPassword">
              <i :class="[showPassword ? 'ph-bold ph-eye-slash' : 'ph-bold ph-eye', 'text-xl']"></i>
            </button>
          </div>
        </div>

        <div class="flex justify-between items-center text-sm text-slate-400">
          <label class="flex items-center space-x-2">
            <input type="checkbox" class="accent-indigo-500 bg-slate-900 border-slate-700 rounded" />
            <span>Se souvenir de moi</span>
          </label>
          <a href="#" class="text-indigo-400 hover:text-indigo-300 transition">Mot de passe oublié ?</a>
        </div>

        <button
          type="submit"
          class="w-full py-3 mt-4 bg-gradient-to-r from-indigo-500 to-purple-500 font-semibold rounded-lg shadow-md hover:scale-[1.02] hover:shadow-indigo-500/30 transition-all duration-300 flex items-center justify-center space-x-2 group"
        >
          <span>Se connecter</span>
          <i class="ph-bold ph-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform"></i>
        </button>
      </form>

      <p class="text-center text-slate-400 text-sm mt-8">
        Pas encore de compte ?
        <a href="#" class="text-indigo-400 hover:text-indigo-300 font-medium transition">Créer un compte</a>
      </p>
    </div>
  </div>
</template>

<style scoped>
/* Animations */
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
  animation: fade-in-up 1s ease-out forwards;
}

@keyframes blob {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(30px, -30px) scale(1.1); }
}
.animate-blob {
  animation: blob 7s infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
</style>
