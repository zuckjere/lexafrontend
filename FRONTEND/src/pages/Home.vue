<script setup>
import Header from '../components/Header.vue'
import { ref } from 'vue'

const features = ref([
  {
    icon: 'ph-bold ph-chart-pie',
    title: 'Gestion Centralisée',
    description: 'Gérez tous vos arbitres et matchs depuis un seul tableau de bord',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: 'ph-bold ph-trending-up',
    title: 'Statistiques',
    description: 'Suivez les performances et les historiques en temps réel',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: 'ph-bold ph-calendar',
    title: 'Planification',
    description: 'Planifiez facilement vos rencontres et affectez les arbitres',
    color: 'from-pink-500 to-pink-600'
  },
  {
    icon: 'ph-bold ph-shield-check',
    title: 'Sécurité',
    description: 'Vos données sont protégées avec nos standards de sécurité élevés',
    color: 'from-emerald-500 to-emerald-600'
  }
])
</script>

<template>
  <div class="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <!-- Header -->
    <Header />

    <!-- Hero Section -->
    <div class="flex flex-col md:flex-row flex-1 w-full bg-gradient-to-br from-slate-800 to-slate-900">
      <!-- Section gauche -->
      <div class="flex flex-col md:flex-1 h-[70vh] md:h-screen justify-center p-6 md:p-12 text-white relative overflow-hidden">
        <div class="absolute top-20 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div class="absolute bottom-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        
        <div class="max-w-2xl relative z-10">
          <h1 class="text-5xl md:text-7xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-fade-in">
            Gestion des arbitres 
            <span class="block">en toute simplicité</span>
          </h1>
          
          <p class="text-lg md:text-xl leading-relaxed text-slate-300 mb-8 animate-fade-in-delay">
            RefMaster simplifie la gestion des arbitres et des matchs pour les clubs et fédérations sportives.
            Suivez les performances, planifiez les rencontres et accédez à toutes les informations essentielles en quelques clics.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in-delay-2">
            <button class="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2 group">
              <span>Se connecter</span>
              <i class="ph-bold ph-sign-in w-5 h-5 group-hover:translate-x-1 transition-transform"></i>
            </button>
            <button class="px-8 py-3 border-2 border-indigo-400 text-white font-semibold rounded-lg hover:bg-indigo-400/10 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
              Créer un compte
            </button>
          </div>

          <p class="text-sm text-slate-400">✓ Commencez gratuitement. Aucune carte bancaire requise.</p>
        </div>
      </div>

      <!-- Section droite (image / illustration) -->
      <div class="flex-1 h-[30vh] md:h-screen bg-no-repeat bg-center bg-contain md:bg-cover relative group overflow-hidden">
        <div 
          class="absolute inset-0 bg-no-repeat bg-center bg-contain md:bg-cover transition-transform duration-500 group-hover:scale-105"
          style="background-image: url('https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1000&h=1000&fit=crop'); filter: drop-shadow(0 20px 60px rgba(0,0,0,0.3));"
        >
        </div>
        <div class="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-slate-800/60"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
      </div>
    </div>

    <!-- Features Section -->
    <section class="py-20 md:py-32 px-6 md:px-12 relative">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-1/2 left-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div class="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div class="max-w-6xl mx-auto relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-4">
            Pourquoi RefMaster ?
          </h2>
          <p class="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto">
            Tout ce dont vous avez besoin pour gérer vos arbitres efficacement
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="(feature, index) in features" 
            :key="index"
            class="group relative"
          >
            <div class="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 rounded-2xl transition duration-300 blur" :class="feature.color"></div>
            <div class="relative bg-slate-800 p-8 rounded-2xl border border-slate-700 group-hover:border-transparent transition-all duration-300 h-full flex flex-col">
              <!-- Icon Container with Animation -->
              <div class="relative mb-6">
                <div class="absolute inset-0 bg-gradient-to-r rounded-full opacity-0 group-hover:opacity-100 transition duration-300 blur-lg" :class="feature.color"></div>
                <div class="relative w-16 h-16 rounded-full bg-gradient-to-r flex items-center justify-center group-hover:scale-110 transition-transform duration-300" :class="feature.color">
                  <i :class="[feature.icon, 'w-8 h-8 text-white animate-icon-float']"></i>
                </div>
              </div>

              <h3 class="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition" :class="feature.color">
                {{ feature.title }}
              </h3>
              <p class="text-slate-400 leading-relaxed group-hover:text-slate-300 transition">
                {{ feature.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 md:py-32 px-6 md:px-12 relative overflow-hidden">
      <div class="absolute inset-0 opacity-30">
        <div class="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div class="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <div class="max-w-4xl mx-auto text-center relative z-10">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          Prêt à révolutionner votre gestion d'arbitres ?
        </h2>
        <p class="text-lg md:text-xl text-slate-300 mb-10">
          Rejoignez des centaines de clubs et fédérations qui font confiance à RefMaster
        </p>
        <button class="px-10 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold rounded-lg hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70 transform hover:scale-105 text-lg group inline-flex items-center space-x-2">
          <span>Commencer maintenant</span>
          <i class="ph-bold ph-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform"></i>
        </button>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 px-6 md:px-12 bg-slate-950 border-t border-slate-800 text-slate-400 text-center">
      <p>&copy; 2025 RefMaster. Tous droits réservés.</p>
    </footer>
  </div>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-delay {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  30% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-delay-2 {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  60% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(20px, -50px) scale(1.1);
  }
  50% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  75% {
    transform: translate(50px, 50px) scale(1.05);
  }
}

@keyframes icon-float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}

.animate-fade-in-delay {
  animation: fade-in-delay 1.2s ease-out;
}

.animate-fade-in-delay-2 {
  animation: fade-in-delay-2 1.6s ease-out;
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.animate-icon-float {
  animation: icon-float 3s ease-in-out infinite;
}
</style>
