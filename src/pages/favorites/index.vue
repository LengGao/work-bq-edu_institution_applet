<template>
  <view class="favorites">
    <van-notice-bar
      left-icon="warning-o"
      mode="closeable"
      text="答对一次后自动移除错题"
    />
    <view class="favorites-list">
      <view class="favorites-list-item" v-for="item in 100" :key="item">
        <view class="title">第1章 信息化知识(15)</view>
        <view class="actions">
          <view class="btn-primary plain">背题</view>
          <view class="btn-primary">重练</view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  name: "favorites",
};
</script>
<style lang="less" scoped>
@import "@/styles/var";
.favorites {
  &-switch {
    height: 80rpx;
    box-sizing: border-box;
    .flex-c();
    justify-content: space-between;
  }
  .favorites-list {
    padding: 0 30rpx;
    &-item {
      height: 100rpx;
      box-sizing: border-box;
      border-bottom: 1rpx solid #eee;
      color: #666;
      font-size: 28rpx;
      .flex-c();
      justify-content: space-between;
      .actions {
        .flex-c();
        justify-content: center;
        .btn-primary {
          color: #fff;
          background-color: @primary;
          padding: 2rpx 0 4rpx;
          width: 90rpx;
          text-align: center;
          border-radius: 50rpx;
          font-size: 24rpx;
          &:not(:first-child) {
            margin-left: 20rpx;
          }
          &:active {
            opacity: 0.8;
          }
          &.plain {
            background-color: #fff;
            border: 1px solid @primary;
            padding-bottom: 1rpx;
            color: @primary;
          }
        }
      }
    }
  }
}
</style>