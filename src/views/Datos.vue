<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { copyText } from 'vue3-clipboard'
import CustomCardDatos from '../components/CustomCardDatos.vue'
const date = new Date("2023-02-03 12:00")
</script>

<template>
    <main>
        <CustomCardDatos msg="Vite + Vue">
        <div class="containerLogo">
            <div class="center-content">
                <img class="fiesta" src="../assets/Meslogo_ubicacion.png" alt="logo Ubicacion">
                <p class="regaloText">Queremos invitarte a que seas parte de esta gran noche. La ceremonia y la fiesta
                    se realizará en... </p>
                <button class="botoncito" @click="ubicacion">UBICACION</button>
            </div>
            <div class="center-content">
                <img class="regalo" src="../assets/logo_regalo.png" alt="Caja de Regalo">
                <p class="preMiel">Nuestro mayor regalo es tu presencia pero si deseas colaborar con nuestra</p>
                <p class="miel">Luna de Miel</p>
                <p class="preMiel">Pueden hacernos su presente en la siguiente cuenta: <br/> CBU:0000003100001989493977 <br/> Alias:Enzo-Magui</p>
                <button class="botoncito botoncitoCBU" @click="test('0000003100001989493977')" v-clipboard:success="onCopy"
                    v-clipboard:error="onError">COPIAR CBU</button>
                
            </div>
        </div>
        
    </CustomCardDatos>
    </main>
</template>

<script>
export default {
    data() {
        const test = (text) => {
            const container = document.querySelector('html')
            copyText(text, container, () => alert('CBU copiado, Muchas Gracias'))
        }
        const ubicacion = (e) => {
            window.open('https://maps.app.goo.gl/thFSeHNJNwCK8Jgt6')
        }
        return { test, ubicacion }
    },
}
</script> 

<style>
main{
    height: 90vh;
}
.fiesta {
    width: 30vw;

}

.regalo {
    width: 20vw;
}

.center-content {
    text-align: center;
    margin: 2rem;
    
}

.containerLogo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    
}

.botoncito {
    background-color: #6F8560;
    border-radius: 300px;
    padding: 0.5rem 1.5rem;
    text-decoration: none;
    color: white;
    border: none;
}

.botoncitoCBU {
    position: relative;
    z-index: 5;
}

.preMiel {
    margin: 0;
    margin-bottom: 1rem;
}

.regaloText {
    margin: 0;
    margin-bottom: 1rem;
}

.miel {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
    margin-bottom: 1rem;
}
.linkDatos img{
    transform: rotateZ(180deg);
    position: fixed;
    right: 5%;
    bottom: 5%;
}
</style>
