<template>
    <div>
        <headerPage/>
        <navPage/>
        <!-- duda de porque funciona igual mandado datos con $event y sin el -->
        <div class="contenido">
        <saboresPedido :show="showSabores" @upSabores="addSabores($event)"></saboresPedido> 
        <decoracionesPedido :show="showDecoraciones" @upDecoraciones="addDecoraciones($event)"></decoracionesPedido>
        <informacionPedido :show="showInformacion" @upInformacion="addInformacion"></informacionPedido>
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
    },
    data() {
        return {
            showSabores: ' ',
            showDecoraciones: '',
            showInformacion: '',
        }
    },
    methods: {
        addSabores(sabores) {
            this.showSabores = ''
            this.$store.state.sabores = sabores
            this.showDecoraciones = ' '
        },
        addDecoraciones(decoraciones){
            this.showDecoraciones = ''
            this.$store.state.decoraciones = decoraciones
            this.showInformacion = ' '
        },
        addInformacion(nombre, telefono, correo){
            this.showInformacion = ''
            console.log(nombre)
            console.log(telefono)
            console.log(correo)
            this.$store.commit('addSabores')
            console.log(this.$store.state.pedido.sabores)
        }
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