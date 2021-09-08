<template>
  <view class="answer">
    <AnswerHead type="1" total="30" current="1" />
    <!-- <view class="output output--hidden"> -->
    <!-- <Single /> -->
    <!-- <Multiple /> -->
    <!-- <Judg /> -->
    <!-- <Indefinite /> -->
    <!-- <Completion /> -->
    <!-- <Short /> -->
    <!-- </view> -->
    <swiper class="swiper" duration="300">
      <swiper-item class="swiper-item swiper-item--hidden">
        <Case />
      </swiper-item>
      <swiper-item class="swiper-item" v-for="item in 100" :key="item">
        <Single />
      </swiper-item>
    </swiper>

    <AnswerBar class="bar" @card="toCard" />
  </view>
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
import Case from "@/components/case";
export default {
  name: "answer",
  components: {
    AnswerHead,
    AnswerBar,
    Single,
    Multiple,
    Judg,
    Indefinite,
    Completion,
    Short,
    Case,
  },

  data() {
    return {};
  },
  methods: {
    toCard() {
      console.log(1233);
      uni.navigateTo({
        url: "/pages/answerSheet/index?id=1",
      });
    },
    look() {
      this.answer = [1, 2];
    },
  },
};
</script>
<style lang="less" scoped>
.answer {
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .swiper {
    flex: 1;
    &-item {
      position: relative;
      overflow-y: auto;
      box-sizing: border-box;
      padding: 20rpx 40rpx;
      &--hidden {
        overflow: hidden;
      }
    }
  }

  .bar {
    margin-top: auto;
  }
}
</style>