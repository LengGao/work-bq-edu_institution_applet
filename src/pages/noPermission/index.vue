<template>
  <div class="no-permission">
    <image class="img" src="../../static/no-permission.png"></image>
    <view class="text">暂无访问权限，请联系管理员</view>
  </div>
</template>
<script>
export default {
  name: "noPermission",
};
</script>
<style lang="less" scoped>
@import "@/styles/var";
.no-permission {
  position: absolute;
  left: 0;
  top: 30%;
  width: 100%;
  text-align: center;
  .img {
    width: 380rpx;
    height: 300rpx;
  }
  .text {
    color: #999999;
  }
}
</style>