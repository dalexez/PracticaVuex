<template>
    <header>
        <div class="headerContent">
            <div class="imgHeader">
                <img src="../assets/pasteleria2.png" alt="Logo Pasteleria">
            </div>
            <div class="bienvenida">
                <h1>¡Bienvenidos a SweetCup!</h1>
                <h2>Hola
                    <h2>dsfdasfdsfa</h2>
                </h2>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'headerPage'
}
</script>

<style scoped>
.headerContent {
    display: flex;
    flex-wrap: wrap;
}
.imgHeader{
    display: flex;
    justify-content: center;
}
.headerContent div {
    width: 100%;
} 
.bienvenida {
    background: rgba(185,255,252,255);
}
img{
    width: auto;
    height: auto;
    max-width: 250px;
    max-height: 250px;
}
</style>