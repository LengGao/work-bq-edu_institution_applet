<template>
  <view class="header">
    <view class="status status--success">正确</view>
    <view class="status status--error">错误</view>
    <view class="status status--none">未回答</view>
  </view>
</template>
<script>
export default {
  name: "header",
  props: {
    type: {
      type: String,
      default: "primary",
    },
  },
};
</script>
<style lang="less" scoped>
@import "@/styles/var";
.header {
  .flex-c();
  padding: 20rpx;
  border-bottom: @border;
  .status {
    width: calc(100% / 3);
    .flex-c();
    justify-content: center;
    &::before {
      content: "";
      width: 32rpx;
      height: 32rpx;
      border-radius: 50%;
      margin-right: 16rpx;
    }
    &--success::before {
      background-color: @success;
    }
    &--error::before {
      background-color: @error;
    }
    &--none::before {
      background-color: @none;
    }
  }
}
</style>