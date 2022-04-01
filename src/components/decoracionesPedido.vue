<template>
<div>
    <form v-if="show">
        <h4>Elige tu decoracion</h4>
        <input type="checkbox" id="Fondant" value="fondant" v-model.lazy="decoraciones">
        <label for="Fondant">Figuras de Fondant</label>
        <br>
        <input type="checkbox" id="Chantilli" value="chantilli" v-model.lazy="decoraciones">
        <label for="Chantilli">Letras de Chantilli</label>
        <br>
        <input type="checkbox" id="Fruta" value="fruta" v-model.lazy="decoraciones">
        <label for="Fruta">Fruta en Almibar</label>
        <br>
        <input type="checkbox" id="Velas" value="velas" v-model.lazy="decoraciones">
        <label for="Velas">Velas de Numeros</label>
        <br>
        <h4>Sabores elegidos: {{ decoraciones }}</h4>
        <button @click="upDecoraciones" >Siguiente</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "decoracionesPedido",
    props: ['show'],
    data() {
      return {
        decoraciones: [],
      }
    },
    methods: {
      upDecoraciones() {
        // this.$store.state.pedido.decoraciones = this.decoraciones
        // this.showSabores = false
        // console.log(this.$store.state.pedido)
        this.$emit('upDecoraciones', this.decoraciones)
      }  
    }
  }
</script>

<style scoped>
div {
    display: flex;
}
form {
    text-align: left;
}
</style>