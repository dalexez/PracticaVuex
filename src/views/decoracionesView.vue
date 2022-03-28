<template>
    <div>
        <headerPage/>
        <navPage/><decoracionPastel/>
        <footerPage/>
    </div>
</template>

<script>
import decoracionPastel from '@/components/decoracionesPastel.vue'
import headerPage from '@/components/headerPage.vue'
import navPage from '@/components/navPage.vue'
import footerPage from '@/components/footerPage.vue'

export default {
    name: 'clienteView',
    components: {
        decoracionPastel,
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