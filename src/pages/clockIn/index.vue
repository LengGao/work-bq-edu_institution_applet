<template>
  <div class="clock-in">
    <image class="b-img" src="../../static/clock-in-background.png"></image>
    <view class="clock-in-header">
      <view class="date">{{ getNowFormatDate() }}</view>
      <view class="day">{{ getCurrentDay() }}</view>
    </view>
    <view class="clock-in-container">
      <view class="card">
        <view class="clock-in-data">
          <view class="clock-in-data-item">
            <view class="value">12<text class="unit">天</text></view>
            <view class="title">累计打卡天数</view>
          </view>
          <view class="clock-in-data-item">
            <view class="value">15:30</view>
            <view class="title">平均打卡用时</view>
          </view>
          <view class="clock-in-data-item">
            <view class="value">68<text class="unit">人</text></view>
            <view class="title">今日打卡人数</view>
          </view>
        </view>
        <view class="card-center">
          <view class="clock-in-btn">
            <!-- <text>打卡</text> -->
            <text class="title">正确率</text>
            <text class="value">60<text class="unit">%</text></text>
          </view>
        </view>
        <view class="card-bottom">
          <!-- <view>xxxxx每天陪你进步一点点~~</view> -->
          <view class="link">今天打卡成功，查看报告解析>>></view>
        </view>
      </view>
      <view class="desc">
        <view class="desc-title">———— 打卡说明 ————</view>
        <view class="desc-item">每天只能打卡一次，00:00更新数据</view>
        <view class="desc-item">每次推荐一个知识点，包括15个题目</view>
        <view class="desc-item">题目均为单选题，提交打卡后可以查看解析</view>
      </view>
    </view>
  </div>
</template>
<script>
export default {
  name: "clockIn",
  methods: {
    onClick(e) {
      this.$emit("click", e);
    },
    getCurrentDay() {
      var myDate = new Date();
      var days = myDate.getDay();
      switch (days) {
        case 1:
          days = "星期一";
          break;
        case 2:
          days = "星期二";
          break;
        case 3:
          days = "星期三";
          break;
        case 4:
          days = "星期四";
          break;
        case 5:
          days = "星期五";
          break;
        case 6:
          days = "星期六";
          break;
        case 0:
          days = "星期日";
          break;
      }
      return days;
    },
    getNowFormatDate() {
      var date = new Date();
      var seperator1 = "/";
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      var currentdate = year + seperator1 + month + seperator1 + strDate;
      return currentdate;
    },
  },
};
</script>
<style lang="less" scoped>
@import "@/styles/var";
.clock-in {
  .b-img {
    position: absolute;
    left: 0;
    top: -120rpx;
    width: 100%;
    height: 408rpx;
    z-index: -1;
  }
  &-header {
    padding: 40rpx 30rpx 0;
    color: #fff;
  }
  &-container {
    padding: 30rpx;
    .card {
      border-radius: 16rpx;
      box-shadow: 0 0 10rpx rgba(93, 207, 255, 0.3);
      padding: 20rpx;
      background-color: #fff;
      text-align: center;
      .clock-in-data {
        display: flex;
        align-items: center;
        padding-top: 50rpx;
        &-item {
          flex: 1;
          position: relative;
          .value {
            font-size: 50rpx;
            color: @primary;
            .unit {
              font-size: 24rpx;
            }
          }
          .title {
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
      &-center {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 70rpx 0 40rpx;
        .clock-in-btn {
          width: 220rpx;
          height: 220rpx;
          border-radius: 50%;
          font-size: 50rpx;
          color: #fff;
          box-sizing: border-box;
          border: 10rpx solid #b9e2ff;
          background-color: @primary;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .title {
            font-size: 28rpx;
          }
          .value {
            font-size: 70rpx;
            .unit {
              font-size: 28rpx;
            }
          }

          &:active {
            opacity: 0.7;
          }
        }
      }
      &-bottom {
        font-size: 24rpx;
        margin-bottom: 70rpx;
        .link {
          color: @primary;
          text-decoration: underline;
          &:active {
            opacity: 0.7;
          }
        }
      }
    }
    .desc {
      color: #999;
      font-size: 28rpx;
      padding: 20rpx 0;
      &-title {
        text-align: center;
        padding: 40rpx 0;
      }
      &-item {
        display: flex;
        align-items: center;
        line-height: 60rpx;
        &::before {
          content: "";
          width: 8rpx;
          height: 8rpx;
          background-color: #999;
          .radius();
          margin-right: 10rpx;
        }
      }
    }
  }
}
</style>