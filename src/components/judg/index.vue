<template>
  <div class="judg">
    <view class="quetion-content">
      奋达科技 放大卡积分的考虑是否将奋达科技放大卡积分
      的考虑是否将奋达科技放大卡积分的考虑是否将奋达
      科技放大卡积分的考虑是否将奋达科技放达科技放大卡积分的考虑是否将奋达
      大卡积分的考虑是否将奋达科技放大达科技放大卡积分的考虑是否将奋达
      科技放大卡积分的考虑是否将奋达科技放
      大卡积分的考虑是否将奋达科技放大达科技放大卡积分的考虑是否将奋达
      科技放大卡积分的考虑是否将奋达科技放 大卡积分的考虑是否将奋达科技放大
      大卡积分的考虑是否将奋达科技放大卡积分的考虑是否将
    </view>
    <Select :options="answerData" noletter v-model="checked" :answer="answer">
    </Select>
    <AnswerAnalysis
      v-if="!!answer"
      :user-answer="letter[checked]"
      :answer="letter[answer]"
    />
  </div>
</template>
<script>
import AnswerAnalysis from "@/components/answerAnalysis";
import Select from "@/components/select";

export default {
  name: "Judg",
  components: {
    AnswerAnalysis,
    Select,
  },
  watch: {
    checked() {
      this.answer = 1;
    },
  },
  props: {},
  data() {
    return {
      answer: "",
      checked: "",
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
    };
  },
};
</script>
<style lang="less" scoped>
.quetion-content {
  margin-bottom: 20rpx;
}
</style>