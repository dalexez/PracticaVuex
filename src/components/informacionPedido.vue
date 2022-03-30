<template>
<div>
    <form action="">
        <h4>Datos de contacto</h4>
        <label for="nombre">¿Cual es tu nombre?</label>
            <input type="text" id="nombre" v-model="nombre">
            <br><br>
        <label for="telefono">¿Cual es tu telefono?</label>
            <input type="tel" id="telefono" v-model="telefono">
            <br><br>
        <label for="email">Correo Electronico</label>
            <input type="email" id="email" v-model="correo">
            <br><br>
        <label for="descripcion">Descripcion de tu pastel</label><br><br>
            <textarea name="descripcion" id="descripcion" cols="30" rows="10">
                Describe un poco como deseas tu pastel :)
            </textarea>
  <!-- <span>Sabores elegidos: {{ decoraciones }}</span> -->
        <button @click="addPedido" >Agregar pedido</button>
    </form>
  </div>
</template>

<script>

  import saboresPedido from '../components/saboresPedido.vue'

  export default {
    name: "informacionPedido",
    data() {
      return {
        nombre: '',
        telefono: '',
        correo: ''
      }
    },
    methods: {
      addPedido() {
        this.$store.state.pedido.Nombre = this.nombre
        this.$store.state.pedido.Telefono = this.telefono
        this.$store.state.pedido.Correo = this.correo
        console.log(this.$store.state.pedido)

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