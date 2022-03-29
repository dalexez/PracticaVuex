<template>
    <div>
        <img v-show="login" src="../assets/pastelesHome.png" alt="muestra pasteles">
    </div>
    <div>
    Usuario: Manz
    <span v-show="login">(Identificado)</span>
  </div>
</template>

<script>
export default {
    name: 'contentHome',
        data() {
            return {
                login: false
    }
  }
}
</script>

<style scoped>
div {
    width: 70%;
    justify-content: center;
}
</style>