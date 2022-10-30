<template>
  <div class="borde">
    <img class="ramillete ramilleteTop"  src="../assets/ramillete.png" alt="ramillete.png"/>
  <slot></slot>
  <img class="ramillete" src="../assets/ramillete.png" alt="ramillete.png"/>
  
  </div>
  
</template>

<style scoped>
.ramilleteTop{
  transform: rotateZ(180deg);
  top: -70px;
}
.ramillete{
  width: 110%;
  position: absolute;
  left: -5%;
  right: -5%;
  bottom: -70px;
}

.borde{
  border: 3px solid #747D63;
  border-radius: 30px;
  position: relative;
  margin-top: 5vh;
  height: 90vh;
  min-width: 85vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
