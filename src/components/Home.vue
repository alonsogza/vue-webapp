<template>
    <div>
        <h2>Esto es la {{texto}}</h2>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data(){
            return{
                texto: 'Página HOME',
            }
        }
    }
</script>