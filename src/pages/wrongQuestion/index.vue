<template>
  <view class="wrong-question">
    <van-notice-bar left-icon="warning-o" text="答对一次后自动移除错题" />
    <scroll-view
      scroll-y
      class="wrong-question-list"
      @scrolltolower="onScrolltolower"
    >
      <view
        class="wrong-question-list-item"
        v-for="item in list"
        :key="item.id"
      >
        <view class="title"
          >{{ item.chapter_name }}（{{ item.topic_num }}）</view
        >
        <view class="actions">
          <view
            class="btn-primary plain"
            @click="toAnswer(1, item.id, item.chapter_name)"
            >背题</view
          >
          <view
            class="btn-primary"
            @click="toAnswer(0, item.id, item.chapter_name)"
            >重练</view
          >
        </view>
      </view>
      <NoData v-if="!list.length" />
    </scroll-view>
  </view>
</template>
<script>
import NoData from "@/components/noData";
import { getFavoritesList } from "@/api/index";
export default {
  name: "wrongQuestion",
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
    this.getFavoritesList();
  },
  methods: {
    toAnswer(isAnalysis, chapterId, title) {
      uni.navigateTo({
        url: `/pages/answer/index?title=${title}&type=8&isAnalysis=${isAnalysis}&chapterId=${chapterId}`,
      });
    },
    onScrolltolower() {
      if (this.list.length < this.total) {
        this.page++;
        this.getFavoritesList();
      }
    },
    async getFavoritesList() {
      const data = {
        is_collection: 0,
        page: this.page,
      };
      const res = await getFavoritesList(data);
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
.wrong-question {
  height: 100%;
  .wrong-question-list {
    height: calc(100% - 40px);
    &-item {
      padding: 0 30rpx;
      height: 100rpx;
      box-sizing: border-box;
      border-bottom: 1rpx solid #eee;
      color: #666;
      font-size: 28rpx;
      .flex-c();
      justify-content: space-between;
      .actions {
        .flex-c();
        justify-content: center;
        .btn-primary {
          color: #fff;
          background-color: @primary;
          padding: 2rpx 0 4rpx;
          width: 90rpx;
          text-align: center;
          border-radius: 50rpx;
          font-size: 24rpx;
          &:not(:first-child) {
            margin-left: 20rpx;
          }
          &:active {
            opacity: 0.8;
          }
          &.plain {
            background-color: #fff;
            border: 1px solid @primary;
            padding-bottom: 1rpx;
            color: @primary;
          }
        }
      }
    }
  }
}
</style>