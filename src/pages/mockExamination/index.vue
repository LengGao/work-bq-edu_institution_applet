<template>
  <view class="mock-examination">
    <image class="b-img" src="../../static/mock-background.png"></image>
    <view class="mock-examination-header"> </view>
    <scroll-view class="record-list" scroll-y @scrolltolower="onScrolltolower">
      <view class="record-title">模拟考试历史记录</view>
      <view class="record-list-item" v-for="item in list" :key="item.id">
        <view class="record-info">
          <view class="record-info-title">
            <text class="iconfont">&#xe8aa;</text>
            <view class="title van-ellipsis">{{ item.title }}</view>
          </view>
          <view class="record-info-date">
            <text class="date">{{ item.create_time }}</text>
            <text
              >得分：<text class="number">{{ item.mark }}</text></text
            >
          </view>
        </view>
        <!-- <view>
          <text class="iconfont">&#xe66b;</text>
        </view> -->
      </view>
      <NoData top="50%" v-if="!list.length">暂无考试记录</NoData>
    </scroll-view>
    <view class="footer">
      <view class="btn-primary" @click="toTestConfig">智能组卷</view>
    </view>
  </view>
</template>
<script>
import { getMockExamHistory } from "@/api/index";
import NoData from "@/components/noData";
export default {
  name: "mockExamination",
  components: {
    NoData,
  },
  data() {
    return {
      list: [],
      total: 0,
      page: 1,
    };
  },
  onShow() {
    this.getMockExamHistory();
  },
  methods: {
    toTestConfig() {
      uni.navigateTo({
        url: `/pages/testExamConfig/index?type=1`,
      });
    },
    onScrolltolower() {
      if (this.list.length < this.total) {
        this.page++;
        this.getMockExamHistory();
      }
    },
    async getMockExamHistory() {
      const data = {
        page: this.page,
      };
      const res = await getMockExamHistory(data);
      if (this.page === 1) {
        this.list = res.data.list;
        this.total = res.data.total;
      } else {
        this.list = this.list.concat(res.data.list);
      }
    },
  },
};
</script>
<style lang="less" scoped>
@import "@/styles/var";
.mock-examination {
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
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
  .record-list {
    border-radius: 16rpx;
    box-shadow: 0 0 10rpx rgba(93, 207, 255, 0.3);
    padding: 20rpx 30rpx;
    background-color: #fff;
    flex: 1;
    box-sizing: border-box;
    overflow: hidden;
    .record-title {
      color: @primary;
      font-weight: bold;
      padding: 34rpx 0;
      border-bottom: 1rpx solid #f5f5f5;
    }
    &-item {
      border-bottom: 1rpx solid #f5f5f5;
      .flex-c();
      justify-content: space-between;
      padding: 20rpx 0;
      &:active {
        opacity: 0.8;
      }
      .record-info {
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
  .footer {
    width: 100%;
    padding: 40rpx 0 80rpx;
    background-color: #fff;
    margin-top: auto;
    .flex-c();
    justify-content: center;
    .btn-primary {
      color: #fff;
      background-color: @primary;
      padding: 16rpx 0;
      width: 420rpx;
      text-align: center;
      border-radius: 50rpx;
      font-size: 36rpx;
      &:not(:first-child) {
        margin-left: 20rpx;
      }
      &:active {
        opacity: 0.8;
      }
    }
  }
}
</style>