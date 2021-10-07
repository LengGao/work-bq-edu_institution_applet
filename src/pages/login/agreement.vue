<template>
  <view class="agreement">
    <view class="content">
      <u-parse :content="appInfo.treaty || '无'" />
    </view>
    <van-button
      class="btn"
      color="#199fff"
      round
      block
      plain
      type="info"
      @click="back"
      >我已知悉</van-button
    >
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
    /deep/.van-button--block {
      width: 500rpx;
    }
  }
}
</style>