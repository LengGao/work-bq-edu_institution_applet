<template>
  <view class="index">
    <view class="header" @click="toSelectId">
      <text class="iconfont">&#xe64f;</text>
      <text class="title">{{
        questionBankInfo.question_bank_name || question_bank_name
      }}</text>
      <van-icon name="arrow-down" />
    </view>
    <view class="card card--primary" @click="linkTo('clockIn')">
      <view class="card-title">每日打卡，为梦想持续加码</view>
      <view class="card-content">
        <view class="item" v-for="(item, index) in clockInList" :key="index">
          <view class="item-value"
            >{{ item.value }}
            <text v-if="index === 2 && item.value !== '--'" class="unit"
              >%</text
            ></view
          >
          <view class="item-title">{{ item.name }}</view>
        </view>
      </view>
      <view class="card-footer">
        <view class="card-footer-left">
          <image
            class="avatar"
            v-for="(item, index) in clockData.list"
            :key="index"
            :src="item.cover"
          />

          <text>{{ clockData.total }}人正在参与</text>
        </view>
        <view class="card-footer-right">
          <van-button
            size="small"
            type="primary"
            :class="{ success: !!clockData.is_clock }"
            >{{ clockData.is_clock ? "今日已打卡" : "今日未打卡" }}</van-button
          >
        </view>
      </view>
    </view>
    <view class="card" @click="linkTo('chapter')">
      <view class="card-title">章节练习，海量优质习题</view>
      <view class="card-content">
        <view class="question-item">
          <view class="question-item-title">章节进度</view>
          <view class="question-item-value">{{
            practice.completion_rate
          }}</view>
        </view>
        <view class="question-item">
          <view class="question-item-title">做题总数</view>
          <view class="question-item-value">{{
            practice.answer_total_num
          }}</view>
        </view>
        <view class="question-item">
          <view class="question-item-title">准确率</view>
          <view class="question-item-value">{{ practice.correct_rate }}%</view>
        </view>
        <view class="question-item img">
          <image class="icon-zj" src="../../static/icon-zjlx.gif" />
          <view class="question-item-value">开始练习</view>
        </view>
      </view>
    </view>
    <view class="question-entry">
      <view
        class="question-entry-item question-entry-item--large"
        @click="linkTo('overTheYears')"
      >
        <image class="icon" src="../../static/icon-lnzt.png" />
        <image class="nail" src="../../static/icon-lq.png" />
        <view class="info">
          <view class="info-title">历年真题</view>
          <view class="info-desc">全真考场试题</view>
        </view>
      </view>
      <view
        class="question-entry-item question-entry-item--large mnks"
        @click="linkTo('mockExamination')"
      >
        <image class="icon" src="../../static/icon-mnks.png" />
        <image class="nail" src="../../static/icon-zy.png" />
        <view class="info">
          <view class="info-title">模拟考试</view>
          <view class="info-desc">智能组卷评测</view>
        </view>
      </view>
      <view
        class="question-entry-item m-l"
        @click="linkTo('brushQuestionChallenge')"
      >
        <image class="icon" src="../../static/icon-sttz.png" />
        <view class="title"> 刷题挑战</view>
      </view>
      <view class="question-entry-item" @click="linkTo('autonomy')">
        <image class="icon" src="../../static/icon-zzct.png" />
        <view class="title"> 自主出题</view>
      </view>
      <view class="question-entry-item" @click="linkTo('favorites')">
        <image class="icon" src="../../static/icon-scj.png" />
        <view class="title"> 收藏夹</view>
      </view>
      <view class="question-entry-item m-r" @click="linkTo('wrongQuestion')">
        <image class="icon" src="../../static/icon-ctj.png" />
        <view class="title"> 错题集</view>
      </view>
    </view>
    <van-action-sheet
      :show="show"
      :actions="actions"
      @close="onClose"
      @select="onSelect"
    />
  </view>
</template>

<script>
import { mapGetters } from "vuex";
import { getPanelStatistical } from "@/api/index";
export default {
  data() {
    return {
      show: false,
      actions: [
        {
          name: "1",
        },
        {
          name: "2",
        },
      ],
      clockInList: [
        {
          name: "打卡天数",
          value: 0,
        },
        {
          name: "平均时长",
          value: "00:00",
        },
        {
          name: "今日正确率",
          value: 0,
        },
      ],
      clockData: {
        total: 0,
        list: [],
      },
      practice: {
        completion_rate: 0,
        answer_total_num: 0,
        correct_rate: 0,
      },
      question_bank_name: "",
    };
  },
  onShow() {
    this.hasQuestionId();
  },
  computed: {
    ...mapGetters(["appInfo", "questionBankInfo"]),
  },
  watch: {
    "appInfo.app_name": {
      handler(val) {
        uni.setNavigationBarTitle({
          title: val,
        });
      },
      immediate: true,
    },
  },
  methods: {
    hasQuestionId() {
      if (!this.questionBankInfo.question_bank_id) {
        this.toSelectId();
      } else {
        this.getPanelStatistical();
      }
    },
    async getPanelStatistical() {
      const data = {
        question_bank_id: this.questionBankInfo.question_bank_id,
      };
      const res = await getPanelStatistical(data);
      const clock = res.data.clock;
      this.clockInList[0].value = clock.day_num;
      this.clockInList[1].value = clock.use_time;
      this.clockInList[2].value =
        clock.is_clock === 1 ? clock.correct_rate : "--";
      this.clockData = clock;
      this.practice = res.data.practice || {};
      this.question_bank_name = res.data.question_bank_name;
    },
    linkTo(path) {
      uni.navigateTo({
        url: `/pages/${path}/index`,
      });
    },
    toSelectId() {
      uni.navigateTo({
        url: `/pages/selectQuestionBank/index`,
      });
    },
    openSheet() {
      this.show = true;
    },
    onSelect(e) {
      console.log(e);
    },
    onClose(e) {
      this.show = false;
    },
  },
};
</script>

