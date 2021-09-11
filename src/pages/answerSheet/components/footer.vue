<template>
  <div class="footer">
    <!-- <view class="btn btn--plain">继续练习</view> -->
    <view class="btn" v-if="model == 1" @click="handleClick">继续练习</view>
  </div>
</template>
<script>
export default {
  name: "footer",
  props: {
    model: {
      type: [String, Number],
      default: 1,
    },
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>
<style lang="less" scoped>
@import "@/styles/var";
.footer {
  padding: 0 20rpx;
  border-top: @border;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100rpx;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  .btn {
    color: #fff;
    background-color: @primary;
    padding: 10rpx 0;
    width: 300rpx;
    text-align: center;
    border-radius: 10rpx;
    &:not(:first-child) {
      margin-left: 20rpx;
    }
    &:active {
      opacity: 0.8;
    }
    &--plain {
      background-color: #fff;
      border: 1px solid @primary;
      padding: 8rpx 0;
      color: @primary;
    }
  }
}
</style>