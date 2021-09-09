<template>
  <div class="test-results">
    <view class="results-header">
      <view class="score">
        <image class="score-img" src="../../static/icon-water.png"></image>
        <view class="score-title">最终得分</view>
        <view class="score-value">99.99</view>
      </view>
      <view class="topics">
        <view class="topics-number topics-number--success">
          <text class="title">正确题数：</text>
          <text class="number">60000</text>
        </view>
        <view class="topics-number topics-number--error">
          <text class="title">错误题数：</text>
          <text class="number">60</text>
        </view>
        <view class="topics-number topics-number--none">
          <text class="title">未答题数：</text>
          <text class="number">60</text>
        </view>
      </view>
    </view>
    <view class="results-container">
      <Title>单选题</Title>
      <view class="circular-list">
        <Circular>1</Circular>
        <Circular type="primary">2</Circular>
        <Circular type="success">3</Circular>
        <Circular type="error">4</Circular>
        <Circular>5</Circular>
        <Circular>6</Circular>
        <Circular type="success">3</Circular>
        <Circular type="error">4</Circular>
        <Circular>5</Circular><Circular type="success">3</Circular>
        <Circular type="error">4</Circular>
        <Circular>5</Circular><Circular type="success">3</Circular>
        <Circular type="error">4</Circular>
        <Circular>5</Circular>
      </view>
      <Title>多选题</Title>
      <view class="circular-list">
        <Circular>1</Circular>
        <Circular type="primary">2</Circular>
        <Circular type="success">3</Circular>
        <Circular type="error">4</Circular>
        <Circular>5</Circular>
        <Circular>6</Circular>
        <Circular type="success">3</Circular>
        <Circular type="error">4</Circular>
        <Circular>5</Circular><Circular type="success">3</Circular>
        <Circular type="error">4</Circular>
        <Circular>5</Circular><Circular type="success">3</Circular>
        <Circular type="error">4</Circular>
        <Circular>5</Circular>
      </view>
    </view>
  </div>
</template>
<script>
import Title from "@/components/title";
import Circular from "@/components/circular";
export default {
  name: "testResults",
  components: {
    Title,
    Circular,
  },
};
</script>
<style lang="less" scoped>
@import "@/styles/var";
.test-results {
  padding: 40rpx;
  .results-header {
    padding: 35rpx 20rpx 35rpx 35rpx;
    border-radius: 16rpx;
    box-shadow: 0 0 10rpx rgba(93, 207, 255, 0.3);
    display: flex;
    margin-bottom: 60rpx;
    .score {
      width: 266rpx;
      height: 230rpx;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      color: #fff;
      &-img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
      }
      &-title {
        color: @primary;
        margin-top: 10rpx;
      }
      &-value {
        font-size: 60rpx;
        margin-bottom: 20rpx;
      }
    }
    .topics {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 1;
      margin-left: 20rpx;
      &-number {
        .flex-c();
        color: #999999;
        font-size: 30rpx;
        padding-bottom: 20rpx;
        border-bottom: 1rpx solid #e3e3e3;
        .title {
          margin-left: 16rpx;
        }
        &::before {
          content: "";
          width: 32rpx;
          height: 32rpx;
          .radius();
        }
        &--success {
          &::before {
            background-color: @success;
          }
          .number {
            color: @success;
          }
        }
        &--error {
          &::before {
            background-color: @error;
          }
          .number {
            color: @error;
          }
        }
        &--none {
          &::before {
            background-color: @none;
          }
        }
      }
    }
  }
  .results-container {
    .circular-list {
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>