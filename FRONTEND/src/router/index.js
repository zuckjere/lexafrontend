import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Dashboard from '../pages/Dashboard.vue'
import NotFound from '../pages/NotFound.vue' // <-- ajout

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard, meta:{requiresAuth: true} },//page protegé necessite d'etre connecter

  // doit toujours être en dernier :
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
//Middleware de protection 
router.beforeEach((to, from, next) =>{
  const isAuthenticated = localStorage.getItem('token')
  //si on est en developpe on bypasse la protection
  if (import.meta.env.MODE === 'development'){
    console.log('mode developpement:acces libre')
    next()
    return
  }
  //en production:protection active
  if(to.meta.requiresAuth && !isAuthenticated){
    next('login')
  }else {
    next()
  }
})
export default router
