<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white text-center p-8">
    <!-- Illustration -->
    <div class="relative">
      <div class="absolute inset-0 bg-indigo-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <h1 class="relative text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 drop-shadow-lg">
        404
      </h1>
    </div>

    <!-- Message -->
    <h2 class="mt-6 text-3xl font-semibold">Page introuvable</h2>
    <p class="mt-3 text-slate-400 max-w-md">
      Oups 😕 La page que vous cherchez n’existe pas ou a été déplacée.  
      Vérifiez l’URL ou retournez à la page d’accueil.
    </p>

    <!-- Boutons -->
    <div class="mt-8 flex gap-4">
      <router-link 
        to="/" 
        class="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full shadow-lg font-medium transition-all"
      >
        🏠 Retour à l’accueil
      </router-link>

      <router-link 
        to="/login" 
        class="px-6 py-3 border border-slate-600 hover:bg-slate-800 rounded-full font-medium transition-all"
      >
        🔐 Se connecter
      </router-link>
    </div>

    <!-- Animation décorative -->
    <div class="absolute bottom-10 text-slate-500 text-sm animate-bounce">
      <i class="ph-bold ph-warning text-xl text-yellow-400"></i>
      <span class="ml-2">Erreur : cette route n’existe pas</span>
    </div>
  </div>
</template>

<style scoped>
@keyframes floaty {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
.animate-floaty {
  animation: floaty 3s ease-in-out infinite;
}
</style>
