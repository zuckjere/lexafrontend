# LegalTech Frontend

Frontend de l'application **LegalTech**, développé avec **Vue 3**, **Vite**, **TailwindCSS** et **Axios** pour la communication avec le backend.

---

## 🚀 Technologies utilisées

- [Vue 3](https://vuejs.org/) – Framework JavaScript moderne et réactif.
- [Vite](https://vitejs.dev/) – Bundler rapide pour le développement.
- [TailwindCSS](https://tailwindcss.com/) – Framework CSS utilitaire pour un design rapide et responsive.
- [Axios](https://axios-http.com/) – Client HTTP pour interagir avec le backend.
- [Phosphor Icons](https://phosphoricons.com/) – Bibliothèque d’icônes pour l’interface utilisateur.

---

## 📦 Installation

1. **Cloner le repo**

```bash
git clone https://github.com/TON_USER/legaltech-frontend.git
cd legaltech-frontend
Installer les dépendances

npm install


2.Lancer le serveur de développement

npm run dev


Le projet sera accessible sur http://localhost:5173
 par défaut.

3.⚙️ Configuration

Pour connecter le frontend au backend, crée un fichier .env à la racine :

VITE_API_URL=http://localhost:3333/api


Toutes les variables d’environnement doivent commencer par VITE_ pour être accessibles dans le frontend.

4.🗂 Structure du projet
legaltech-frontend/
├─ public/           # Assets statiques (images, favicon...)
├─ src/
│  ├─ assets/        # Images, SVG, CSS supplémentaires
│  ├─ components/    # Composants Vue réutilisables
│  ├─ pages/         # Pages principales de l'application
│  ├─ router/        # Configuration Vue Router
│  ├─ store/         # Gestion d'état (Pinia ou Vuex)
│  ├─ services/      # Services API (Axios)
│  └─ App.vue
├─ index.html
├─ package.json
└─ vite.config.js

5.📡 Communication avec le backend

Exemple de configuration Axios dans src/services/api.js :

import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

export default api


Utilisation dans un composant Vue :

import api from '../services/api'

api.get('/users')
   .then(res => console.log(res.data))
   .catch(err => console.error(err))

📝 Scripts disponibles
Commande	Description
npm run dev	Démarre le serveur de développement
npm run build	Compile le projet pour la production
npm run preview	Prévisualise la build de production
🔖 Licence

Ce projet est sous licence MIT.

👨‍💻 Auteur

TON NOM / PSEUDO
Email: zuckjeremy0@gmail.com

GitHub: https://github.com/jeremyzuck
