<template>
<div>
    <form action="">
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
  <span>Sabores elegidos: {{ decoraciones }}</span>
    </form>
  </div>
</template>

<script>
  export default {
    name: "decoracionesPedido",
    data() {
      return {
        decoraciones: []
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