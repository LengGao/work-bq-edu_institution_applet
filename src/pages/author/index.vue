<template>
  <view class="content">
    <view>
      <text class="title">{{ title }}</text>
      <van-button type="success" @click="getVersion">默认按钮</van-button>
    </view>
  </view>
</template>

<script>
import { getVersion } from "@/api/user";
export default {
  data() {
    return {
      title: "我的",
    };
  },
  onLoad() {},
  methods: {
    async getVersion() {
      const data = {
        appId: "wxb8322f5e02dbbc3d",
      };
      const res = await getVersion(data);
      console.log(res);
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  .title {
    color: red;
  }
}
</style>
