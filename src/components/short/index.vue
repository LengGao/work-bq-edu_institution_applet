<template>
  <div class="short">
    <view class="quetion-content">
      奋达科技 放大卡积分的考虑是否将奋达科技放大卡积分
      的考虑是否将奋达科技放大卡积分的考虑是否将奋达
      科技放大卡积分的考虑是否将奋达科技放达科技放大卡积分的考虑是否将奋达
    </view>
    <textarea class="text" v-model="item.value" placeholder="请输入" />
    <AnswerEye @change="handleEyeChange" />
    <AnswerAnalysis short v-if="answer" :desc="answer" />
  </div>
</template>
<script>
import AnswerAnalysis from "@/components/answerAnalysis";
import Select from "@/components/select";
import AnswerEye from "@/components/answerEye";
export default {
  name: "short",
  components: {
    AnswerAnalysis,
    Select,
    AnswerEye,
  },
  props: {},

  data() {
    return {
      sequence: true,
      answer: "",
      checked: [],
      answerData: [
        {
          value: "",
          status: "",
        },
        {
          value: "",
          status: "",
        },
        {
          value: "",
          status: "",
        },
        {
          value: "",
          status: "",
        },
      ],
      letter: {
        0: "A",
        1: "B",
        2: "C",
        3: "D",
        4: "E",
        5: "F",
        6: "G",
        7: "H",
        8: "R",
        9: "J",
      },
      userAnswerText: "",
      answerText: "",
    };
  },
  methods: {
    handleEyeChange(val) {
      if (val) {
        this.answer = "fdasfdsafdsafdsfds";
        this.getAnswerText();
      } else {
        this.answer = "";
      }
    },
    getAnswerText() {},
  },
};
</script>
<style lang="less" scoped>
@import "@/styles/var";
.quetion-content {
  margin-bottom: 20rpx;
}
.text {
  width: 100%;
  box-sizing: border-box;
  border: @border;
  padding: 24rpx;
  border-radius: 10rpx;
  margin-bottom: 20rpx;
}
</style>