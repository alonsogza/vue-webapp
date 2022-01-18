<template>
    <div>
        <h2>Esto es la {{texto}} : {{id_restaruante}} </h2>
    </div>
</template>

<script>
    export default {
        name: 'restaruante-top',
        mounted() {
            this.id_restaruante = this.$route.params.id;
            
        },
        data(){
            return{
                texto: 'Página Restaruantes Destacado',
                id_restaruante: null
            }
        }
    }
</script>