import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"; 
import firebase from "firebase/app";
// gives access to firebase. 
// We add the imports to main.js

Vue.prototype.$axios = axios;
// by tying axios to vue using the prototype, we can now add axios anywhere in our vue.js file. 
Vue.config.productionTip = false

 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyA1B_u3itaOdge0SojSLgYYAEbrjLanch8",
  authDomain: "test-login-a1a9a.firebaseapp.com",
  databaseURL: "https://test-login-a1a9a.firebaseio.com",
  projectId: "test-login-a1a9a",
  storageBucket: "test-login-a1a9a.appspot.com",
  messagingSenderId: "348330853586",
  appId: "1:348330853586:web:72f31c3049937a84f1d90b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
