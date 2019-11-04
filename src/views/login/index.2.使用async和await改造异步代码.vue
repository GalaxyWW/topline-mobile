<template>
  <div class="login">
    <!-- 页面顶部 -->
    <van-nav-bar title="登录" />
    <!-- 输入框 -->
    <van-cell-group>
      <!-- clearable: 可清空  -->
      <van-field
        v-model="user.mobile"
        clearable
        placeholder="请输入手机号"
        :error-message="errmsg.mobile"
      >
        <template slot="left-icon">
          <i class="login-phone iconfont icon-shouji"></i>
        </template>
      </van-field>
      <van-field
        left-icon="contact"
        v-model="user.code"
        clearable
        placeholder="请输入验证码"
        :error-message="errmsg.code"
      >
        <template slot="left-icon">
          <i class="login-phone iconfont icon-locka"></i>
        </template>
        <van-button slot="button" class="mycode" size="small" round>发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <!-- 登录按钮 -->
    <div class="login-btn">
      <van-button class="l-btn" type="info" size="large" @click="login">登录</van-button>
    </div>
  </div>
</template>

<script>
// 导入 userLogin
import { userLogin } from '@/api/user.js'

export default {
  data () {
    return {
      user: {
        mobile: '13911111111',
        code: '246810'
      },
      errmsg: {
        mobile: '',
        code: ''
      }
    }
  },
  methods: {
    async login () {
      // 参数的验证
      if (!this.validData()) {
        return
      }
      try {
        // 完成登录逻辑  发送请求到服务器
        let res = await userLogin(this.$http, {
          url: '/authorizations',
          method: 'POST',
          data: this.user
        })
        // 保存到 localStorage 中
        window.localStorage.setItem('user', JSON.stringify(res))
        // 跳转到 home
        this.$router.push('/home')
      } catch (err) {
        console.log(err)
      }
    },
    validData () {
      // 验证 user 中的参数是否为空
      if (this.user.mobile.trim().length === 0) {
        this.errmsg.mobile = '手机号不能为空'
        return false
      }
      if (this.user.mobile.trim().length !== 11) {
        this.errmsg.mobile = '请输入正确的手机号'
        return false
      }
      // 将错误信息重置为空
      this.errmsg.mobile = ''
      if (this.user.code.trim().length === 0) {
        this.errmsg.code = '验证码不能为空'
        return false
      }
      // 将错误信息重置为空
      this.errmsg.code = ''
      return true
    }
  }
}
</script>

<style lang='less' scoped>
.van-nav-bar.van-hairline--bottom {
  background-color: #3296fa;
  .van-nav-bar__title.van-ellipsis {
    color: #fff;
  }
}
.login-phone {
  font-size: 20px;
}
.mycode {
  background-color: #eee;
  color: #aaa;
}
.login-btn {
  margin: 20px;
  .l-btn {
    border-radius: 5px;
  }
}
</style>
