// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import '~/styles/style.scss';
import Vuex from 'vuex';

export default function (Vue, { router, head, isClient, appOptions }) {
  // Import google fonts
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Open+Sans&display=swap',
  });

  // Import buefy
  Vue.use(Buefy);

  // Import Vuex
  Vue.use(Vuex);

  // TODO: Refactor vuex store
  appOptions.store = new Vuex.Store({
    state: {
      isDarkMode: false,
    },
    mutations: {
      changeMode(state) {
        state.isDarkMode = !state.isDarkMode;
      },
    },
  });

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
}
