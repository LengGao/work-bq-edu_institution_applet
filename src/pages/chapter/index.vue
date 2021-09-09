<template>
  <div class="chapter">
    <image class="b-img" src="../../static/chapter-background.png"></image>
    <view class="chapter-header">
      <view class="info-item">
        <view class="info-item-value">5/18</view>
        <view class="info-item-title">章节进度</view>
      </view>
      <view class="info-item">
        <view class="info-item-value">224</view>
        <view class="info-item-title">做题数</view>
      </view>
      <view class="info-item">
        <view class="info-item-value">68.5<text class="per-cent">%</text></view>
        <view class="info-item-title">准确率</view>
      </view>
    </view>
    <view class="chapter-container">
      <view class="chapter-list">
        <view class="chapter-list-item" v-for="item in 100" :key="item">
          <view class="chapter-info">
            <view class="chapter-info-title">
              <text class="iconfont">&#xe7ed;</text>
              <view class="title van-ellipsis"
                >第2章 信息系统集成及集成及集成及集成及服务管理</view
              >
            </view>
            <view class="chapter-info-progress">
              <progress
                class="progress"
                percent="80"
                color="#10AEFF"
                active
                stroke-width="3"
              />
              <text class="number">50/90</text>
            </view>
          </view>
          <view>
            <text class="iconfont">&#xe66b;</text>
          </view>
        </view>
      </view>
    </view>
  </div>
</template>
<script>
export default {
  name: "chapter",

  methods: {
    onClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>
<style lang="less" scoped>
@import "@/styles/var";
.chapter {
  .b-img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 278rpx;
    z-index: -1;
  }
  &-header {
    display: flex;
    padding-top: 40rpx;
    .info-item {
      flex: 1;
      flex-shrink: 0;
      text-align: center;
      position: relative;
      color: #fff;

      &-value {
        font-weight: bold;
        font-size: 50rpx;
        .per-cent {
          font-size: 24rpx;
        }
      }
      &-title {
        font-size: 24rpx;
      }
      &:not(:last-child) {
        &::after {
          position: absolute;
          right: 0;
          top: 20rpx;
          content: "";
          background-color: #eee;
          height: 68rpx;
          width: 1rpx;
        }
      }
    }
  }
  &-container {
    padding: 30rpx;
  }
  &-list {
    border-radius: 16rpx;
    box-shadow: 0 0 10rpx rgba(93, 207, 255, 0.3);
    padding: 20rpx 30rpx;
    background-color: #fff;
    &-item {
      border-bottom: 1rpx solid #f5f5f5;
      .flex-c();
      justify-content: space-between;
      padding: 20rpx 0;
      &:active {
        opacity: 0.8;
      }
      .chapter-info {
        overflow: hidden;
        &-title {
          color: #666;
          .flex-c();
          .title {
            margin-left: 20rpx;
          }
        }
        &-progress {
          .flex-c();
          .progress {
            width: 150rpx;
            margin-left: 54rpx;
          }
          .number {
            color: #cccccc;
            font-size: 24rpx;
            margin-left: 10rpx;
          }
        }
      }
    }
  }
}
</style>