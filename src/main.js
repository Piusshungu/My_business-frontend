import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuetify from 'vuetify'
import vuetify from '@/plugins/vuetify' // path to vuetify export

Vue.use(Vuetify,{
  theme: {
    primary: "red"
  }
  
});

Vue.config.productionTip = false;
new Vue({
  vuetify,
}).$mount('#app')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
