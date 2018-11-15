// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible.js'
import FastClick from 'fastclick'
import $ from 'jquery'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';

import VueBus from 'vue-bus';

Vue.use(VueBus);

Vue.use(ElementUI);


import axios from 'axios'
import qs from 'qs'
Vue.prototype.$qs = qs;
Vue.prototype.$axios = axios;

FastClick.attach(document.body);
Vue.config.productionTip = false;






/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data:{
		Bus:new Vue()
	},
  components: { App },
  template: '<App/>'
})
