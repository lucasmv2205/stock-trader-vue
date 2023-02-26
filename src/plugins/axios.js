import Vue from "vue";
import axios from "axios";

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios.create({
      baseURL: "https://curso-vue-7db12-default-rtdb.firebaseio.com/",
    });
  },
});
