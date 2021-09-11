<template>
  <div class="completion">
    <view class="quetion-content">
      <u-parse :content="options.topic_description" />
    </view>
    <IOption
      v-for="(item, index) in inputItem"
      :key="index"
      :label="index + 1 + ''"
      :status="item.status"
    >
      <input
        type="text"
        :disabled="!!correctAnswer"
        v-model="item.value"
        placeholder="请输入"
      />
    </IOption>
    <AnswerEye @change="handleEyeChange" />
    <AnswerAnalysis
      v-if="correctAnswer"
      :correct-answer="correctAnswer"
      :desc="options.topic_analysis"
    />
  </div>
</template>
<script>
import uParse from "@/components/gaoyia-parse/parse.vue";
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
    uParse,
  },
  props: {
    options: {
      type: Object,
      default: () => ({
        option: [],
        topic_description: "",
      }),
    },
  },
  data() {
    return {
      sequence: true,
      correctAnswer: "",
      inputItem: [],
    };
  },
  watch: {
    correctAnswer(val) {
      if (val.length) {
        // 正确答案转成数组
        const correctAnswerArr = val.split(",");
        // 按序匹配答案
        if (this.sequence) {
          this.inputItem.forEach((item, index) => {
            if (this.inputItem[index].value === correctAnswerArr[index]) {
              item.status = "success";
            } else {
              item.status = "error";
            }
          });
        } else {
          // 不用按序
          this.inputItem.forEach((item) => {
            if (correctAnswerArr.includes(item.value)) {
              // 同样的答案只能对一个
              correctAnswerArr.splice(correctAnswerArr.indexOf(item.value), 1);
              item.status = "success";
            } else {
              item.status = "error";
            }
          });
        }
      } else {
        this.inputItem.forEach((item) => {
          item.status = "";
        });
      }
    },
  },
  created() {
    this.inputItem = this.options.option.map((item) => ({
      ...item,
      value: "",
      status: "",
    }));
  },
  methods: {
    handleEyeChange(val) {
      if (val) {
        this.correctAnswer = this.options.topic_answer;
        console.log(this.inputItem);
      } else {
        this.correctAnswer = "";
      }
    },
  },
};
</script>
<style lang="less" scoped>
.quetion-content {
  margin-bottom: 20rpx;
}
</style>