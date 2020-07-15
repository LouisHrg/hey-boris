<template>
    <div id="contact" class="mt-24 bg-white">
        <div class="flex flex-wrap items-start justify-center md:p-0 xs:p-4">
            <div class="md:w-1/3 xs:w-full text-main-black">
                <h1 class="text-main-black font-semibold text-2xl">
                    Rejoignez la communauté Boris !
                </h1>
                <div class="mt-8 opacity-50 lg:text-base xs:text-sm md:w-3/4 xs:w-full">
                    Fini les problèmes de transport !
                </div>
                <div class="mt-12 font-bold">
                    Notifications
                </div>
                <div class="mt-2 md:text-base xs:text-sm opacity-50">
                    <div>
                        Vous êtes notifiés en direct par Boris quand un problème survient !
                    </div>
                </div>
                <div class="mt-12 font-bold">
                    Traffic en direct
                </div>
                <div class="mt-2 md:text-base xs:text-sm opacity-50">
                    <div>
                        Les applications officielle des transports Parisiens sont trop lente à afficher le problème. Grâce à Boris vous êtes informé en direct de l'état du traffic !
                    </div>
                </div>
                <div class="mt-12 font-bold">
                    Communauté
                </div>
                <div class="mt-2 md:text-base xs:text-sm opacity-50">
                    <div>
                        La force de Boris est sa communauté : chaque utilisateur permet de remonter des informations rapidement & de manière efficace.
                    </div>
                </div>
            </div>
            <div class="md:w-1/3 xs:w-full md:mt-0 xs:mt-6">
                <form action="#" method="post" class="" v-on:submit.prevent>
                    <div class="md:hidden xs:block text-extrabold mt-6 mb-4">
                        S'inscrire
                    </div>

                    <div class="mb-6">

                        <span v-if="error.nameEmpty">
                            <input v-model="username" type="text" placeholder="Your name" class="w-full border border-red-light bg-grey-lightest py-4 text-main-black font-medium text-base text-center focus:bg-grey-light focus:outline-none mr-2">
                            <span class="text-main-black font-semibold text-xs opacity-75">
                                Vous devez saisir votre nom
                            </span>
                        </span>
                        <span v-else>
                            <input v-model="username" type="text" placeholder="Comment vous appellez vous ?" class="w-full bg-grey-lightest py-4 text-main-black font-medium text-base text-center focus:bg-grey-light focus:outline-none mr-2">
                        </span>
                    </div>

                    <div class="mb-6">
                        <span v-if="error.emailEmpty">
                            <span class="text-main-black font-semibold text-xs opacity-75">
                                Vous devez saisir un email valide
                            <input v-model="email" type="text" placeholder="Votre email" class="w-full border border-red-light bg-grey-lightest py-4 text-main-black font-medium text-base text-center focus:bg-grey-light focus:outline-none">
                            </span>
                        </span>

                        <span v-else>
                            <span v-if="error.emailWrong">
                                <input v-model="email" type="text" placeholder="Votre email" class="w-full border border-red-light bg-grey-lightest py-4 text-main-black font-medium text-base text-center focus:bg-grey-light focus:outline-none">
                                <span class="text-main-black font-semibold text-xs opacity-75">
                                    Vous devez saisir un email
                                </span>
                            </span>
                            <span v-else>
                                <input v-model="email" type="text" placeholder="Your email" class="w-full bg-grey-lightest py-4 text-main-black font-medium text-base text-center focus:bg-grey-light focus:outline-none">
                            </span>
                        </span>
                    </div>

                   <div class="mb-6">
                        <span v-if="error.passwordEmpty">
                            <input v-model="password1" type="password" placeholder="Your name" class="w-full border border-red-light bg-grey-lightest py-4 text-main-black font-medium text-base text-center focus:bg-grey-light focus:outline-none mr-2">
                            <span class="text-main-black font-semibold text-xs opacity-75">
                                Vous devez saisir un mot de passe
                            </span>
                        </span>
                        <span v-else>
                            <input v-model="password1" type="password" placeholder="Mot de passe" class="w-full bg-grey-lightest py-4 text-main-black font-medium text-base text-center focus:bg-grey-light focus:outline-none mr-2">
                        </span>
                    </div>

                    <div class="mb-6">
                         <span v-if="error.passwordEmpty">
                             <input v-model="password2" type="password" placeholder="Your name" class="w-full border border-red-light bg-grey-lightest py-4 text-main-black font-medium text-base text-center focus:bg-grey-light focus:outline-none mr-2">
                             <span class="text-main-black font-semibold text-xs opacity-75">
                                 Vous devez saisir un mot de passe
                             </span>
                         </span>
                         <span v-else>
                             <input v-model="password2" type="password" placeholder="Confirmation de mot de passe" class="w-full bg-grey-lightest py-4 text-main-black font-medium text-base text-center focus:bg-grey-light focus:outline-none mr-2">
                         </span>
                     </div>



                    <div class="w-full md:text-right xs:text-center">
                        <button @click="checkForm" class="bg-main-orange px-4 py-4 rounded font-medium text-center xs:w-full lg:w-auto text-grey-lightest">Valider mon inscription !</button>
                    </div>
                </form>
            </div>
        </div>

        <div class="flex items-center justify-center" v-show="alert">
            <div class="bg-green-lightest border border-green-light text-green-dark px-12 py-3 rounded relative" role="alert">
            <strong class="font-bold">Your message has been sent successfully.</strong>
            <span class="absolute pin-t pin-b pin-r px-4 py-3">
                <svg @click="alert=false" class="fill-current h-6 w-6 text-red-light opacity-75" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
            </span>
            </div>
        </div>

        <div class="flex items-center justify-center" v-show="error.database">
            <div class="bg-red-lightest border border-red-light text-red-dark px-12 py-3 rounded relative" role="alert">
            <strong class="font-bold">An unexpected error occurred in database.</strong>
            <span class="absolute pin-t pin-b pin-r px-4 py-3">
                <svg @click="alert=false" class="fill-current h-6 w-6 text-red-light opacity-75" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
            </span>
            </div>
        </div>

    </div>
