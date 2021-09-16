<template>
  <view class="lgoin">
    <view class="logo">
      <image :src="appInfo.logo" />
    </view>
    <view class="bc-img">
      <image src="../../static/iphone-bc.png" />
    </view>
    <button
      class="btn"
      open-type="getPhoneNumber"
      type="primary"
      @getphonenumber="getPhoneNumber"
    >
      授权手机号码
    </button>
    <view class="tips"> 申请获取您的微信绑定手机号 </view>
  </view>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { getSign } from "@/api/user";
export default {
  data() {
    return {
      wxCode: null,
      userInfo: null,
      phoneInfo: null,
    };
  },
  computed: {
    ...mapGetters(["organization_id", "appInfo"]),
  },
  onLoad() {
    this.wxLogin();
  },
  methods: {
    ...mapActions(["setUserInfo", "getAppInfo"]),
    async getSign() {
      const data = {
        code: this.wxCode,
        organization_id: this.organization_id,
        mobile: {
          iv: this.phoneInfo.iv,
          encryptedData: this.phoneInfo.encryptedData,
        },
        user: {
          iv: uni.getStorageSync("iv"),
          encryptedData: uni.getStorageSync("encryptedData"),
        },
      };
      const res = await getSign(data);
      if (res.error_code === 0) {
        this.setUserInfo(res.data);
        this.getAppInfo();
        uni.switchTab({
          url: "/pages/index/index",
        });
      }
    },
    async getUserInfo(e) {
      console.log(111111111);
      const res = await this.wxGetUserInfo();
      if (res) {
        this.userInfo = res;
        uni.showToast({
          icon: "none",
          title: "请继续授权手机号码",
        });
      }
    },
    getPhoneNumber(e) {
      const data = e.detail;
      if (data.iv) {
        this.phoneInfo = data;
        this.getSign();
      } else {
        uni.showToast({
          icon: "error",
          title: "获取失败",
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
    wxLogin() {
      uni.login({
        success: (res) => {
          this.wxCode = res.code;
        },
        fail: () => {
          uni.showToast({
            icon: "error",
            title: "登录失败",
          });
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
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
