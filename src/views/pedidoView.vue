<template>
    <div>
        <headerPage/>
        <navPage/>
        <div class="contenido">
        <saboresPedido v-if="showSabores"></saboresPedido>
        <decoracionesPedido v-if="showDecoraciones"></decoracionesPedido>
        <informacionPedido v-if="showInformacion"></informacionPedido>
        <!-- <decoracionesPedido/><informacionPedido/> -->
        <button @click="siguienteComponente" >{{msjBoton}}</button>
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
            showSabores: true,
            showDecoraciones: false,
            showInformacion: false,
            msjBoton:'Siguiente'
        }
    },
    methods: {
        siguienteComponente() {
            if (!this.showDecoraciones & !this.showInformacion){
                this.showSabores = false
                this.showDecoraciones = true
                this.showInformacion = false
            } else if (!this.showSabores & !this.showInformacion){
                this.showDecoraciones = false
                this.showSabores = false
                this.showInformacion = true
            } else {
                this.showSabores = false
                this.showDecoraciones = false
                this.showInformacion = false
                this.msjBoton = 'Hacer otro pedido'
            }
            // this.showDecoraciones = true
            // this.showInformacion = false
            // console.log(this.showSabores)
            // console.log(this.showDecoraciones)
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