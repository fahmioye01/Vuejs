import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VShowSlide from "v-show-slide";

Vue.use(VShowSlide);

Vue.config.productionTip = false;

require("vue2-animate/dist/vue2-animate.min.css");

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
