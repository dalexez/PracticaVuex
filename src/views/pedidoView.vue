<template>
    <div>
        <headerPage/>
        <navPage/><formPedido/>
        <footerPage/>
    </div>
</template>

<script>
import formPedido from '@/components/formPedido.vue'
import headerPage from '@/components/headerPage.vue'
import navPage from '@/components/navPage.vue'
import footerPage from '@/components/footerPage.vue'

export default {
    name: 'clienteView',
    components: {
        formPedido,
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
</style>