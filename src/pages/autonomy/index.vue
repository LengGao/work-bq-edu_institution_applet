<template>
  <div class="autonomy">
    <image class="b-img" src="../../static/autonomy-background.png"></image>
    <view class="autonomy-header"> </view>
    <view class="question-list">
      <view class="question-list-item" v-for="item in 100" :key="item">
        <view class="question-info">
          <view class="question-info-title">
            <text class="iconfont">&#xe61e;</text>
            <view class="title van-ellipsis"
              >第2章 信息系统集成及集成及集成及集成及服务管理</view
            >
          </view>
          <view class="question-info-date">
            <text class="date">2021-20-20</text>
            <text><text class="number">90</text>人做过</text>
          </view>
        </view>
        <view>
          <text class="iconfont">&#xe66b;</text>
        </view>
      </view>
    </view>
  </div>
</template>
<script>
export default {
  name: "autonomy",

  methods: {
    onClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>
<style lang="less" scoped>
@import "@/styles/var";
.autonomy {
  .b-img {
    position: absolute;
    left: 0;
    top: -120rpx;
    width: 100%;
    height: 450rpx;
    z-index: -1;
  }
  &-header {
    height: 280rpx;
  }
  .question-list {
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
      .question-info {
        overflow: hidden;
        &-title {
          color: #666;
          .flex-c();
          .title {
            margin-left: 20rpx;
          }
        }
        &-date {
          .flex-c();
          color: #cccccc;
          font-size: 24rpx;
          .date {
            margin-left: 54rpx;
            margin-right: 20rpx;
          }
          .number {
            color: @primary;
          }
        }
      }
    }
  }
}
</style>