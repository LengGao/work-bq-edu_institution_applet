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
    >
      <!-- <swiper-item class="swiper-item swiper-item--hidden">
        <Case />
      </swiper-item> -->
      <swiper-item
        class="swiper-item"
        v-for="(item, index) in questionList"
        :key="index"
      >
        <Single
          :options="item"
          @change="onSingleChange"
          v-if="item.topic_type === 1"
        />
        <Multiple
          :options="item"
          @change="onSingleChange"
          v-if="item.topic_type === 2"
        />
        <Judg
          :options="item"
          @change="onSingleChange"
          v-if="item.topic_type === 3"
        />
        <Indefinite
          :options="item"
          @change="onSingleChange"
          v-if="item.topic_type === 4"
        />
        <Completion
          :options="item"
          @change="onSingleChange"
          v-if="item.topic_type === 5"
        />
      </swiper-item>
    </swiper>

    <AnswerBar
      class="bar"
      @card="toCard"
      @next="handleNext"
      @prev="handlePrev"
      :isCollection="!!questionList[currentIndex].is_collection"
    />
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
import { createPractice } from "@/api/index";
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
    };
  },
  onLoad({ chapterId }) {
    this.createPractice(chapterId);
  },
  methods: {
    onSingleChange(answer, id) {
      console.log(answer, id);
    },
    handlePrev() {
      if (this.currentIndex <= 0) {
        uni.showToast({
          icon: "none",
          title: "已经是第一题了",
        });
        return;
      }
      this.currentIndex--;
    },
    handleNext() {
      if (this.currentIndex >= this.total - 1) {
        uni.showToast({
          icon: "none",
          title: "已经是最后一题了",
        });
        return;
      }
      this.currentIndex++;
    },
    onSwiperChange({ detail }) {
      const { current } = detail;
      console.log(current);
      this.currentIndex = current;
    },
    async createPractice(chapter_id) {
      const data = {
        chapter_id,
      };
      const res = await createPractice(data);
      const topic_list = res.data.topic_list;
      const qusetionType = [1, 2, 3, 4, 5, 6, 7];
      qusetionType.forEach((item) => {
        this.questionList = this.questionList.concat(topic_list[item] || []);
      });
      console.log(this.questionList);
      this.total = res.data.total;
      this.logId = res.data.log_id;
    },
    toCard() {
      this.duration = 0;
      uni.navigateTo({
        url: `/pages/answerSheet/index?logId=${this.logId}`,
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