import Vue from 'vue'
// 导入vue-router
import VueRouter from 'vue-router'

// 在vue中使用VueRouter
Vue.use(VueRouter)

// 创建路由信息对象
const routes = [
  // 登录路由
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  // 布局的路由
  {
    path: '/layout',
    name: 'layout',
    component: () => import('../views/layout'),
    children: [
      // 首页路由
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/home')
      }
    ]
  }
]

// 创建路由实例
const router = new VueRouter({
  routes// 路由信息的集合
})
// 导出路由实例
export default router
