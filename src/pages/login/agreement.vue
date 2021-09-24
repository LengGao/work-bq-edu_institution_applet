<template>
  <view class="agreement">
    <view class="content">
      <u-parse :content="appInfo.treaty || '无'" />
    </view>
    <button class="btn" type="primary" @click="back">我已知悉</button>
  </view>
</template>
<script>
import uParse from "@/components/gaoyia-parse/parse.vue";
import { mapGetters } from "vuex";
export default {
  name: "agreement",
  components: {
    uParse,
  },
  computed: {
    ...mapGetters(["appInfo"]),
  },
  methods: {
    back() {
      uni.navigateBack();
    },
  },
};
</script>
<style lang="less" scoped>
@import "@/styles/var";
.agreement {
  font-size: 28rpx;
  line-height: 1.5;
  height: 100%;
  box-sizing: border-box;
  .content {
    padding: 30rpx;
    height: calc(100% - 60px - 60rpx);
    overflow-y: auto;
  }
  .btn {
    width: 500rpx;
    margin-top: 20rpx;
  }
}
</style>