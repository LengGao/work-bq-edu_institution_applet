<template>
  <div class="circular" :class="className" @click="onClick"><slot></slot></div>
</template>
<script>
export default {
  name: "circular",
  props: {
    type: {
      type: String,
      default: "none",
    },
  },
  computed: {
    className() {
      return `circular--${this.type}`;
    },
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>
<style lang="less" scoped>
@import "@/styles/var";
.circular {
  width: 80rpx;
  height: 80rpx;
  text-align: center;
  line-height: 80rpx;
  background-color: #eee;
  margin: 20rpx 25rpx;
  .radius();
  &--success {
    background-color: @success;
    color: #fff;
  }
  &--error {
    background-color: @error;
    color: #fff;
  }
  &--primary {
    background-color: @primary;
    color: #fff;
  }
  &:active {
    opacity: 0.8;
  }
}
</style>