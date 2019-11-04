// 管理所有与用户相关的网络请求

// 用来进行用户的登录
// axios: 发起网络请求的对象
// options: 发起网络请求的参数
// function userLogin (axios, options) {
function userLogin (axios, { url, method, data }) { // 解构
  // 发送网络请求
  return axios({
    url: url,
    method: method,
    data: data
  })
}
// return: 返回了 promise 对象
// 将来调用 userLogin 时,得到的是一个 promise 对象

// 暴露给外界: 按需导出
export {
  userLogin
}
