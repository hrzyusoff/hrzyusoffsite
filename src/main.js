// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import '~/assets/style.scss';

export default function (Vue, { router, head, isClient }) {
  // Import buefy
  Vue.use(Buefy);

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
}