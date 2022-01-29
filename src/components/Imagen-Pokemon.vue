<template>
    <div>
        <!-- <h1>Imagen del Pokemon: {{texto}} </h1> -->
        <!-- <ul class="list-group"> -->
            <!-- <li v-for="item in pokemons" :key="item.name" class="list-group-item"> -->
                <!-- <img :src="item.url" :alt="item.name"> {{ item.name }}  -->
                <!-- <a v-bind:href=item.url class="btn btn-primary"
                    target="_blank">{{ item.name }}
                </a> -->
                <!-- <v-img :src="item.url"></v-img> -->
            <!-- </li> -->
        <!-- </ul>  -->
        <!-- <button v-on:click="goBack" class="btn btn-primary">Regresar</button> -->

        <div class="position-relative">
            <div class="position-absolute top-0 start-50 translate-middle-x">
                <div class="card" style="width: 12rem;">
                <img :src="pokemon.url" class="card-img-top" :alt="pokemon.name">
                    <div class="card-body">
                        <h5 class="card-title"><strong>{{pokemon.name}}</strong></h5>
                        <button v-on:click="goBack" class="btn btn-primary">Regresar</button>
                    </div>
                </div>                        
            </div>
        </div>    
    </div>
</template>

<script>

/*

PARA ESTE EJERCICIO EN DESPLEGAR LAS IMAGENES ME APOYE EN ESTE VIDEO:
    7 - Curso de VueJS | Axios y mostrando pokemons
    https://www.youtube.com/watch?v=84G4ejLKPGY&t=278s

*/    

// Importar AXIOS para usar una API
import axios from 'axios';

    export default {
        name: 'Pokemon',
        // Se agrega el ciclo de vida MOUNTED para ejecutar el metodo
        mounted(){ 
            this.getPokemon(this.$route.params.id);  
        }, 
        data(){
            return{
                texto: this.$route.params.id,
                // msg: 'Lista de Pokemones',
                pokemon: {
                    name: "",
                    url: "",
                }, // Agegamos un OBJETO donde se almacena la respuesta de la API
                pokemons: [], // Agegamos un ARREGLO donde se almacenamos NOMBRE y URL
            }
        },
        // Creamos un METODO para usar AXIOS
        methods: {
            //// :::IMPORTANTE::: Dentro de esta seccion se crean las funciones de Javascript
            getPokemon(pokemon=""){
                // console.log(pokemon);
                const ruta = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
                // console.log(ruta);
                axios.get(ruta)
                     //.then(respuesta => this.infoLista = respuesta.data.sprites)
                     .then(respuesta => {
                        // console.log(respuesta.data)
                        this.pokemon.name = respuesta.data.name
                        this.pokemon.url = respuesta.data.sprites.front_default
                        this.pokemons.push(this.pokemon)
                     })
                     .catch((err) => {
                         console.log(err)
                     })

                // console.log(this.pokemons);

                // const milista = this.infoLista;
                // axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
                //     .then(respuesta => this.infoLista = respuesta.data.sprites.font_default)
            },

            goBack: function() {
                // Fte: https://stackhowto.com/how-to-go-back-to-previous-page-in-javascript/
                window.history.back();
            }
        },
    }

</script>