</template>

<script>
import { registerUser } from "../firebase";

export default {
  data() {
    return {
      error: {
        nameEmpty: false,
        emailEmpty: false,
        emailWrong: false,
        passwordEmpty: false,
        passwordNoMatch: false,
        database: false
      },
      username: null,
      email: null,
      password1: null,
      password2: null,
      alert: false
    };
  },
  computed: {
    hasNoErrors() {
      return (
        !this.error.nameEmpty &&
        !this.error.emailEmpty &&
        !this.error.emailWrong &&
        !this.error.passwordEmpty
      );
    },
    sponsorId() {
      return this.$route.params.sponsorId
    },
  },
  methods: {
    emailValidation(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },

    checkForm() {
      if (!this.username) {
        this.error.nameEmpty = true;
      } else {
        this.error.nameEmpty = false;
      }

      if (!this.email) {
        this.error.emailEmpty = true;
      } else {
        if (this.emailValidation(this.email)) {
          this.error.emailWrong = false;
        } else {
          this.error.emailWrong = true;
        }
        this.error.emailEmpty = false;
      }

      if (!this.password1 || !this.password2) {
        this.error.passwordEmpty = true;
      } else {
        this.error.passwordEmpty = false;
      }

      if (this.password1 !== this.password2) {
        this.error.passwordNoMatch = true;
      } else {
        this.error.passwordNoMatch = false;
      }

      if (this.hasNoErrors) {

        this.submitMessage();
      }
    },

    submitMessage() {
       const payload = {
        sponsorId: this.$route.params.sponsorId,
        email: this.email,
        username: this.username,
        password: this.password1,
      }
      registerUser(payload)
      .then(res => this.$router.push({name: 'thank-you'}));


    },

    customEmail() {
      window.open(
        `mailto:test@example.com?subject=${this.username}&body=${this.messageBody}`
      );
    },

    resetForm() {
      this.username = null;
      this.email = null;
      this.messageBody = null;
    },
  },
  mounted() {}
};
</script>

<style scoped>
</style>
