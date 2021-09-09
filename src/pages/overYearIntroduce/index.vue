<template>
  <div class="over-years-introduce">
    <view class="contaienr">
      <image class="b-img" src="../../static/introduce-background.png"></image>
      <view class="test-paper-name">2019上半年系统集成真题</view>
      <view class="desc">
        <text class="iconfont">&#xe602;</text>
        <text class="desc-title">考试时长：</text>
        <text class="desc-value">90分钟</text>
      </view>
      <view class="desc">
        <text class="iconfont">&#xe6aa;</text>
        <text class="desc-title">考试总分：</text>
        <text class="desc-value">90分</text>
      </view>
      <view class="desc">
        <text class="iconfont">&#xe6e5;</text>
        <text class="desc-title">及格分数：</text>
        <text class="desc-value">90分</text>
      </view>
      <view class="desc">
        <text class="iconfont">&#xe61b;</text>
        <text class="desc-title">题型分布：</text>
      </view>
      <view class="question-type">
        <view>单选题20题，一题1分</view>
        <view>多选题30题，一题2分</view>
        <view>判断题40题，一题1分</view>
        <view>填空题50题，一题2分</view>
        <view>简答题60题，一题1分</view>
        <view>案例分析20题，一题2分</view>
      </view>
    </view>
    <view class="btns">
      <view class="btn-primary plain">刷题模式</view>
      <view class="btn-primary">考试模式</view>
    </view>
  </div>
</template>
<script>
export default {
  name: "overYearsIntroduce",
  methods: {},
};
</script>
<style lang="less" scoped>
@import "@/styles/var";
.over-years-introduce {
  padding: 30rpx 32rpx 0 28rpx;
  .contaienr {
    position: relative;
    min-height: 800rpx;
    padding: 50rpx;
    .b-img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
    .test-paper-name {
      padding: 34rpx 0 25rpx;
      font-size: 32rpx;
      color: @primary;
      border-bottom: @border;
      font-weight: bold;
    }
    .desc {
      font-size: 28rpx;
      display: flex;
      align-items: center;
      padding: 17rpx 0;
      &-title {
        color: #666;
        margin-left: 14rpx;
      }
      &-value {
        color: @primary;
      }
    }
    .question-type {
      padding-left: 46rpx;
      color: @primary;
      font-size: 28rpx;
      line-height: 70rpx;
    }
  }
  .btns {
    margin-top: 100rpx;
    .flex-c();
    justify-content: center;
    .btn-primary {
      color: #fff;
      background-color: @primary;
      padding: 16rpx 0;
      width: 270rpx;
      text-align: center;
      border-radius: 50rpx;
      font-size: 36rpx;
      &:not(:first-child) {
        margin-left: 20rpx;
      }
      &:active {
        opacity: 0.8;
      }
      &.plain {
        background-color: #fff;
        border: 1px solid @primary;
        padding: 14rpx 0;
        color: @primary;
      }
    }
  }
}
</style>