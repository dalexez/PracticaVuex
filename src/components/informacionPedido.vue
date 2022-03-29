<template>
<div>
    <form action="">
        <label for="nombre">¿Cual es tu nombre?</label>
            <input type="text" id="nombre" v-model="nombre">
            <br><br>
        <label for="telefono">¿Cual es tu telefono?</label>
            <input type="tel" id="telefono" v-model="telefono">
            <br><br>
        <label for="email">Correo Electronico</label>
            <input type="email" id="email" v-model="nombre">
            <br><br>
  <!-- <span>Sabores elegidos: {{ decoraciones }}</span> -->
    </form>
  </div>
</template>

<script>
  export default {
    name: "decoracionesPedido",
    data() {
      return {
        nombre: '',
        telefono: '',
        email: ''
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