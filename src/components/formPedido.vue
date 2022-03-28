<template>
    <div>
        <form action="">
            <input type="text" v-model="sabor">
            <button @click="addSabor" >Agregar sabor</button>
            <!-- <button @click="$store.dispatch('addSabor')" >Agregar sabor</button> -->
            <ul>
                <li
                    v-for="(sabor, index) in $store.state.sabores"
                    :key="index">
                    {{ sabor }}
                </li>
            </ul>


            <label for="nombre">¿Cual es tu nombre?</label>
            <input type="text" id="nombre" placeholder="Tu nombre">
            <br><br>
    
            <label for="tel">¿Cual es tu telefono?</label><br>
            <input type="tel" id="tel" name="tel" maxlength="10">
            
            <br><br>
    
            <label for="correo">Correo Electronico</label><br>
            <input type="email" id="correo" name="correo">
    
            <br><br>
    
            <label for="sabores">Elige tu sabor o sabores de pastel</label><br><br>
            <input type="checkbox" id="sabor1" name="sabor1" value="Vainilla">
            <label for="sabor1">Vainilla</label><br>
            <input type="checkbox" id="sabor2" name="sabor1" value="Chocolate">
            <label for="sabor2">Chocolate</label><br>
            <input type="checkbox" id="sabor3" name="sabor1" value="Moka">
            <label for="sabor3">Moka</label><br>
            <input type="checkbox" id="sabor4" name="sabor1" value="Zanahoria">
            <label for="sabor4">Zanahoria</label><br>
            <input type="checkbox" id="sabor5" name="sabor1" value="Tres Leches">
            <label for="sabor5">Tres Leches</label><br>
            <input type="checkbox" id="sabor6" name="sabor1" value="Red Velvet">
            <label for="sabor6">Red Velvet</label><br><br>
    
    
            <label for="decoracion">Elige tu decoracion</label><br><br>
            <input type="checkbox" id="decoracion1" name="decoracion1" value="Figuras de fondant">
            <label for="sabor1">Figuras de fondant</label><br>
            <input type="checkbox" id="decoracion2" name="decoracion2" value="Letras de chantilli">
            <label for="sabor2">Letras de chantilli</label><br>
            <input type="checkbox" id="decoracion3" name="decoracion3" value="Fruta en almibar">
            <label for="sabor3">Fruta en almibar</label><br>
            <input type="checkbox" id="decoracion4" name="decoracion4" value="Velas de numeros">
            <label for="sabor4">Velas de numeros</label><br><br>
    
            <label for="descripcion">Descripcion de tu pastel</label><br><br>
            <textarea name="descripcion" id="descripcion" cols="30" rows="10">
                Describe un poco como deseas tu pastel :)
            </textarea>
    
            <br><br>
    
            <input type="reset">
            <input type="submit">
        </form>
    </div>
</template>

<script>
export default {
    name: 'formPedido',
    data (){
        return {
            sabor:''
        }
    },
    methods: {
        addSabor() {
            this.$store.commit('asignarSabor', this.sabor)// this.$store.state.sabor = this.sabor
            this.$store.dispatch('addSaborAction')
            this.sabor = ''
        }
    }
}
</script>

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
input {
    width: 40%;
}
label {
    text-align: left;
}
</style>