<template>
<nav class="flex items-center justify-between flex-wrap">
    <app-logo class="p-4"></app-logo>
    <h4 class="text-white"> Inscrivez-vous ! </h4>
</nav>
</template>

<script>
import AppLogo from "./AppLogo.vue";

export default {
  components: {
    AppLogo
  },
  data() {
    return {
      menu: true
    };
  },
  methods: {
    toggleMenu() {
      this.menu = !this.menu
    }
  },
};
</script>
