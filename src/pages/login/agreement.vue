<template>
  <view class="agreement"> 123 </view>
</template>
<script>
export default {
  name: "agreement",
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
.agreement {
  padding: 30rpx;
}
</style>