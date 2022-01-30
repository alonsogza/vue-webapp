<template>
    <div>
        <h2>Esto es la {{texto}}</h2>
        <p class="text-start fw-bold">{{msg}}</p>
        <div class="row justify-content-between">
            <div class="col-4">
                <button v-on:click="siguiente_bloque -= 20; getPokemones(siguiente_bloque)" class="btn btn-outline-primary">Atras</button>
            </div>
            <div class="col-4">
                <button v-on:click="siguiente_bloque += 20; getPokemones(siguiente_bloque)" class="btn btn-outline-primary">Siguiente</button>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <ul class="list-group">
                    <li v-for="item in infoLista" :key="item.name" class="list-group-item">
                        <!-- <a v-bind:href=item.url class="btn btn-primary"
                            target="_blank">{{ item.name }}
                        </a> -->
                        <router-link :to="{name:'imagen-pokemon', params:{id: item.name}}"> {{ item.name }} </router-link> <!-- Se agrega una nueva ruta para mostrar la imagen-->
                    </li>
                </ul>
            </div>
        </div>
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
                siguiente_bloque: 0,
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