<template>
  <div class="completion">
    <view class="quetion-content">
      奋达科技 放大卡积分的考虑是否将奋达科技放大卡积分
      的考虑是否将奋达科技放大卡积分的考虑是否将奋达
      科技放大卡积分的考虑是否将奋达科技放达科技放大卡积分的考虑是否将奋达
    </view>
    <IOption
      v-for="(item, index) in answerData"
      :key="index"
      :label="index + 1 + ''"
      :status="item.status"
    >
      <input type="text" v-model="item.value" placeholder="请输入" />
    </IOption>
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
import IOption from "../option";
export default {
  name: "completion",
  components: {
    AnswerAnalysis,
    Select,
    AnswerEye,
    IOption,
  },
  props: {},

  data() {
    return {
      sequence: true,
      answer: [],
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
  watch: {
    answer(val) {
      if (val.length) {
        // 按序匹配答案
        if (this.sequence) {
          this.answerData.forEach((item, index) => {
            if (this.answerData[index].value === this.answer[index]) {
              item.status = "success";
            } else {
              item.status = "error";
            }
          });
        } else {
          // 不用按序
          this.answerData.forEach((item) => {
            if (this.answer.includes(item.value)) {
              item.status = "success";
            } else {
              item.status = "error";
            }
          });
        }
      } else {
        this.answerData.forEach((item) => {
          item.status = "";
        });
      }
    },
  },
  methods: {
    handleEyeChange(val) {
      if (val) {
        this.answer = ["1", "2"];
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