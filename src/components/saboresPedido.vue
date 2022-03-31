<template>
<div v-if="showSabores">
    <form>
        <h4>Elige tu sabor</h4>
        <input type="checkbox" id="Vainilla" value="vainilla" v-model.lazy="sabores">
        <label for="Vainilla">Vainilla</label>
        <br>
        <input type="checkbox" id="Chocolate" value="chocolate" v-model.lazy="sabores">
        <label for="Chocolate">Chocolate</label>
        <br>
        <input type="checkbox" id="Zanahoria" value="zanahoria" v-model.lazy="sabores">
        <label for="Zanahoria">Zanahoria</label>
        <br>
        <input type="checkbox" id="Moka" value="moka" v-model.lazy="sabores">
        <label for="Moka">Moka</label>
        <br>
        <input type="checkbox" id="TresLeches" value="tresLeches" v-model.lazy="sabores">
        <label for="TresLeches">Tres Leches</label>
        <br>
        <input type="checkbox" id="RedVelvet" value="redVelvet" v-model.lazy="sabores">
        <label for="RedVelvet">Red Velvet</label>
        <br>
        <h4>Sabores elegidos: {{ sabores }}</h4>
        <!-- <button @click="addSabores" >Siguiente</button> -->
    </form>
  </div>
</template>

<script>
  export default {
    name: "saboresPedido",
    data() {
      return {
        sabores: [],
        showSabores: this.$store.state.showSabores
      }
    },
    methods: {
      addSabores() {
        console.log(this.$store.state.show)
        // this.$store.state.pedido.sabores = this.sabores
        // this.showSabores = false
        this.showSabores = false
        console.log(this.$store.state.show)
        
      }
    }
  }
</script>

<style scoped>
div {
    display: flex;
    flex-wrap: wrap;
}
form {
    text-align: left;
}
</style>