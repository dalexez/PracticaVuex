<template>
    <div>
            <form enctype="text/plain" method="POST" action="index.php">
             Username:<input type="text" name="user" placeholder="user"><br>
             Password:<input type="password" name="direccion" placeholder="Password"><br>
             <!-- Correo:<input type="email" name="correo" placeholder="E-mail"><br> -->
            <button button  name="button" ><a href="./vistaPastelero.html">Ingresar</a></button>
    </form>
    </div>
</template>

<style scoped>
div {
    display: flex;
    width: 70%;
    justify-content: center;
}

form {
    display: flex;
    flex-direction: column;
}
</style>