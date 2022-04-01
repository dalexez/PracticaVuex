<template>
    <div>
        <headerPage/>
        <navPage/><papa/>
        <footerPage/>
    </div>
</template>

<script>

import papa from '@/components/papa.vue'
import headerPage from '@/components/headerPage.vue'
import navPage from '@/components/navPage.vue'
import footerPage from '@/components/footerPage.vue'

export default {
    name: 'clienteView',
    components: {
        papa,
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