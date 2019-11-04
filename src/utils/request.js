// 封装所有与 axios 相关的逻辑
// 改造为一个插件

// 导入 axios
import axios from 'axios'

// 创建一个 axios 实例
const instance = axios.create({
  // 基准地址
  baseURL: 'http://ttapi.research.itcast.cn/app/v1_0/'
})

// 设置请求拦截器
instance.interceptors.request.use(function (config) {
  // config:所有的请求信息
  return config
}, function (error) {
  // 错误处理
  return Promise.reject(error)
})

// 设置响应拦截器
instance.interceptors.response.use(function (response) {
  // response: 服务器响应回来的数据
  return response.data.data
}, function (error) {
  // 错误处理
  return Promise.reject(error)
})

// 创建一个插件对象
const Myplugs = {}
// 添加一个install方法
// Vue: 构造器
Myplugs.install = function (Vue) {
  // 添加逻辑
  // 将 axios 实例挂载到 Vue 的原型中
  Vue.prototype.$http = instance
}

// 暴露插件对象
export default Myplugs
