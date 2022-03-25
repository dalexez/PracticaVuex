<template>
    <div>
        <headerPage/>
        <navPage/><saboresPastel/>
        <footerPage/>
    </div>
</template>

<script>
import saboresPastel from '@/components/saboresPastel.vue'
import headerPage from '@/components/headerPage.vue'
import navPage from '@/components/navPage.vue'
import footerPage from '@/components/footerPage.vue'

export default {
    name: 'clienteView',
    components: {
        saboresPastel,
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