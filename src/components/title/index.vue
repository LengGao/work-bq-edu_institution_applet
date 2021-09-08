<template>
  <div class="title" :style="{ color }"><slot></slot></div>
</template>
<script>
export default {
  name: "title",
  props: {
    color: {
      type: String,
      default: "#999",
    },
  },
};
</script>
<style lang="less" scoped>
@import "@/styles/var";
.title {
  color: #999;
  font-size: 32rpx;
  font-weight: bold;
  margin: 26rpx 0;
  .flex-c();
  &::before {
    content: "";
    background-color: @primary;
    width: 4rpx;
    height: 32rpx;
    margin-right: 10rpx;
  }
}
</style>