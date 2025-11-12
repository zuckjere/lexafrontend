🏟️ RefMaster – Frontend Vue 3
✨ Description

RefMaster est une application web destinée aux fédérations sportives et clubs pour gérer les arbitres, planifier les matchs et suivre leurs performances.
Cette version couvre uniquement le frontend, développé avec Vue 3, Axios et TailwindCSS, et prépare l’interaction avec un futur backend.

L’objectif est de fournir une interface moderne, intuitive et responsive, pour faciliter la gestion des arbitres.

📦 Technologies utilisées

🌐 Frontend :

🖖 Vue 3
 – Framework SPA

🛣️ Vue Router
 – Navigation

⚡ Axios
 – Appels API

🎨 TailwindCSS
 – Mise en page et design

🏗️ Build / Dev :

🚀 Vite
 – Bundler rapide et serveur de développement

⚙️ Fonctionnalités du frontend

🏠 Page d’accueil (Home) avec présentation de RefMaster

📊 Dashboard avec :

👨‍⚖️ Liste des arbitres

📅 Tableau de matchs

📈 Statistiques simples

🔐 Authentification simple : Login / Inscription

🧩 Composants réutilisables :

🔘 Boutons

🃏 Cartes d’arbitres

📋 Tableaux de matchs

📱 Design responsive pour desktop et mobile

🏗️ Structure du projet
frontend/
├─ public/                  # Fichiers statiques
├─ src/
│  ├─ assets/               # Images, logos, icônes
│  ├─ components/           # Composants réutilisables
│  │   ├─ Navbar.vue
│  │   ├─ Footer.vue
│  │   ├─ CardArbitre.vue
│  │   └─ TableMatch.vue
│  ├─ pages/                # Pages principales
│  │   ├─ Home.vue
│  │   ├─ Dashboard.vue
│  │   ├─ Login.vue
│  │   └─ Register.vue
│  ├─ router/               # Configuration Vue Router
│  │   └─ index.js
│  ├─ services/             # Services Axios pour API
│  │   ├─ arbitres.js
│  │   └─ matchs.js
│  ├─ App.vue
│  └─ main.js
├─ package.json
└─ vite.config.js

📌 Pages et composants principaux
1. 🏠 Home.vue

Présentation de l’application RefMaster

Boutons Créer un compte / Se connecter

Image ou illustration de droite

Layout centré avec Tailwind flex items-center justify-center

2. 🔑 Login.vue

Formulaire de connexion

Validation des champs

Bouton Connexion

Lien vers la page d’inscription

3. 📝 Register.vue

Formulaire d’inscription

Validation (email, mot de passe)

Redirection vers Login après succès

4. 📊 Dashboard.vue

Affichage des arbitres et matchs

Filtres (par date, catégorie)

Bouton Ajouter arbitre ou Planifier match

5. 🧩 Components

🖥️ Navbar.vue : navigation principale

📄 Footer.vue : informations et liens utiles

🃏 CardArbitre.vue : carte avec photo et infos arbitre

📋 TableMatch.vue : tableau avec les matchs programmés

🌐 Services Axios

Exemple de service pour les arbitres : src/services/arbitres.js

import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const getArbitres = async () => {
  const response = await axios.get(`${API_URL}/arbitres`);
  return response.data;
};

export const createArbitre = async (arbitre) => {
  const response = await axios.post(`${API_URL}/arbitres`, arbitre);
  return response.data;
};

export const updateArbitre = async (id, arbitre) => {
  const response = await axios.put(`${API_URL}/arbitres/${id}`, arbitre);
  return response.data;
};

export const deleteArbitre = async (id) => {
  const response = await axios.delete(`${API_URL}/arbitres/${id}`);
  return response.data;
};

🚀 Installation et lancement

Cloner le projet :

git clone <URL_DU_REPO>
cd frontend


Installer les dépendances :

npm install


Lancer le serveur de développement :

npm run dev


Accéder à l’application :

http://localhost:5173

🎨 Design et layout

Layout responsive avec TailwindCSS

Composants réutilisables et modulables

Palette de couleurs :

💙 Bleu clair pour l’interface (bg-sky-400)

⚪ Boutons blancs et bordures bleues

✨ Texte clair (text-white ou text-gray-700)

🔜 Prochaines étapes

🏗️ Développement du backend (API REST ou GraphQL)

🔐 Intégration JWT pour sécuriser l’accès

🔍 Ajout de filtres, recherche et pagination

📢 Notifications et alertes pour les matchs

🧪 Tests unitaires et E2E

💡 Conseils pour le frontend

🧩 Garder les composants découplés pour faciliter la maintenance

🔌 Préparer les services Axios pour une migration backend transparente

🎨 Utiliser TailwindCSS pour des prototypes rapides et responsive

⏱️ Prévoir des states de chargement / erreurs pour chaque appel API
