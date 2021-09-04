<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view>
      <text class="title">{{ organization_id }}</text>
      <van-button type="default" @click="handleClick">默认按钮</van-button>
    </view>
  </view>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      title: "Hello",
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
    handleClick() {
      console.log(111);
    },
  },
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
