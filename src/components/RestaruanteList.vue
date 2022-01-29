<template>
    <div>
        <h2>Esto es la {{texto}}</h2>
        <p class="text-start fw-bold">{{msg}}</p>
        <button v-on:click="siguiente += 20; getPokemones(siguiente)" class="btn btn-primary">Siguiente</button>
        <button v-on:click="atras -= 20; getPokemones(atras)" class="btn btn-primary">Atras</button>
        <ul class="list-group">
            <li v-for="item in infoLista" :key="item.name" class="list-group-item">
                <!-- <a v-bind:href=item.url class="btn btn-primary"
                    target="_blank">{{ item.name }}
                </a> -->
                <router-link :to="{name:'imagen-pokemon', params:{id: item.name}}"> {{ item.name }} </router-link> <!-- Se agrega una nueva ruta para mostrar la imagen-->
            </li>
        </ul>
    </div>
</template>

<script>
// Importar AXIOS para usar una API
import axios from 'axios';

    export default {
        name: 'restaruante-list',
        // Se agrega el ciclo de vida MOUNTED para ejecutar el metodo
        mounted(){ 
            this.getPokemones();  
        }, 
        data(){
            return{
                texto: 'Página Restaruantes LIST',
                msg: 'Lista de Pokemones',
                infoLista: [], // Agegamos el arreglo donde se almacena la respuesta de la API
                siguiente: 0,
                atras: 0,
            }
        },
        // Creamos un METODO para usar AXIOS
        methods: {
            getPokemones(pagina = 0){
                const ruta = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${pagina}`
                // axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
                axios.get(ruta)                
                    .then(respuesta => this.infoLista = respuesta.data.results)
            }
        },
    }
</script>