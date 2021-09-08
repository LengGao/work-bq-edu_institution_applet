<template>
  <view class="select-question">
    <view class="menu">
      <view
        class="menu-item"
        :class="{ 'menu-item--active': activeIndex === index }"
        v-for="(item, index) in menuList"
        :key="index"
        @click="handleClick(index)"
        >{{ item.title }}
      </view>
    </view>
    <scroll-view
      class="container"
      scroll-y
      :scroll-into-view="toView"
      scroll-with-animation
    >
      <Title color="#199fff" id="type-1">软考类</Title>
      <view class="type-list">
        <view class="type-list-item type-list-item--acitve"
          >系统集成项目管理 ）</view
        >
        <view class="type-list-item">系统集成项目管理 工程师（中级）</view>
        <view class="type-list-item">系统集成项目管理 工程师（中级）</view>
        <view class="type-list-item">系统集成项目管理 工程师（中级）</view>
        <view class="type-list-item">系统集成项目管理 工程师（中级）</view>
      </view>
      <Title color="#199fff" id="type-2">财经类</Title>
      <view class="type-list">
        <view class="type-list-item">系统集成项目管理 ）</view>
        <view class="type-list-item">系统集成项目管理 工程师（中级）</view>
        <view class="type-list-item">系统集成项目管理 工程师（中级）</view>
        <view class="type-list-item">系统集成项目管理 工程师（中级）</view>
        <view class="type-list-item">系统集成项目管理 工程师（中级）</view>
      </view>
      <Title color="#FDC400" id="type-3">财经类</Title>
      <view class="type-list">
        <view class="type-list-item">系统集成项目管理 ）</view>
        <view class="type-list-item">系统集成项目管理 工程师（中级）</view>
        <view class="type-list-item">系统集成项目管理 工程师（中级）</view>
        <view class="type-list-item">系统集成项目管理 工程师（中级）</view>
        <view class="type-list-item">系统集成项目管理 工程师（中级）</view>
      </view>
    </scroll-view>
  </view>
</template>
<script>
import Title from "@/components/title";
export default {
  name: "selectQuestionBank",
  components: {
    Title,
  },
  data() {
    return {
      menuList: [
        {
          title: "软考类",
          id: "1",
        },
        {
          title: "财经类",
          id: "2",
        },
        {
          title: "学历类",
          id: "3",
        },
        {
          title: "专项类",
          id: "4",
        },
        {
          title: "资格类",
          id: "5",
        },
      ],
      activeIndex: 0,
      toView: "",
    };
  },
  methods: {
    handleClick(index) {
      this.activeIndex = index;
      this.toView = "type-" + index;
    },
  },
};
</script>
<style lang="less" scoped>
@import "@/styles/var";
.select-question {
  display: flex;
  height: 100%;
  .menu {
    width: 170rpx;
    flex-shrink: 0;
    padding: 30rpx 47rpx;
    text-align: center;
    box-sizing: border-box;
    font-size: 26rpx;
    &-item {
      margin-bottom: 40rpx;
      padding: 10rpx 0;
      font-weight: bold;
      border-bottom: 2rpx solid #fff;
      &--active {
        border-color: @primary;
        color: @primary;
      }
    }
  }
  .container {
    flex: 1;
    height: 100%;
    padding-left: 20rpx;
    box-sizing: border-box;
    background-color: #f2f6fc;
    .type-list {
      .flex-c();
      flex-wrap: wrap;
      &-item {
        margin-right: 20rpx;
        margin-bottom: 20rpx;
        width: 260rpx;
        height: 120rpx;
        background-color: #fff;
        border-radius: 10rpx;
        padding: 30rpx 26rpx;
        font-size: 26rpx;
        color: #666;
        text-align: center;
        box-sizing: border-box;
        &--acitve {
          color: @primary;
        }
      }
    }
  }
}
</style>