// 导入了vue
import Vue from 'vue'
// 导入了app.vue(跟组件)
import App from './App.vue'
// 导入了router
import router from './router'
// 导入了vuex
import store from './store'
// 导入Vant
import Vant from 'vant'
// 导入自己封装的插件
import AxiosPlugs from '@/utils/request.js'

// 导入Vant的样式
import 'vant/lib/index.css'
// 导入字体图标
import '@/styles/index.css'

// 在vue中使用vant
Vue.use(Vant)
// 在vue中使用插件
Vue.use(AxiosPlugs)

Vue.config.productionTip = false

// 创建vue实例
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')// $mount跟el一样
