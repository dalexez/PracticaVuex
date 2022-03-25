<template>
    <div>
        <headerPage/>
        <navPage/><contentHome/>
        <footerPage/>
    </div>
</template>

<script>
import contentHome from '@/components/contentHome.vue'
import headerPage from '@/components/headerPage.vue'
import navPage from '@/components/navPage.vue'
import footerPage from '@/components/footerPage.vue'
export default {
    name: 'clienteView',
    components: {
        contentHome,
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