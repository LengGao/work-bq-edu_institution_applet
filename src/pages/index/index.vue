<template>
  <view class="index">
    <view class="header">
      <text class="iconfont">&#xe64f;</text>
      <text class="title">系统集成项目管理工程师（中级）</text>
    </view>
    <view class="card card--primary">
      <view class="card-title">每日打卡，为梦想持续加码</view>
      <view class="card-content">
        <view class="item" v-for="(item, index) in clockInData" :key="index">
          <view class="item-value">{{ item.value }}</view>
          <view class="item-title">{{ item.name }}</view>
        </view>
      </view>
      <view class="card-footer">
        <view class="card-footer-left">
          <image
            src="https://img0.baidu.com/it/u=1689178061,3688740446&fm=11&fmt=auto&gp=0.jpg"
          />
          <image
            src="https://img1.baidu.com/it/u=788474068,812707478&fm=253&fmt=auto&app=120&f=JPEG?w=280&h=180"
          />
          <image
            src="https://img0.baidu.com/it/u=1631379791,2150813757&fm=253&fmt=auto&app=120&f=JPEG?w=899&h=500"
          />
          <text>9999人正在参与</text>
        </view>
        <view class="card-footer-right">
          <van-button size="small" type="primary">今日未打卡</van-button>
        </view>
      </view>
    </view>
    <view class="card">
      <view class="card-title">每日打卡，为梦想持续加码</view>
      <view class="card-content">
        <view class="question-item">
          <view class="question-item-title">章节进度</view>
          <view class="question-item-value">15/30</view>
        </view>
        <view class="question-item">
          <view class="question-item-title">做题总数</view>
          <view class="question-item-value">9986</view>
        </view>
        <view class="question-item">
          <view class="question-item-title">准确率</view>
          <view class="question-item-value">55.5%</view>
        </view>
        <view class="question-item img">
          <image class="icon-zj" src="../../static/icon-zjlx.png" />
          <view class="question-item-value">开始练习</view>
        </view>
      </view>
    </view>
    <view class="question-entry">
      <view class="question-entry-item question-entry-item--large">
        <image class="icon" src="../../static/icon-lnzt.png" />
        <image class="nail" src="../../static/icon-lq.png" />
        <view class="info">
          <view class="info-title">历年真题</view>
          <view class="info-desc">全真考场试题</view>
        </view>
      </view>
      <view class="question-entry-item question-entry-item--large mnks">
        <image class="icon" src="../../static/icon-mnks.png" />
        <image class="nail" src="../../static/icon-zy.png" />
        <view class="info">
          <view class="info-title">模拟考试</view>
          <view class="info-desc">智能组卷评测</view>
        </view>
      </view>
      <view class="question-entry-item m-l">
        <image class="icon" src="../../static/icon-sttz.png" />
        <view class="title"> 刷题挑战</view>
      </view>
      <view class="question-entry-item">
        <image class="icon" src="../../static/icon-zzct.png" />
        <view class="title"> 自主出题</view>
      </view>
      <view class="question-entry-item">
        <image class="icon" src="../../static/icon-scj.png" />
        <view class="title"> 收藏夹</view>
      </view>
      <view class="question-entry-item m-r">
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
import { mapActions, mapGetters } from "vuex";
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
      clockInData: [
        {
          name: "打卡天数",
          value: 169,
        },
        {
          name: "答题总数",
          value: 9999,
        },
        {
          name: "今日正确率",
          value: 98.99,
        },
      ],
    };
  },
  onLoad() {
    this.getAppInfo();
  },
  computed: {
    ...mapGetters(["organization_id"]),
  },
  methods: {
    ...mapActions(["getAppInfo"]),
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
    }
  }
  .card {
    margin: 40rpx 0;
    border-radius: 16rpx;
    box-shadow: 0 0 10rpx rgba(93, 207, 255, 0.3);
    &--primary {
      background-color: @primary;
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
        &:not(:last-child) {
          margin-right: 50rpx;
        }
        &-title {
          color: #999;
          font-size: 24rpx;
        }
        &-value {
          color: #333;
          font-size: 40rpx;
        }
        &.img {
          position: relative;
          padding-left: 50rpx;
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
      background-color: #fff;
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
        image {
          width: 40rpx;
          height: 40rpx;
          border-radius: 50%;
        }
      }
      &-right {
        /deep/.van-button {
          border-radius: 10rpx;
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
