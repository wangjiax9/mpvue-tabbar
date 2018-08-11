<template>
<div id="app">
  <router-view></router-view>
  <div class="nav">
    <a class="nav-item" href="/pages/news/list">
      <div class="nav-title">资讯</div>
    </a>
    <a class="nav-item" href="/pages/quanzi/list">
      <div class="nav-title">圈子</div></a>
    </div>
</div>
</template>
<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log('app created and cache logs by setStorageSync')
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
.nav {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 55px;
  width: 100%;
  display: flex;
  background-color: #fff;
}
.nav-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.nav-icon {
  width: 30px;
  height: 30px;
}
.nav-title {
  color: #aaa;
  font-size: 12px;
  &.active {
    color: #999;
  }
}
</style>
