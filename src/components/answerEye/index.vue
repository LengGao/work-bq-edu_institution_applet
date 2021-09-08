<template>
  <view
    class="answer-eye"
    :class="{ 'answer-eye--active': active }"
    @click="handleClick"
  >
    <view class="eye-btn">
      <text class="iconfont" v-show="!active">&#xe65f;</text>
      <text class="iconfont" v-show="active">&#xe600;</text>
      <text class="text">答案</text>
    </view>
  </view>
</template>
<script>
export default {
  name: "answerEye",
  data() {
    return {
      active: false,
    };
  },
  methods: {
    handleClick() {
      this.active = !this.active;
      this.$emit("change", this.active);
    },
  },
};
</script>
<style lang="less" scoped>
@import "@/styles/var";
.answer-eye {
  display: flex;
  justify-content: flex-end;
  font-size: 24rpx;
  .eye-btn {
    border: @border;
    padding: 6rpx 20rpx;
    border-radius: 10rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    .iconfont {
      margin-right: 10rpx;
    }
  }

  &--active {
    .eye-btn {
      border-color: @primary;
      color: @primary;
    }
  }
}
</style>