<template>
    <div class="contentNav">
        <nav class="menu">
            <div>
                <ul>
                    <li><router-link to="/sabores">Sabores</router-link></li>
                    <li><router-link to="/decoraciones">Decoraciones</router-link></li>
                    <li><router-link to="/pedido">Agenda tu pedido</router-link></li>
                    <li><a href="#">Home</a></li>
                    <li><router-link to="/login">Ingresar</router-link></li>
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