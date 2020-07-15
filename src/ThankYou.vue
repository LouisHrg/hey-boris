<template>
  <div id="app" class="font-sans antialiased leading-tight p-0 xs:-mr-5 w-full overflow">
    <share-header></share-header>
    <div id="features" class="mb-6">
        <div class="bg-grey-lightest">
            <div class="container mx-auto px-6 pt-32">
                <h1 class="text-center text-black font-semibold text-2xl">
                    Merci pour votre inscription !
                    Vous pouvez desormais vous connectez sur l'application Boris
                </h1>
            </div>
        </div>
        <div id="download" class="pt-12 pb-12 w-full text-center">
            <div class="mt-4 p-10 opacity-50 text-sm md:block xs:hidden">
                Scannez le QR code avec votre smartphone ou alors cliquer sur le QR code directement !
            </div>
            <div>
                <a href="https://expo.io/@boris-corporate/Boris">
                    <img src="./assets/expo-qr-code.jpg" alt="" class="h-32">
                </a>
            </div>
        </div>
        <svg id="curveDownColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path style="fill: #f8fafc;" d="M0 0 C 50 100 80 100 100 0 Z" />
        </svg>
    </div>
  </div>
</template>

<script>
import ShareHeader from "./components/ShareHeader.vue";
import './firebase';

export default {
  components: {
    ShareHeader,
  }
};
</script>

<style>
@tailwind preflight;
@tailwind components;
@tailwind utilities;
</style>
