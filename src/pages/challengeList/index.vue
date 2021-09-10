<template>
  <div class="challenge-list">
    <image class="b-img" src="../../static/trophy.png"></image>
    <view class="challenge-list-header">
      <view class="title">刷题挑战榜</view>
      <view class="date">更新时间：2020-04-27 00:00</view>
    </view>
    <view class="challenge-list-container">
      <view class="list-header">
        <view class="ranking">排名</view>
        <view class="name">姓名</view>
        <view class="score">得分</view>
        <view class="timeuse">用时</view>
      </view>
      <view class="list-content">
        <view class="list-item" v-for="(item, index) in 100" :key="item">
          <view class="ranking">
            <image
              class="icon"
              v-if="index === 0"
              src="../../static/1@2x.png"
            ></image>
            <image
              class="icon"
              v-else-if="index === 1"
              src="../../static/2@2x.png"
            ></image>
            <image
              class="icon"
              v-else-if="index === 2"
              src="../../static/3@2x.png"
            ></image>
            <text v-else class="text">{{ index + 1 }}</text>
          </view>
          <view class="name">
            <image
              class="avatar"
              src="https://tinypng.com/images/panda-chewing.png"
            ></image>
            <text class="text">李小南</text>
          </view>
          <view class="score">得分</view>
          <view class="timeuse">用时</view>
        </view>
      </view>
    </view>
    <view class="challenge-list-footer">
      <view class="title">我的成绩</view>
      <view class="info">
        <image
          class="avatar"
          src="https://tinypng.com/images/panda-chewing.png"
        ></image>
        <view>
          <view class="user-name">张小北</view>
          <view class="user-value">
            <!-- <text>今天还没任何战绩</text> -->
            <text>
              <text>排名:</text>
              <text class="number">20</text>
              <text>得分:</text>
              <text class="number">72</text>
            </text>
          </view>
        </view>
      </view>
      <view class="btn-primary">开始挑战</view>
    </view>
  </div>
</template>
<script>
export default {
  name: "challengeList",

  methods: {
    onClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>
<style lang="less" scoped>
@import "@/styles/var";
.challenge-list {
  padding-bottom: 180rpx;
  .b-img {
    position: absolute;
    right: 0;
    top: 30rpx;
    width: 445rpx;
    height: 265rpx;
  }
  &-header {
    background-color: @primary;
    padding: 80rpx 50rpx;
    color: #fff;
    .title {
      font-size: 76rpx;
    }
    .date {
      font-size: 26rpx;
    }
  }
  .challenge-list-container {
    border-radius: 16rpx;
    box-shadow: 0 0 10rpx rgba(93, 207, 255, 0.3);
    padding: 20rpx 30rpx;
    background-color: #fff;
    position: relative;
    z-index: 10;
    transform: translateY(-20rpx);
    .list-header {
      display: flex;
      align-items: center;
      text-align: center;
      color: #999999;
      font-size: 28rpx;
      padding-bottom: 37rpx;
      padding-top: 16rpx;
    }
    .ranking {
      flex: 1.5;
      text-align: left;
      .icon {
        width: 56rpx;
        height: 60rpx;
      }
      .text {
        padding-left: 20rpx;
        color: #999999;
      }
    }
    .name {
      flex: 3;
      text-align: left;
      display: flex;
      align-items: center;
      .avatar {
        width: 80rpx;
        height: 80rpx;
        background-color: #ccc;
        .radius();
        margin-right: 20rpx;
      }
    }
    .score {
      flex: 2;
    }
    .timeuse {
      flex: 2;
    }
    .list-content {
      .list-item {
        display: flex;
        align-items: center;
        text-align: center;
        height: 120rpx;
        box-sizing: border-box;
      }
    }
  }
  .challenge-list-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 120rpx;
    background-color: #fff;
    border-top: @border;
    .flex-c();
    justify-content: space-between;
    z-index: 20;
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
    .title {
      color: @primary;
      width: 62rpx;
      margin-left: 30rpx;
    }
    .info {
      display: flex;
      align-items: center;
      .avatar {
        width: 80rpx;
        height: 80rpx;
        background-color: #ccc;
        .radius();
        margin-right: 20rpx;
      }
      .user-name {
        font-size: 32rpx;
      }
      .user-value {
        color: #999999;
        font-size: 28rpx;
        .number {
          color: @primary;
          margin-right: 10rpx;
        }
      }
    }
    .btn-primary {
      color: #fff;
      background-color: @primary;
      padding: 6rpx 0 10rpx;
      width: 200rpx;
      text-align: center;
      border-radius: 50rpx;
      font-size: 32rpx;
      margin-right: 44rpx;
      &:active {
        opacity: 0.8;
      }
    }
  }
}
</style>