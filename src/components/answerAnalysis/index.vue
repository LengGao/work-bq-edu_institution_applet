<template>
  <view class="answer-analysis">
    <view class="title" v-if="!short">参考答案</view>
    <view class="content" v-if="!short">
      <view>
        <view>正确答案：{{ answer }}</view>
      </view>
      <view class="user-answer">
        <view>你的答案:{{ userAnswer }}</view>
      </view>
    </view>
    <view class="title">答案解析</view>
    <view class="content">
      <view>
        <view>{{ desc || "无" }}</view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  name: "circular",
  props: {
    userAnswer: {
      type: String,
      default: "",
    },
    answer: {
      type: String,
      default: "",
    },
    desc: {
      type: String,
      default: "",
    },
    short: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
@import "@/styles/var";
.answer-analysis {
  .title {
    color: @primary;
    font-weight: bold;
    margin-top: 60rpx;
    margin-bottom: 12rpx;
  }
  .content {
    display: flex;
    align-items: center;
    .user-answer {
      margin-left: 60rpx;
    }
  }
}
</style>