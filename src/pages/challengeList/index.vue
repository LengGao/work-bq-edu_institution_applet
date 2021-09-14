<template>
  <scroll-view scroll-y class="challenge-list" @scrolltolower="onScrolltolower">
    <image class="b-img" src="../../static/trophy.png"></image>
    <view class="challenge-list-header">
      <view class="title">刷题挑战榜</view>
      <view class="date">更新时间：{{ getNowFormatDate("-") }} 00:00</view>
    </view>
    <view class="challenge-list-container">
      <view class="list-header">
        <view class="ranking">排名</view>
        <view class="name">姓名</view>
        <view class="score">得分</view>
        <view class="timeuse">用时</view>
      </view>
      <view class="list-content">
        <view
          class="list-item"
          v-for="(item, index) in rankList"
          :key="item.uid"
        >
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
            <image class="avatar" :src="item.user_img"></image>
            <text class="text van-ellipsis">{{ item.nickname }}</text>
          </view>
          <view class="score">{{ item.mark }}</view>
          <view class="timeuse">{{ item.use_time }}</view>
        </view>
      </view>
    </view>
    <view class="challenge-list-footer">
      <view class="title">我的成绩</view>
      <view class="info">
        <image class="avatar" :src="selfData.user_img"></image>
        <view>
          <view class="user-name">{{ selfData.nickname }}</view>
          <view class="user-value">
            <text v-if="selfData.is_challenge">
              <text>排名:</text>
              <text class="number">{{ selfData.rank }}</text>
              <text>得分:</text>
              <text class="number">{{ selfData.mark }}</text>
            </text>
            <text v-else>今天还没任何战绩</text>
          </view>
        </view>
      </view>
      <view class="btn-primary" @click="toAnswer">{{
        selfData.is_challenge ? "继续挑战" : "开始挑战"
      }}</view>
    </view>
    <NoData top="50%" v-if="!rankList.length" />
  </scroll-view>
</template>
<script>
import { getRankList, getSelfAchievement } from "@/api/index";
import { getNowFormatDate } from "@/utils/index";
import NoData from "@/components/noData";
export default {
  name: "challengeList",
  components: {
    NoData,
  },
  data() {
    return {
      getNowFormatDate,
      rankList: [],
      selfData: {
        nickname: "",
        user_img: "",
        is_challenge: 0,
        mark: 0,
        rank: 0,
      },
      page: 1,
      total: 0,
    };
  },
  onShow() {
    setTimeout(() => {
      this.getRankList();
      this.getSelfAchievement();
    }, 1000);
  },
  onLoad() {
    this.getRankList();
    this.getSelfAchievement();
  },
  methods: {
    toAnswer() {
      uni.redirectTo({
        url: `/pages/answer/index?title=刷题挑战&type=6`,
      });
    },
    onScrolltolower() {
      if (this.rankList.length < this.total) {
        this.page++;
        this.getRankList();
      }
    },
    async getSelfAchievement() {
      const res = await getSelfAchievement();
      this.selfData = res.data;
    },
    async getRankList() {
      const data = {
        page: this.page,
      };
      const res = await getRankList(data);
      if (this.page === 1) {
        this.rankList = res.data.list;
        this.total = res.data.total;
      } else {
        this.rankList = this.rankList.concat(res.data.list);
      }
    },
  },
};
</script>
<style lang="less" scoped>
@import "@/styles/var";
page {
  overflow: hidden;
  box-sizing: border-box;
}
.challenge-list {
  height: 100%;
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
      overflow: hidden;
      .avatar {
        width: 80rpx;
        height: 80rpx;
        background-color: #ccc;
        .radius();
        margin-right: 20rpx;
        flex-shrink: 0;
      }
    }
    .score {
      flex: 2;
    }
    .timeuse {
      flex: 2;
    }
    .list-content {
      padding-bottom: 122rpx;
      padding-bottom: calc(122rpx + constant(safe-area-inset-bottom));
      padding-bottom: calc(122rpx + env(safe-area-inset-bottom));
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
      width: 64rpx;
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