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

const faqs = ref([
  { 
    question: "RefMaster est-il gratuit ?", 
    answer: "Oui, RefMaster propose une version gratuite avec toutes les fonctionnalités essentielles.",
    open: false
  },
  { 
    question: "Puis-je gérer plusieurs clubs ?", 
    answer: "Absolument, la plateforme supporte plusieurs clubs et fédérations.",
    open: false
  },
  { 
    question: "Mes données sont-elles sécurisées ?", 
    answer: "Oui, nous utilisons des protocoles de chiffrement et des serveurs conformes aux standards de sécurité.",
    open: false
  },
  { 
    question: "Puis-je exporter les statistiques ?", 
    answer: "Oui, vous pouvez exporter les rapports en PDF ou Excel depuis votre tableau de bord.",
    open: false
  },
])

const testimonials = ref([
  { name: "Alexandre Dupont", role: "Responsable Ligue Régionale", quote: "RefMaster a transformé notre manière de gérer les arbitres. Un vrai gain de temps et une interface intuitive !" },
  { name: "Sophie Lemoine", role: "Coordinatrice Fédérale", quote: "Grâce à RefMaster, la planification des matchs et des arbitres est devenue un jeu d’enfant." },
  { name: "Karim Mbala", role: "Arbitre Professionnel", quote: "Une plateforme claire et moderne, enfin centrée sur nos besoins !" },
])

// Fonction pour ouvrir/fermer une FAQ
const toggleFaq = (index) => {
  faqs.value[index].open = !faqs.value[index].open
}
</script>

<template>
  <div class="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <Header />

    <!-- Hero Section -->
    <div class="flex flex-col md:flex-row flex-1 w-full bg-gradient-to-br from-slate-800 to-slate-900">
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
            <router-link 
              to="/login"
              class="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 group"
            >
              <span>Se connecter</span>
              <i class="ph-bold ph-sign-in w-5 h-5 group-hover:translate-x-1 transition-transform"></i>
            </router-link>

            <router-link 
              to="/login" 
              class="px-8 py-3 border-2 border-indigo-400 text-white font-semibold rounded-lg hover:bg-indigo-400/10 hover:scale-105 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
            >
              Créer un compte
            </router-link>
          </div>

          <p class="text-sm text-slate-400">✓ Commencez gratuitement. Aucune carte bancaire requise.</p>
        </div>
      </div>

      <!-- Image -->
      <div class="flex-1 h-[30vh] md:h-screen bg-no-repeat bg-center bg-contain md:bg-cover relative group overflow-hidden">
        <div 
          class="absolute inset-0 bg-no-repeat bg-center bg-contain md:bg-cover transition-transform duration-700 group-hover:scale-110"
          style="background-image: url('https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1000&h=1000&fit=crop'); filter: drop-shadow(0 20px 60px rgba(0,0,0,0.3));"
        ></div>
        <div class="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-slate-800/60"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
      </div>
    </div>

    <!-- Features -->
    <section class="py-20 md:py-32 px-6 md:px-12 relative overflow-hidden">
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
            class="group relative opacity-0 translate-y-6 animate-fade-in-up"
            style="animation-delay: calc(0.1s * var(--i));"
            :style="`--i:${index}`"
          >
            <div class="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 rounded-2xl transition duration-300 blur" :class="feature.color"></div>
            <div class="relative bg-slate-800 p-8 rounded-2xl border border-slate-700 group-hover:border-transparent transition-all duration-300 h-full flex flex-col">
              <div class="relative mb-6">
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

    <!-- Témoignages -->
    <section class="py-20 md:py-28 px-6 md:px-12 bg-slate-800/30 backdrop-blur-sm border-t border-slate-700">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-12">Ce qu’ils disent de RefMaster</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(t, i) in testimonials" :key="i" class="bg-slate-900 p-8 rounded-2xl shadow-md border border-slate-700 hover:border-indigo-500/50 transition-all duration-300 hover:scale-[1.02]">
            <p class="text-slate-300 italic mb-6 transition-all duration-300">“{{ t.quote }}”</p>
            <div class="text-indigo-400 font-semibold">{{ t.name }}</div>
            <div class="text-slate-500 text-sm">{{ t.role }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Interactive -->
    <section class="py-20 md:py-28 px-6 md:px-12 relative bg-gradient-to-br from-slate-900 to-slate-800 border-t border-slate-700">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-12">Guide & Questions fréquentes</h2>
        <div class="space-y-6 text-left">
          <div 
            v-for="(faq, i) in faqs" 
            :key="i" 
            class="p-6 bg-slate-800 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
            @click="toggleFaq(i)"
          >
            <div class="flex justify-between items-center">
              <h3 class="text-lg font-semibold text-white">{{ faq.question }}</h3>
              <i :class="['ph-bold', faq.open ? 'ph-caret-up' : 'ph-caret-down', 'text-indigo-400 transition-transform duration-300']"></i>
            </div>
            <transition name="fade-slide">
              <p v-if="faq.open" class="text-slate-400 mt-3 leading-relaxed">{{ faq.answer }}</p>
            </transition>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 md:py-32 px-6 md:px-12 relative overflow-hidden">
      <div class="absolute inset-0 opacity-30">
        <div class="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      </div>

      <div class="max-w-4xl mx-auto text-center relative z-10">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6 mt-4">
          Prêt à révolutionner votre gestion d'arbitres ?
        </h2>
        <p class="text-lg md:text-xl text-slate-300 mb-10">
          Rejoignez des centaines de clubs et fédérations qui font confiance à RefMaster
        </p>
        <router-link 
          to="/login"
          class="px-10 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold rounded-lg hover:scale-110 transition-all duration-300 shadow-lg text-lg group inline-flex items-center space-x-2"
        >
          <span>Commencer maintenant</span>
          <i class="ph-bold ph-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform"></i>
        </router-link>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 px-6 md:px-12 bg-slate-950 border-t border-slate-800 text-slate-400 text-center">
      <p>&copy; 2025 Mablox. Tous droits réservés.</p>
    </footer>
  </div>
</template>

<style scoped>
/* Animations */
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
  animation: fade-in-up 1s ease-out forwards;
}

.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-enter-from, .fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@keyframes icon-float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
}
.animate-icon-float {
  animation: icon-float 3s ease-in-out infinite;
}

@keyframes blob {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(20px, -20px) scale(1.1); }
}
.animate-blob { animation: blob 7s infinite; }
.animation-delay-2000 { animation-delay: 2s; }
.animation-delay-4000 { animation-delay: 4s; }
</style>
