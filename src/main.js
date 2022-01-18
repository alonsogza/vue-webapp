import Vue from 'vue'
import App from './App.vue'

// Importamos Nuestros Componentes 
import Home from './components/Home.vue'
import Contacto from './components/Contacto.vue'
import RestaruanteTop from './components/RestaruanteTop.vue'
import RestaruanteList from './components/RestaruanteList.vue'

// Agregamos el vue-router
import VueRouter from 'vue-router' 

Vue.config.productionTip = false

//Asignamos el Uso de Vue-Router
Vue.use(VueRouter); 

//Agregamos las Rutas
const routes = [
  {
    path: '/restaruante-destacado/:id', 
    name:'restaruante-destacado', 
    component: RestaruanteTop
  },  
  {path: '/restaruantes', component: RestaruanteList},
  {path: '/contacto', component: Contacto},
  {path: '/home', component: Home},
  {path: '/', component: Home},    
]

//Agregamos el VueRouter
const router = new VueRouter({
  routes,
  mode: 'history'
})

// Se agrega los componentes
Vue.component('home', Home)
Vue.component('contacto', Contacto)

new Vue({
  router, // agregamos las rutas
  render: h => h(App),
}).$mount('#app')
