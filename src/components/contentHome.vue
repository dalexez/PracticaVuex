<template>
    <div>
        <img v-if="login" src="../assets/pastelesHome.png" alt="muestra pasteles">
    </div>
    <div v-show="login">
    Usuario: Manz
    <span>(Identificado)</span>
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