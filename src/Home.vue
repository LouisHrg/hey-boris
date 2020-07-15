<template>
  <div id="app" class="font-sans antialiased leading-tight p-0 xs:-mr-5 w-full overflow">
    <app-header></app-header>
    <app-features></app-features>
    <app-download></app-download>
    <app-testimonials></app-testimonials>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFeatures from "./components/AppFeatures.vue";
import AppTestimonials from "./components/AppTestimonials.vue";
import AppFooter from "./components/AppFooter.vue";
import AppDownload from "./components/AppDownload.vue";

export default {
  components: {
    AppHeader,
    AppFeatures,
    AppTestimonials,
    AppFooter,
    AppDownload
  }
};
</script>

<style>
@tailwind preflight;
@tailwind components;
@tailwind utilities;
</style>
