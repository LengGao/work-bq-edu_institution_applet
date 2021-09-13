<template>
  <view class="answer-bar">
    <view class="answer-bar-item" @click="onClickPrev">
      <text class="iconfont">&#xe61d;</text>
      <view class="bar-text">上一题</view>
    </view>
    <view class="answer-bar-item" @click="onClickCard">
      <text class="iconfont">&#xe6b0;</text>
      <view class="bar-text">答题卡</view>
    </view>
    <view class="answer-bar-item" @click="onClickCollect">
      <text class="iconfont" v-show="isCollection">&#xe601;</text>
      <text class="iconfont" v-show="!isCollection">&#xe630;</text>
      <view class="bar-text">收藏</view>
    </view>
    <view class="answer-bar-item" v-if="showTime" @click="onClickNext">
      <text class="iconfont">&#xe602;</text>
      <view class="bar-text"><slot></slot></view>
    </view>
    <view class="answer-bar-item" @click="onClickNext">
      <text class="iconfont">&#xe65c;</text>
      <view class="bar-text">下一题</view>
    </view>
  </view>
</template>
<script>
export default {
  name: "answerBar",
  props: {
    isCollection: {
      type: Boolean,
      default: false,
    },
    showTime: {
      type: Boolean,
      default: false,
    },
  },
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