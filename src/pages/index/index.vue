<template>
  <view class="index">
    <view>
      <van-button type="info" @click="openSheet">信息按钮</van-button>
    </view>
    <view class="card">
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
.index {
  padding: 32rpx;
  .card {
    margin: 40rpx 0;
    border-radius: 16rpx;
    box-shadow: 0 0 10rpx rgba(93, 207, 255, 0.3);
    background-color: #199fff;
    &-title {
      padding: 32rpx;
      display: flex;
      align-items: center;
      color: #fff;
      &::before {
        content: "";
        width: 8rpx;
        height: 40rpx;
        background-color: #fff;
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
}
</style>
