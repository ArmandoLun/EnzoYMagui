<template>
  <div>
    <router-view v-slot="{ Component, route  }">
      <transition name="slide">
        <component :is="Component" :key="route.path"></component>
      </transition>
    </router-view>
  </div>
</template>

<style>
/* .bottom-slide-enter-active {
  transition: transform 1.25s;
  z-index: 2;
  transform: translateY(100%);
}

.bottom-slide-leave-active {
  z-index: -1;
}

.bottom-slide-leave-to {
  z-index: -1;
}

.bottom-slide-enter-to {
  z-index: 2;
  transform: translateY(0%);
}

.top-slide-enter-active {
  transition: transform 1.25s;
  z-index: 2;
  transform: translateY(-100%);
}

.top-slide-leave-active {
  z-index: -1;
}

.top-slide-leave-to {
  z-index: -1;
}

.top-slide-enter-to {
  z-index: 2;
  transform: translateY(0%);
} */

.slide-enter-active {
    transition: transform 1.25s;
    z-index: 2;
    transform: translateY(100%);
  }
  .slide-leave-active {
    z-index: -1;
  }
  .slide-leave-to {
    z-index: -1;
  }
  .slide-enter-to {
    z-index: 2;
    transform: translateY(0%);
  }
</style>