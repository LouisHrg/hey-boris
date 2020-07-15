<template>
  <div id="app" class="font-sans antialiased leading-tight p-0 xs:-mr-5 w-full overflow">
    <share-header></share-header>
    <app-register></app-register>
  </div>
</template>

<script>
import ShareHeader from "./components/ShareHeader.vue";
import AppRegister from "./components/AppRegister.vue";
import './firebase';

export default {
  components: {
    ShareHeader,
    AppRegister
  }
};
</script>

<style>
@tailwind preflight;
@tailwind components;
@tailwind utilities;
</style>
