<template>
    <div class="contentNav">
        <nav class="menu">
            <div>
                <ul>
                    <li><router-link to="/sabores">Sabores</router-link></li>
                    <li><a href="#">Decoraciones</a></li>
                    <li><a href="#">Agenda tu pedido</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Ingresar</a></li>
                </ul>
            </div>
        </nav>
    </div>    
</template>

<style scoped>
.contentNav {
    width: 30%;
    justify-content: center;
    align-items: center;
    background: rgba(255,197,203,255);
}
</style>