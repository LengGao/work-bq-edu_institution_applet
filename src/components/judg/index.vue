<template>
  <div class="judg">
    <view class="quetion-content">
      <u-parse :content="options.topic_description" />
    </view>
    <Select
      :options="options.option"
      v-model="checkedAnswer"
      :correct-answer="correctAnswer"
    >
    </Select>
    <AnswerAnalysis
      v-if="correctAnswer"
      :user-answer="checkedAnswer"
      :correct-answer="correctAnswer"
      :desc="options.topic_analysis"
    />
  </div>
</template>
<script>
import AnswerAnalysis from "@/components/answerAnalysis";
import Select from "@/components/select";
import uParse from "@/components/gaoyia-parse/parse.vue";
export default {
  name: "Judg",
  components: {
    AnswerAnalysis,
    Select,
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
      correctAnswer: "",
      checkedAnswer: "",
    };
  },
  watch: {
    checkedAnswer(val) {
      this.correctAnswer = this.options.topic_answer;
      this.$emit("change", val, this.options.id);
    },
  },
};
</script>
<style lang="less" scoped>
.quetion-content {
  margin-bottom: 20rpx;
}
</style>