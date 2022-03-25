<template>
    <footer>
        <div class="footerContent">
            <div>

            </div>
            <div>
                <h2>Direcccion</h2>
                <ul>
                    <li>Molino de parras #127</li>
                </ul>
            </div>
            <div>
                <h2>Telefono</h2>
                <ul>
                    <li>4268115236</li>
                </ul>
            </div>
            <div>
                <h2>Horarios de atencion</h2>
                <ul>
                    <li>L-S</li>
                    <li>10am a 6pm</li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'footerPage',
}
</script>

<style scoped>
.footerContent {
    display: flex;
    justify-content: space-evenly;
    background: #ffcb85;
}
</style>