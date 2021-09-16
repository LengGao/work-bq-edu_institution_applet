<template>
  <view class="lgoin">
    <view class="logo">
      <image :src="appInfo.logo" />
    </view>
    <view class="bc-img">
      <image src="../../static/auth-bc.png" />
    </view>
    <button class="btn" @click="getUserInfo" :disabled="!active" type="primary">
      授权登录
    </button>
    <view class="tips"> 申请获取您的公开信息(昵称、头像等) </view>
    <view class="view">
      <van-radio-group :value="active" @change="onChecked">
        <van-radio name="1" shape="square">我已阅读并同意</van-radio>
      </van-radio-group>
      <view class="link" @click="to">《用户协议和隐私政策》</view>
    </view>
  </view>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { getSign } from "@/api/user";
export default {
  data() {
    return {
      userInfo: null,
      radioVal: "",
      active: "",
    };
  },
  computed: {
    ...mapGetters(["appInfo"]),
  },
  methods: {
    to() {
      uni.navigateTo({
        url: `/pages/login/agreement`,
      });
    },
    onChecked() {
      this.active = this.active === "1" ? "" : "1";
    },
    async getUserInfo() {
      const { iv, encryptedData } = await this.wxGetUserInfo();
      console.log(encryptedData);
      if (iv) {
        uni.setStorageSync("iv", iv);
        uni.setStorageSync("encryptedData", encryptedData);
        uni.navigateTo({
          url: `/pages/login/getPhone`,
        });
      }
    },
    wxGetUserInfo() {
      return new Promise((resolve, reject) => {
        uni.getUserProfile({
          desc: "用于完善用户信息",
          success: resolve,
          fail: reject,
        });
      });
    },
  },
};
</script>

<style lang="less" scoped>
.view {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28rpx;
  margin-top: 60rpx;
  /deep/.van-radio__label {
    color: #999999;
  }
  .link {
    color: #199fff;
  }
}
.lgoin {
  padding: 40rpx;
  .logo {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 60rpx 0 140rpx 0;
    image {
      width: 320rpx;
      height: 94rpx;
    }
  }
  .bc-img {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 140rpx;
    image {
      width: 550rpx;
      height: 366rpx;
    }
  }
  .tips {
    text-align: center;
    color: #999999;
    margin-top: 30rpx;
  }
  .btn {
    border-radius: 60rpx;
    background-color: #07c160;
    width: 500rpx;
  }
}
</style>
