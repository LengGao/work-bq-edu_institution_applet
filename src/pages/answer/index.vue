<template>
  <view class="answer">
    <AnswerHead
      :type="questionList[currentIndex].topic_type"
      :total="total"
      :current="currentIndex + 1"
    />
    <!-- <view class="output output--hidden"> -->
    <!-- <Single /> -->
    <!-- <Multiple /> -->
    <!-- <Judg /> -->
    <!-- <Indefinite /> -->
    <!-- <Completion /> -->
    <!-- <Short /> -->
    <!-- </view> -->
    <swiper
      class="swiper"
      :duration="duration"
      @change="onSwiperChange"
      :current="currentIndex"
      @animationfinish="onAnimationfinish"
    >
      <swiper-item
        class="swiper-item"
        :class="{ 'swiper-item--hidden': item.topic_type === 7 }"
        v-for="(item, index) in questionList"
        :key="index"
      >
        <block
          v-if="
            currentIndex === index ||
            currentIndex - 1 === index ||
            currentIndex + 1 === index
          "
        >
          <Single
            :model="model"
            :options="item"
            @change="onSingleChange"
            v-if="item.topic_type === 1"
          />
          <Multiple
            :model="model"
            :options="item"
            @change="onOtherChange"
            v-if="item.topic_type === 2"
          />
          <Judg
            :model="model"
            :options="item"
            @change="onSingleChange"
            v-if="item.topic_type === 3"
          />
          <Indefinite
            :model="model"
            :options="item"
            @change="onOtherChange"
            v-if="item.topic_type === 4"
          />
          <Completion
            :model="model"
            :options="item"
            @change="onOtherChange"
            v-if="item.topic_type === 5"
          />
          <Short
            :model="model"
            :options="item"
            @change="onOtherChange"
            v-if="item.topic_type === 6"
          />
          <!-- :current="caseIndex" -->
          <Case
            :model="model"
            :options="item"
            :serial-number="currentIndex + 1"
            :log-id="logId"
            v-if="item.topic_type === 7"
            :ref="`case-${item.id}`"
            :is-active="currentIndex === index && duration === 300"
            :type="type"
            @change="onCaseChange"
            @index-change="onCaseIndexChange"
          />
        </block>
      </swiper-item>
    </swiper>
    <AnswerBar
      class="bar"
      @card="toCard"
      @next="handleNext"
      @prev="handlePrev"
      @collect="setCollection"
      :show-time="model === '2'"
      :isCollection="!!getCurrentData.is_collection"
    >
      <van-count-down :time="time" @finish="onTimeOut" />
    </AnswerBar>
    <van-dialog id="van-dialog" />
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
import Dialog from "@/wxcomponents/vant/dialog/dialog";
import {
  createPractice,
  submitAnswer,
  settlement,
  setCollection,
  createMockExam,
  createRealTopic,
  createIndependent,
  createDailyClock,
  createChallenge,
  getUserTopicRecord,
  submitWrongQuestion,
} from "@/api/index";
import { mapActions, mapGetters } from "vuex";
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
    return {
      currentIndex: 0,
      caseIndex: 0,
      duration: 300,
      total: 0,
      questionList: [],
      logId: "",
      userAnswerMap: {},
      // 练习的题目类型
      type: 1, // 1:章节练习，2：模拟考试 ...
      // 是否结算
      hasSettlement: false,
      // 答题模式
      model: "1",
      // 倒计时时间
      time: 0,
      isEndCount: 0,
      // 收藏夹&错题集 是否是解析模式
      isAnalysis: 0,
      // 历年真题是否是考试模式
      isExam: 0,
    };
  },
  computed: {
    // 获取当前显示的题目。案例题按小题算
    getCurrentData() {
      const currentData = this.questionList[this.currentIndex];
      if (!currentData) {
        return {};
      }
      return currentData.topic_type === 7
        ? currentData.child[this.caseIndex]
        : currentData;
    },
  },
  watch: {
    isEndCount(val) {
      if (val > 1 && this.type === "6") {
        uni.redirectTo({
          url: "/pages/challengeList/index",
        });
        return;
      }
      if (val > 1 && this.model === "2" && !this.hasSettlement) {
        Dialog.confirm({
          title: "提示",
          message: "您已完成最后一题，确认交卷吗？",
          confirmButtonColor: "#199fff",
        })
          .then(() => {
            this.toTestResoult();
          })
          .catch(() => {
            // on cancel
          });
      }
      if (val > 1 && this.model !== "2") {
        Dialog.confirm({
          title: "提示",
          message: "您已完成最后一题，确定返回上一页吗？",
          confirmButtonColor: "#199fff",
        })
          .then(() => {
            uni.navigateBack();
          })
          .catch(() => {
            // on cancel
          });
      }
    },
  },
  onShow() {
    this.duration = 300;
    this.setCurrentModel();
  },
  onLoad({
    chapterId,
    title = "题目",
    type = "1",
    time = 0,
    isExam,
    isAnalysis,
    isContinue,
  }) {
    // debug模式需要登录才能刷题
    if (this.$store.getters.appInfo.debug) {
      uni.redirectTo({
        url: "/pages/login/index",
      });
      return;
    }
    this.type = type;
    this.time = time;
    this.isExam = isExam;
    this.isAnalysis = isAnalysis;
    uni.setNavigationBarTitle({
      title,
    });
    this.createQuestion(chapterId, isExam, isContinue);
  },
  onUnload() {
    if (!["7", "8"].includes(this.type)) {
      this.settlement();
    }
  },
  methods: {
    ...mapActions(["setQusetionList"]),
    setCurrentModel() {
      // model 1:刷题模式，2：考试模式 3：解析模式
      if (this.type === "1") {
        this.model = "1";
      }
      if (this.type === "2") {
        this.model = "2";
        if (this.hasSettlement) {
          this.model = "3";
        }
      }
      if (this.type === "3") {
        if (this.isExam === "1") {
          this.model = "2";
          if (this.hasSettlement) {
            this.model = "3";
          }
        } else {
          this.model = "1";
        }
      }
      if (this.type === "4") {
        this.model = "2";
        if (this.hasSettlement) {
          this.model = "3";
        }
      }
      if (this.type === "5") {
        this.model = "1";
      }
      if (this.type === "6") {
        this.model = "1";
      }
      if (this.type === "7") {
        this.model = "1";
        if (this.isAnalysis === "1") {
          this.model = "3";
        }
      }
      if (this.type === "8") {
        this.model = "1";
        if (this.isAnalysis === "1") {
          this.model = "3";
        }
      }
    },
    onTimeOut() {
      Dialog.alert({
        title: "提示",
        message: "考试时间到，系统自动交卷",
        confirmButtonColor: "#199fff",
      }).then(() => {
        this.toTestResoult();
      });
    },
    // 提交其他题型答案
    submitOtherAnswer() {
      if (this.type === "7") {
        // 收藏夹不用提交答案
        return;
      }
      if (this.hasSettlement) {
        return;
      }
      for (const id in this.userAnswerMap) {
        this.userAnswerMap[id] && this.submitAnswer(id, this.userAnswerMap[id]);
      }
    },
    // 案例题里的index
    onCaseIndexChange(index) {
      this.caseIndex = index;
    },
    // 案例题的用户答案
    onCaseChange(index, answer) {
      this.questionList[this.currentIndex].child[index].userAnswer = answer;
    },
    // 收集其他题型答案
    onOtherChange(answer, id) {
      this.userAnswerMap[id] = answer;
      this.questionList[this.currentIndex].userAnswer = answer;
    },
    // 单选跟判断题答案提交
    onSingleChange(answer, id) {
      // 收藏夹不用提交答案
      if (this.type !== "7") {
        this.submitAnswer(id, [answer]);
      }
      this.questionList[this.currentIndex].userAnswer = answer;
      this.model === "2" && this.handleNext();
    },
    handlePrev() {
      if (this.currentIndex <= 0) {
        uni.showToast({
          icon: "none",
          title: "已经是第一题了",
        });
        return;
      }
      this.isEndCount = 0;
      this.currentIndex--;
    },
    handleNext() {
      if (this.currentIndex >= this.total - 1) {
        this.isEndCount < 1 &&
          uni.showToast({
            icon: "none",
            title: "已经是最后一题了",
          });
        this.isEndCount++;
        return;
      }
      this.currentIndex++;
    },
    onSwiperBoundary() {
      if (this.currentIndex <= 0) {
        uni.showToast({
          icon: "none",
          title: "已经是第一题了",
        });
        return;
      }
      if (this.currentIndex >= this.total - 1) {
        this.isEndCount < 1 &&
          uni.showToast({
            icon: "none",
            title: "已经是最后一题了",
          });
        this.isEndCount++;
        return;
      }
      this.isEndCount = 0;
    },
    onAnimationfinish({ detail }) {
      const { current } = detail;
      this.onSwiperBoundary();
    },
    onSwiperChange({ detail }) {
      const { current } = detail;
      this.currentIndex = current;
      this.caseIndex = 0;
      this.$nextTick(() => {
        this.submitOtherAnswer();
      });
    },

    // 题目收藏
    async setCollection() {
      const { id: topic_id, is_collection } = this.getCurrentData;
      const data = {
        topic_id,
        is_collection: +!is_collection,
      };
      const res = await setCollection(data);
      this.getCurrentData.is_collection = data.is_collection;
      uni.showToast({
        title: res.message,
      });
    },
    // 结算成绩
    async settlement() {
      const data = {
        log_id: this.logId,
      };
      await settlement(data);
    },
    // 提交答案
    async submitAnswer(topic_id, answer) {
      const data = {
        log_id: this.logId,
        topic_id,
        answer,
      };
      // 错题集答案提交用 submitWrongQuestion
      const api = this.type === "8" ? submitWrongQuestion : submitAnswer;
      await api(data);
      // 已提交的重置掉
      this.userAnswerMap[topic_id] && (this.userAnswerMap[topic_id] = null);
    },
    // 获取章节练习题目
    async createQuestion(chapter_id, is_exam, redo) {
      const data = {
        chapter_id,
        is_exam,
        redo,
      };
      if (this.type === "7") {
        data.is_collection = 1; // 收藏夹
      }
      if (this.type === "8") {
        data.is_collection = 0; // 错题集
      }
      const api = {
        1: createPractice,
        2: createMockExam,
        3: createRealTopic,
        4: createIndependent,
        5: createDailyClock,
        6: createChallenge,
        7: getUserTopicRecord,
        8: getUserTopicRecord,
      };
      const res = await api[this.type](data);
      const topic_list = res.data.topic_list;
      const topic_id = res.data.topic_id || "";
      const qusetionType = [1, 2, 3, 4, 5, 6, 7];
      qusetionType.forEach((item) => {
        this.questionList = this.questionList.concat(topic_list[item] || []);
      });
      // 继续上一次
      topic_id &&
        this.questionList.forEach((item, index) => {
          if (item.id === topic_id) {
            this.currentIndex = index;
          }
        });
      this.total = res.data.total;
      this.logId = res.data.log_id;
      // 收藏夹错题集的答题卡数据
      if (["7", "8"].includes(this.type)) {
        this.setQusetionList(topic_list);
      }
    },
    toTestResoult() {
      this.duration = 0;
      this.hasSettlement = true;
      setTimeout(() => {
        uni.navigateTo({
          url: `/pages/testResults/index?logId=${this.logId}`,
        });
      }, 500);
    },

    toCard() {
      this.submitOtherAnswer();
      this.duration = 0;
      this.$nextTick(() => {
        let isRequest = 1;
        // 收藏夹错题集的答题卡不用请求
        if (["7", "8"].includes(this.type)) {
          isRequest = 0;
        }
        uni.navigateTo({
          url: `/pages/answerSheet/index?logId=${this.logId}&model=${this.model}&isRequest=${isRequest}`,
        });
      });
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
        padding: 0;
      }
    }
  }

  .bar {
    margin-top: auto;
  }
}
</style>