<template>
  <view class="mock-examination">
    <van-nav-bar
      @click-left="goBack"
      :border="false"
      custom-class="custom-nav-bar"
      fixed
    >
      <van-icon name="arrow-left" size="40rpx" color="#fff" slot="left" />
    </van-nav-bar>
    <image class="b-img" src="../../static/mock-background.png"></image>
    <view class="mock-examination-content">
      <scroll-view
        class="record-list"
        scroll-y
        @scrolltolower="onScrolltolower"
      >
        <view class="record-title">模拟考试历史记录</view>
        <block v-if="list.length">
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
        </block>
        <NoData top="35%" v-else>暂无考试记录</NoData>
      </scroll-view>
      <view class="footer">
        <view class="btn-primary" @click="toTestConfig">智能组卷</view>
      </view>
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
/deep/.custom-nav-bar {
  background-color: inherit;
  .van-nav-bar__left {
    left: 18rpx;
  }
}
.mock-examination {
  height: 100%;
  .b-img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 450rpx;
    z-index: -1;
  }
  &-content {
    position: relative;
    top: 430rpx;
    left: 0;
    height: calc(100% - 430rpx);
    border-radius: 16rpx;
    background-color: #fff;
  }
  .record-list {
    height: calc(100% - 140rpx);
    border-radius: 16rpx;
    padding: 20rpx 0;
    background-color: #fff;
    box-sizing: border-box;
    overflow: hidden;
    .record-title {
      color: @primary;
      font-weight: bold;
      padding: 34rpx 30rpx;
      border-bottom: 1rpx solid #f5f5f5;
    }
    &-item {
      margin: 0 30rpx;
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
    padding: 20rpx 0 40rpx;
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