// App Entry File

// Dependencies
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueCarousel from 'vue-carousel';

// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Components 
import GlobalHeader from './src/components/globalHeader.vue';
import GlobalFooter from './src/components/globalFooter.vue';

// Router
import { routes } from './src/routes/routes.js';

const router = new VueRouter({
    routes
});

Vue.use(VueRouter);
Vue.use(VueCarousel);

/* REMOVE BEFORE PRODUCTION */
Vue.config.debug = true;
Vue.config.devtools = true;

new Vue({
    el: "#app",
    router,
    components: {
        GlobalHeader,
        GlobalFooter
        // Additional components loaded with route
    }
});