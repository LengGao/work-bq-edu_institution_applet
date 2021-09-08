<template>
  <div class="case">
    <view class="quetion-content">
      奋达科技 fdasfsdf 的考虑是否 将奋达科技放虑是否将奋达科技放大卡
      积分的考虑是否将奋虑是否将奋达科技 放大卡积分的考
      虑是否将奋虑是奋达科技放虑是否将奋达科技放大卡
      积分的考虑是否将奋虑是否将奋达科技
      放大卡积分的考奋达科技放虑是否将奋达科技放大卡
      积分的考虑是否将奋虑是否将奋达科技
      放大卡积分的考奋达科技放虑是否将奋达科技放大卡
      积分的考虑是否将奋虑是否将奋达科技
      放大卡积分的考奋达科技放虑是否将奋达科技放大卡
      积分的考虑是否将奋虑是否将奋达科技
      放大卡积分的考奋达科技放虑是否将奋达科技放大卡
      积分的考虑是否将奋虑是否将奋达科技
      放大卡积分的考奋达科技放虑是否将奋达科技放大卡
      积分的考虑是否将奋虑是否将奋达科技
      放大卡积分的考奋达科技放虑是否将奋达科技放大卡
      积分的考虑是否将奋虑是否将奋达科技
      放大卡积分的考奋达科技放虑是否将奋达科技放大卡
      积分的考虑是否将奋虑是否将奋达科技
      放大卡积分的考奋达科技放虑是否将奋达科技放大卡
      积分的考虑是否将奋虑是否将奋达科技
      放大卡积分的考奋达科技放虑是否将奋达科技放大卡
      积分的考虑是否将奋虑是否将奋达科技
      放大卡积分的考奋达科技放虑是否将奋达科技放大卡
      积分的考虑是否将奋虑是否将奋达科技
      放大卡积分的考奋达科技放虑是否将奋达科技放大卡
      积分的考虑是否将奋虑是否将奋达科技
      放大卡积分的考奋达科技放虑是否将奋达科技放大卡
      积分的考虑是否将奋虑是否将奋达科技
      放大卡积分的考奋达科技放虑是否将奋达科技放大卡
      积分的考虑是否将奋虑是否将奋达科技
      放大卡积分的考奋达科技放虑是否将奋达科技放大卡
      积分的考虑是否将奋虑是否将奋达科技 放大卡积分的考否将奋达科技放
      大卡积分的考虑是否将奋虑是否将奋达
      科技放大卡积分的考虑是否将奋大卡积分的考虑是否将奋达 科技放
    </view>
    <view class="drawer" :class="{ 'drawer--open': isOpen }">
      <view class="btn" @click="handleToggle">
        <view class="left" :class="{ 'left--active': isOpen }"></view>
        <view class="right" :class="{ 'right--active': isOpen }"></view>
      </view>
      <view class="child-header">
        <view class="child-header-title">案例题 36-1</view>
        <view class="child-header-actions">
          <view class="prev">上一题</view>
          <view class="next" @click="handleNext">下一题</view>
        </view>
      </view>

      <swiper class="child-content swiper" :current="current" duration="300">
        <swiper-item class="swiper-item">
          <scroll-view scroll-y class="scroll-view">
            <Single />
          </scroll-view>
        </swiper-item>
        <swiper-item class="swiper-item">
          <scroll-view scroll-y class="scroll-view">
            <Single />
          </scroll-view>
        </swiper-item>
      </swiper>
    </view>
  </div>
</template>
<script>
import AnswerBar from "@/components/answerBar";
import AnswerHead from "@/components/answerHead";
import Single from "@/components/single";
import Multiple from "@/components/multiple";
import Judg from "@/components/judg";
import Indefinite from "@/components/indefinite";
import Completion from "@/components/completion";
import Short from "@/components/short";
export default {
  name: "case",
  components: {
    AnswerHead,
    AnswerBar,
    Single,
    Multiple,
    Judg,
    Indefinite,
    Completion,
    Short,
  },
  props: {},
  data() {
    return {
      isOpen: false,
      current: 0,
    };
  },
  methods: {
    handleNext() {
      this.current++;
    },
    handleToggle() {
      this.isOpen = !this.isOpen;
      console.log(this.isOpen);
    },
  },
};
</script>
<style lang="less" scoped>
@import "@/styles/var";
.case {
  height: 100%;
  overflow: hidden;
  .quetion-content {
    height: 90%;
    overflow-y: auto;
    padding-bottom: 40rpx;
  }
}
.drawer {
  box-sizing: border-box;
  width: 100%;
  height: 90%;
  position: absolute;
  top: 90%;
  bottom: 0;
  left: 0;
  transition: top 0.3s;
  background-color: #fff;
  &--open {
    top: 10%;
  }
  .btn {
    text-align: center;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16rpx 0;
    background-color: #eee;
    .left,
    .right {
      width: 50rpx;
      height: 12rpx;
      background-color: #ccc;
      transition: transform 0.3s;
    }
    .left {
      border-top-left-radius: 10rpx;
      border-bottom-left-radius: 10rpx;

      &--active {
        transform: rotate(20deg);
        margin-right: -4rpx;
      }
    }
    .right {
      border-top-right-radius: 10rpx;
      border-bottom-right-radius: 10rpx;
      &--active {
        transform: rotate(-20deg);
        margin-left: -4rpx;
      }
    }
  }
  .child-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20rpx;
    border-bottom: 1px solid @border-color;
    color: @primary;
    &-title {
      font-weight: bold;
    }
    &-actions {
      display: flex;
      align-items: center;
      .prev,
      .next {
        padding: 8rpx 16rpx;
        border: 1rpx solid @primary;
        font-size: 24rpx;
        margin-left: 10rpx;
        border-radius: 10rpx;
      }
    }
  }
  .child-content {
    box-sizing: border-box;
    height: calc(100% - 138rpx);
    padding: 10rpx 20rpx;
    .scroll-view {
      height: 100%;
    }
  }
}
</style>