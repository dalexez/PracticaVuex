<template>
    <form action="">
        <label for="nombre">¿Cual es tu nombre?</label>
        <input type="text" id="nombre" placeholder="Tu nombre">
    </form>
</template>

<script>
export default {
    name: 'formPedido'
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
}
input {
    width: 20%;
}
label {
    text-align: left;
}
</style>