<style lang="less" scoped>
@import "@/styles/var";
.index {
  padding: 32rpx;
  .header {
    color: #333;
    &:active {
      opacity: 0.8;
    }
    .title {
      font-weight: bold;
      margin-left: 10rpx;
      margin-right: 10rpx;
    }
  }
  .card {
    margin: 40rpx 0;
    border-radius: 16rpx;
    box-shadow: 0 0 10rpx rgba(93, 207, 255, 0.3);
    &--primary {
      background-color: @primary;
      margin-top: 30rpx;
      .card-title {
        color: #fff;
        &::before {
          background-color: #fff;
        }
      }
    }
    &-title {
      padding: 32rpx;
      display: flex;
      align-items: center;
      color: @primary;
      font-weight: bold;
      &::before {
        content: "";
        width: 8rpx;
        height: 40rpx;
        background-color: @primary;
        margin-right: 16rpx;
      }
    }
    &-content {
      display: flex;
      align-items: center;
      color: #fff;
      padding: 0 32rpx 32rpx;

      .item {
        flex: 1;
        flex-shrink: 0;
        text-align: center;
        position: relative;
        .unit {
          font-size: 24rpx;
        }
        &-title {
          color: #a3d9ff;
          font-size: 24rpx;
        }
        &-value {
          font-size: 44rpx;
          margin-bottom: 16rpx;
        }
        &:not(:last-child):after {
          position: absolute;
          right: 0;
          top: 15%;
          content: "";
          height: 70%;
          width: 1rpx;
          background-color: #47b2ff;
        }
      }
      .question-item {
        flex: 1;
        &-title {
          color: #999;
          font-size: 24rpx;
        }
        &-value {
          color: #333;
          font-size: 40rpx;
        }
        &.img {
          padding-left: 26rpx;
          position: relative;
          right: -16rpx;
          text-align: center;
          &:active {
            opacity: 0.8;
          }
          &::before {
            content: "";
            width: 1rpx;
            height: 68rpx;
            position: absolute;
            left: 0;
            top: 14rpx;
            background-color: #ccc;
          }
          .icon-zj {
            width: 60rpx;
            height: 60rpx;
          }
          .question-item-value {
            color: #333;
            font-size: 24rpx;
          }
        }
      }
    }
    &-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #fefefe;
      padding: 32rpx;
      border-bottom-left-radius: 15rpx;
      border-bottom-right-radius: 15rpx;
      &-left {
        display: flex;
        align-items: center;
        text {
          color: #aaaaaa;
          font-size: 24rpx;
          margin-left: 12rpx;
        }
        .avatar {
          width: 40rpx;
          height: 40rpx;
          border-radius: 50%;
          border: 1rpx solid #ddd;
          &:not(:first-child) {
            margin-left: -10rpx;
          }
        }
      }
      &-right {
        /deep/.van-button {
          border-radius: 10rpx;
        }
        .success {
          /deep/.van-button {
            border-radius: 10rpx;
            background-color: @success;
            border-color: @success;
          }
        }
      }
    }
  }
  .question-entry {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    &-item {
      margin-bottom: 40rpx;
      &:active {
        opacity: 0.8;
      }
      position: relative;
      text-align: center;
      .icon {
        width: 60rpx;
        height: 60rpx;
      }
      .title {
        font-size: 24rpx;
        color: #333333;
      }
      &.m-l {
        margin-left: 40rpx;
      }
      &.m-r {
        margin-right: 40rpx;
      }
      &--large {
        width: 35%;
        padding: 30rpx 40rpx;
        background-color: #fdf6ec;
        border-radius: 10rpx;
        overflow: hidden;
        text-align: left;
        &.mnks {
          background-color: #fef0f0;
        }
        .nail {
          position: absolute;
          right: -35rpx;
          top: -50rpx;
          width: 120rpx;
          height: 120rpx;
        }
        .flex-c();
        .icon {
          width: 60rpx;
          height: 60rpx;
          margin-right: 20rpx;
        }
        .info {
          &-title {
            color: #333333;
            font-size: 28rpx;
            font-weight: bold;
          }
          &-desc {
            font-size: 24rpx;
            color: #999999;
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>
