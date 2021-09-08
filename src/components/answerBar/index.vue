<template>
  <view class="answer-bar">
    <view class="answer-bar-item" @click="onClickPrev">
      <view class="iconfont">&#xe61d;</view>
      <view class="bar-text">上一题</view>
    </view>
    <view class="answer-bar-item" @click="onClickCard">
      <view class="iconfont">&#xe6b0;</view>
      <view class="bar-text">答题卡</view>
    </view>
    <view class="answer-bar-item" @click="onClickCollect">
      <view class="iconfont">&#xe630;</view>
      <view class="bar-text">收藏</view>
    </view>
    <view class="answer-bar-item" @click="onClickNext">
      <view class="iconfont">&#xe65c;</view>
      <view class="bar-text">下一题</view>
    </view>
  </view>
</template>
<script>
export default {
  name: "answerBar",
  methods: {
    onClickNext(e) {
      this.$emit("next", e);
    },
    onClickCollect(e) {
      this.$emit("collect", e);
    },
    onClickCard(e) {
      this.$emit("card", e);
    },
    onClickPrev(e) {
      this.$emit("prev", e);
    },
  },
};
</script>
<style lang="less" scoped>
@import "@/styles/var";
.answer-bar {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100rpx;
  border-top: @border;
  font-size: 24rpx;
  text-align: center;
  background: #efefef;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
</style>