import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'github-markdown-css'
// import DyyComponents from "../package/components/index.js";
import DUI from "../lib/DUI.umd.js"
console.log(DUI);

import '../lib/index.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'highlight.js/styles/atom-one-dark.css'
import '@src/style/index.scss'
import DyyAnchor from './components/DyyAnchor.vue'
import DyyTitle from './components/DyyTitle.vue'
import DyyCode from './components/dyyCode/dyyCode.vue'
import directives from './directive/index'
Vue.use(directives)
// import dyyVueComponents from "dyy-vue-components";
// import 'dyy-vue-components/lib/vueComponents.css'
import 'prismjs'
import dayjs from "dayjs";

Vue.config.productionTip = false
Vue.component('dyy-anchor', DyyAnchor)
Vue.component('dyy-title', DyyTitle)
Vue.component('dyy-code', DyyCode)
Vue.use(DUI, {dayjs: dayjs})
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
