import { createApp, markRaw } from "vue";

// router
import router from "./router/index.js";

// styles
import "normalize.css";
import "./assets/scss/main.scss";

// app
import App from "./App.vue";

// bootstrap
import "@popperjs/core";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap";

// vue inline svg
import InlineSvg from "vue-inline-svg";

// vue select
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

// Vue3Lottie
import Vue3Lottie from "vue3-lottie";
import "vue3-lottie/dist/style.css";

// i18n
import i18n from "./i18n/i18n.js";
import "vue-toastification/dist/index.css";

// pinia
import { createPinia } from "pinia";

// Toast
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

// Carousel
import "vueperslides/dist/vueperslides.css";

// Bootstrap Vue
import BootstrapVue3 from "bootstrap-vue-3";

// Table
import Vue3EasyDataTable from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";
import "aos/dist/aos.css";

const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

createApp(App)
  .use(router)
  .use(pinia)
  .use(i18n)
  .use(Vue3Lottie)
  .use(BootstrapVue3)
  .use(Toast, {
    // Setting the global default position
    position: POSITION.TOP_LEFT,
  })
  .component("InlineSvg", InlineSvg)
  .component("DataTable", Vue3EasyDataTable)
  .component("v-select", vSelect)
  .mount("#app");
