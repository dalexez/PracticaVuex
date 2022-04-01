<template>
    <div>
        <headerPage/>
        <navPage/>
        <div class="contenido">
        <saboresPedido></saboresPedido>
        <decoracionesPedido/>
        <informacionPedido/>
        </div>
        <footerPage/>
    </div>
</template>

<script>
import informacionPedido from '@/components/informacionPedido.vue'
import saboresPedido from '@/components/saboresPedido.vue'
import decoracionesPedido from '@/components/decoracionesPedido.vue'
import headerPage from '@/components/headerPage.vue'
import navPage from '@/components/navPage.vue'
import footerPage from '@/components/footerPage.vue'

export default {
    name: 'clienteView',
    components: {
        informacionPedido,
        decoracionesPedido,
        saboresPedido,
        headerPage,
        navPage,
        footerPage
    }
}
</script>

<style scoped>
div {
    display: flex;
    flex-wrap: wrap;
}
.contenido {
    display: flex;
    flex-direction: column;
    width: 70%;
    align-content: center;
}
</style>