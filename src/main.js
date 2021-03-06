import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faSignOutAlt, faPhone, faLevelUpAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VuePikaday from '@enrian/vue-pikaday';
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VuePikaday);

axios.defaults.baseURL = 
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

library.add( 
  faStar,
  faSignOutAlt,
  faPhone,
  faLevelUpAlt
  )

Vue.component('font-awesome-icon', FontAwesomeIcon)

// dom.watch()

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

