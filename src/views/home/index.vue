<template>
  <div>
    <!-- 首页导航 -->
    <van-nav-bar title="首页" />
    <!-- tab栏 -->
    <van-tabs class="mytab-tabs">
      <van-tab v-for="index in 8" :key="index" :title="'标签 ' + index">
        内容 {{ index }}
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {}
</script>

<style lang='less' scoped>
.van-nav-bar.van-hairline--bottom {
    background-color: #3296fa;
      .van-nav-bar__title.van-ellipsis {
    color: #fff;
}
}
</style>
