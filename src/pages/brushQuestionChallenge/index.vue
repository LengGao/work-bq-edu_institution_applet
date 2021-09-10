<template>
  <div class="brush-question-challenge">
    <image class="challenge-logo" src="../../static/shuatitiaozhan.png" />
    <view class="challenge-btns">
      <view class="btn-primary plain" @click="toRankList">刷题挑战榜</view>
      <view class="btn-primary">开始挑战赛</view>
    </view>
    <view class="challenge-desc">
      <view class="desc-title">———— 刷题挑战说明 ————</view>
      <view class="desc-item">每天可以多次刷题挑战，00:00更新挑战榜</view>
      <view class="desc-item">每次挑战包括30个题目，涉及多个知识点</view>
      <view class="desc-item">挑战题型多样，完成后可以查看解析</view>
    </view>
  </div>
</template>
<script>
export default {
  name: "brushQuestionChallenge",
  methods: {
    toRankList() {
      uni.redirectTo({
        url: `/pages/challengeList/index`,
      });
    },
  },
};
</script>
<style lang="less" scoped>
@import "@/styles/var";
.brush-question-challenge {
  height: 100%;
  background-color: @primary;
  padding: 31rpx;
  color: #fff;
  box-sizing: border-box;
  .challenge-logo {
    width: 100%;
    height: 473rpx;
    margin-bottom: 79rpx;
  }
  .challenge-btns {
    .flex-c();
    flex-direction: column;
    justify-content: center;
    .btn-primary {
      color: @primary;
      background-color: #fff;
      padding: 16rpx 0;
      width: 500rpx;
      text-align: center;
      border-radius: 50rpx;
      font-size: 36rpx;
      margin-bottom: 50rpx;
      &:active {
        opacity: 0.8;
      }
      &.plain {
        background-color: @primary;
        border: 1px solid #fff;
        padding: 14rpx 0;
        color: #fff;
      }
    }
  }
  .challenge-desc {
    color: #fff;
    font-size: 28rpx;
    .desc-title {
      text-align: center;
      padding: 40rpx 0;
    }
    .desc-item {
      padding-left: 70rpx;
      display: flex;
      align-items: center;
      line-height: 60rpx;
      &::before {
        content: "";
        width: 8rpx;
        height: 8rpx;
        background-color: #fff;
        .radius();
        margin-right: 10rpx;
      }
    }
  }
}
</style>