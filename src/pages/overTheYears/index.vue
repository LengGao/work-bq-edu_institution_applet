<template>
  <scroll-view scroll-y class="over-years" @scrolltolower="onScrolltolower">
    <image class="b-img" src="../../static/over-year-background.png"></image>
    <view class="over-years-header"> </view>
    <view class="question-list" v-if="list.length">
      <view
        class="question-list-item"
        v-for="item in list"
        :key="item.id"
        @click="toConfig(item.id)"
      >
        <view class="question-info">
          <view class="question-info-title">
            <text class="iconfont">&#xe61e;</text>
            <view class="title van-ellipsis">{{ item.chapter_name }}</view>
          </view>
          <view class="question-info-date">
            <text class="date">{{ item.create_time || "--" }}</text>
            <text
              ><text class="number">{{ item.people_num || 0 }}</text
              >人做过</text
            >
          </view>
        </view>
        <view>
          <text class="iconfont">&#xe66b;</text>
        </view>
      </view>
    </view>
    <NoData top="40%" v-else />
  </scroll-view>
</template>
<script>
import { getRealTestPapers } from "@/api/index";
import NoData from "@/components/noData";
export default {
  name: "overYears",
  components: {
    NoData,
  },
  data() {
    return {
      list: [],
      total: 0,
      page: 1,
      isOnload: false,
    };
  },
  onShow() {
    !this.isOnload &&
      setTimeout(() => {
        this.getRealTestPapers();
      }, 500);
    this.isOnload = false;
  },
  onLoad() {
    this.getRealTestPapers();
    this.isOnload = true;
  },
  methods: {
    toConfig(chapterId) {
      uni.navigateTo({
        url: `/pages/testExamConfig/index?type=2&chapterId=${chapterId}`,
      });
    },
    onScrolltolower() {
      if (this.list.length < this.total) {
        this.page++;
        this.getRealTestPapers();
      }
    },
    async getRealTestPapers() {
      const data = {
        page: this.page,
      };
      const res = await getRealTestPapers(data);
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
.over-years {
  height: 100%;
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