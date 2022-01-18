<template>
    <div>
        <h2>Esto es la {{texto}}</h2>
    </div>
</template>

<script>
    export default {
        name: 'contacto',
        data(){
            return{
                texto: 'Página Contacto',
            }
        }
    }
</script>