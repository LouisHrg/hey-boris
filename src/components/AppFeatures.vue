<template>
    <div id="features" class="mb-6">
        <div class="bg-grey-lightest">
            <div class="container mx-auto px-6 pt-32">
                <h1 class="text-center text-black font-semibold text-2xl">
                    Fonctionnalités
                </h1>
                <div class="flex md:flex-no-wrap xs:flex-wrap items-center justify-center mt-24">
                    <div class="px-6 py-6 m-2 text-center">
                        <img src="./../assets/boris/favs.png" alt="mountain image" class="h-32 mb-4">
                        <h3 class="mb-4">Itineraire et lignes favorites</h3>
                        <p class="text-black font-base text-sm opacity-50">
                            Vous pouvez ajouter des lignes et des itinéraires à vos favoris. Ils s'affichent directement sur la page d'accueil de l'application ! Du temps gagné !
                        </p>
                    </div>
                    <div class="px-6 py-6 m-2 text-center">
                        <img src="./../assets/boris/notifs.png" alt="tent image" class="h-32 mb-4">
                        <h3 class="mb-4">Soyez notifié !</h3>
                        <p class="text-black font-base text-sm opacity-50">
                            Soyez notifié ! Quand un problème survient sur une de vos lignes favorites ou sur un de vos itinéraires, Boris vous envoie une notification directement sur votre téléphone !
                        </p>
                    </div>
                    <div class="px-6 py-6 m-2 text-center">
                        <img src="./../assets/boris/8.png" alt="picnic image" class="h-32 mb-4">
                        <h3 class="mb-4">Avatar & point d'experience</h3>
                        <p class="text-black font-base text-sm opacity-50">
                            Chaque fois que vous signaler un problème et que les utilisateurs de Boris "like" votre signalement, vous gagnez de l'expérience et vous débloquez des avatars trop mignons !
                        </p>
                    </div>
                </div>
                <div class="flex md:flex-no-wrap xs:flex-wrap items-center justify-center lg:mt-64 xs:mt-0">
                    <div class="flex-1">
                        <div class="px-12 py-12 m-4 text-center">
                            <img src="./../assets/boris/notifs.png" alt="compass image" class="h-16 mb-4">
                            <h3 class="mb-4">Notifications</h3>
                            <p class="text-black font-thin text-xs opacity-50">
                                Vous êtes notifiés en direct par Boris quand un problème survient !
                            </p>
                        </div>
                        <div class="px-12 py-12 m-4 text-center">
                            <img src="./../assets/boris/boris-ok.png" alt="canteen image" class="h-16 mb-4">
                            <h3 class="mb-4">Traffic en direct</h3>
                            <p class="text-black font-thin text-xs opacity-50">
                                Les applications officielle des transports Parisien sont trop lente à afficher le problème. Grâce à Boris vous êtes informé en direct de l'état du traffic !
                            </p>
                        </div>
                    </div>
                    <div class="xs:hidden lg:block md:flex-2 lg:flex-2">
                        <img src="./../assets/iphone.png" alt="iphone image" class="h-iphone">
                    </div>
                    <div class="flex-1">
                        <div class="px-12 py-12 m-4 text-center">
                            <img src="./../assets/boris/problems.png" alt="forest image" class="h-16 mb-4">
                            <h3 class="mb-4">Communauté</h3>
                            <p class="text-black font-thin text-xs opacity-50">
                                La force de Boris est sa communauté : chaque utilisateur permet de remonter des informations rapidement & de manière efficace.
                            </p>
                        </div>
                        <div class="px-12 py-12 m-4 text-center">
                            <img src="./../assets/boris/boris-dosomething.png" alt="pines image" class="h-16 mb-4">
                            <h3 class="mb-4">Signalement</h3>
                            <p class="text-black font-thin text-xs opacity-50">
                                Le système de signalement vous permet de savoir rapidement si un problème se produit sur votre trajet.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <svg id="curveDownColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path style="fill: #f8fafc;" d="M0 0 C 50 100 80 100 100 0 Z" />
        </svg>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>
