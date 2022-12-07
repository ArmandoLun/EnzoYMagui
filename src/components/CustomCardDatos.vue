<template>
  <div class="borde">
    <img class="ramillete ramilleteTop"  src="../assets/ramillete.png" alt="ramillete.png"/>
  <slot></slot>
  <img class="ramillete" src="../assets/ramillete.png" alt="ramillete.png"/>
  <router-link class="link" to="/"><img src="../assets/expand_more_FILL0_wght400_GRAD0_opsz48.svg"/></router-link>
  </div>
  
</template>

<style scoped>
.ramilleteTop{
  transform: rotateZ(180deg);
  top: -125px;
}
.ramillete{
  width: 110%;
  position: absolute;
  left: -5%;
  right: -5%;
  bottom: -145px;
}

.borde{
  border: 3px solid #747D63;
  border-radius: 30px;
  position: relative;
  margin-top: 5vh;
  height: 85vh;
  min-width: 85vw;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center; 
}

.link {
  position: absolute;
  bottom: 5%;
  right: 0;
  z-index: 2;
  transform: rotateZ(180deg);
}
</style>
