<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Restaurantes App"/>

    <router-view></router-view> <!-- Con esta ETIQUETA cargamos los componentes del ROUTER -->

    <!-- Carga los Componentes -->
    <!-- <Home></Home> -->
    <!-- <Contacto></Contacto> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

// ESTA ES OTRA FORMA de Usar los Componentes DENTRO DEL App.vue, 
//    SIN EMBARGO LOS DEJE EN -MAIN.JS- PARA USAR EL ROUTER

// import Home from './components/Home.vue'
// import Contacto from './components/Contacto.vue'
// import RestaruantList from './components/RestaruantList.vue'
// import RestaruantTop from './components/RestaruanteTop.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    // Home,
    // Contacto,
    // RestaruantList,
    // RestaruantTop
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
