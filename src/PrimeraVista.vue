<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import CustomCard from './components/CustomCard.vue'
import cuentaRegresiva from './components/CuentaRegresiva.vue'
const date = new Date("2023-02-03 12:00")
</script>

<template>
    <main class="main">
        <CustomCard msg="Vite + Vue">
            <p class="header">¡Nos Casamos!</p>
            <img class="enzoymagui" src="./assets/enzoymagui.png" alt="EnzoYMagui">
            <p class="date">3 de febrero 2023</p>
            <cuentaRegresiva :end-date="date" v-slot="{ day, hour, min, sec }">
                <div class="clock">
                    <div >
                        <div class="time">
                            {{ day }}
                        </div>
                        <div class="text">
                            <p>Dias</p>
                        </div>
                    </div>
                    <div >
                        <div class="time">
                            {{ hour }}
                        </div>
                        <div class="text">
                            <p>Horas</p>
                        </div>
                    </div>
                    <div >
                        <div class="time">
                            {{ min }}
                        </div>
                        <div class="text">
                            <p>Minutos</p>
                        </div>
                    </div>
                </div>
                

            </cuentaRegresiva>
        </CustomCard>
    </main>
</template>

<style>
.header {
    font-size: 20px;
    margin-bottom: 5vh;
}

.main {
    width: min-content;
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
}

.enzoymagui {
    width: 50vw;
}

.date {
    background-color: #B69577;
    color: white;
    padding: 2px 3px;
    border-radius: 5px;
}

.clock {
    margin-bottom: auto;
    display: flex;
    gap: 10vw;
    
}

.time{
    background-color: #6F8560;
    padding: 6px;
    border-radius: 6px;
    color:white;
    font-size: 40px;
    width: min-content;
    margin-left: auto;
    margin-right: auto;
}

.text p{
    margin:0;
}
</style>