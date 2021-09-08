<template>
  <div class="indefinite">
    <view class="quetion-content">
      奋达科技 放大卡积分的考虑是否将奋达科技放大卡积分
      的考虑是否将奋达科技放大卡积分的考虑是否将奋达
      科技放大卡积分的考虑是否将奋达科技放达科技放大卡积分的考虑是否将奋达
    </view>
    <Select :options="answerData" multiple v-model="checked" :answer="answer">
    </Select>
    <AnswerEye @change="handleEyeChange" />
    <AnswerAnalysis
      v-if="answer.length"
      :user-answer="userAnswerText"
      :answer="answerText"
    />
  </div>
</template>
<script>
import AnswerAnalysis from "@/components/answerAnalysis";
import Select from "@/components/select";
import AnswerEye from "@/components/answerEye";

export default {
  name: "indefinite",
  components: {
    AnswerAnalysis,
    Select,
    AnswerEye,
  },
  props: {},
  data() {
    return {
      answer: [],
      checked: [],
      answerData: [
        {
          value: 1,
          text: "法将恢复健康大厦1",
        },
        {
          value: 2,
          text: "法将恢复健2康大厦",
        },
        {
          value: 3,
          text: "法将恢复健3康大厦",
        },
        {
          value: 4,
          text: "法将恢复健3康大厦",
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
        this.answer = [1, 2];
        this.getAnswerText();
      } else {
        this.answer = [];
      }
    },
    getAnswerText() {},
  },
};
</script>
<style lang="less" scoped>
.quetion-content {
  margin-bottom: 20rpx;
}
</style>