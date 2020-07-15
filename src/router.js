import Home  from "./Home.vue";
import Share from "./Share.vue";
import ThankYou from "./ThankYou.vue";

export const routes = [
    { path: '/', component: Home },
    { path: '/share/:sponsorId', component: Share },
    { path: '/thank-you', name: 'thank-you',component: ThankYou },
    { path: '*', component: Home },
]
