<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li><router-link  to="/home">Home</router-link></li>
      <li><router-link to="/restaruantes">Restaurantes</router-link></li>
      <li><router-link :to="{name:'restaruante-destacado', params:{id: 16}}">Restaurantes Destacado</router-link></li>
      <li><router-link to="/contacto">Contacto</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
