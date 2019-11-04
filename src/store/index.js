import Vue from 'vue'
import Vuex from 'vuex'
// 导入userLocal
import { setUserLocal, getUserLocal } from '@/utils/userlocal'

// 在vue中使用vuex
Vue.use(Vuex)

// 创建并导出创库对象
export default new Vuex.Store({
  // 统一管理项目中的公用数据
  state: {
    user: getUserLocal()
  },
  // 修改state中的数据
  mutations: {
    setUser: function (state, obj) {
      // 先赋值
      state.user = obj
      // 存储到localstorage中
      setUserLocal(obj)
    }
  }
})
