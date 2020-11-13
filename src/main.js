import { createApp } from 'vue'
import App from './App.vue'

import Vue from "vue";

createApp(App).mount('#app')


Vue.filter('Ucase', function (val) {
    return val.toUpperCase();
})

