<template>
  <view class="lgoin">
    <view class="logo">
      <image
        src="https://img2.baidu.com/it/u=3355464299,584008140&fm=26&fmt=auto&gp=0.jpg"
      />
    </view>
    <view class="tips">
      <view class="tips-title">申请获取以下权限</view>
      <view class="tips-content">获取你的公开信息（昵称，头像,手机号等）</view>
    </view>
    <button
      class="btn"
      v-if="userInfo"
      open-type="getPhoneNumber"
      type="primary"
      @getphonenumber="getPhoneNumber"
    >
      授权手机号码
    </button>
    <button class="btn" v-else @click="getUserInfo" type="primary">
      授权登录
    </button>
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
    ...mapGetters(["organization_id"]),
  },
  onLoad() {
    this.wxLogin();
  },
  methods: {
    ...mapActions(["setUserInfo"]),
    async getSign() {
      const data = {
        code: this.wxCode,
        organization_id: this.organization_id,
        mobile: {
          iv: this.phoneInfo.iv,
          encryptedData: this.phoneInfo.encryptedData,
        },
        user: {
          iv: this.userInfo.iv,
          encryptedData: this.userInfo.encryptedData,
        },
      };
      const res = await getSign(data);
      if (res.error_code === 0) {
        this.setUserInfo(res.data);
        uni.redirectTo({
          url: "/pages/index/index",
        });
      }
    },
    async getUserInfo(e) {
      const res = await this.wxGetUserInfo();
      // .catch(() => {
      //   uni.showToast({
      //     icon: "error",
      //     title: "授权失败",
      //   });
      // });
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
    height: 30vh;
    border-bottom: 1rpx solid #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 60rpx;
    image {
      width: 200rpx;
      height: 200rpx;
      border-radius: 50%;
    }
  }
  .tips {
    margin-bottom: 60rpx;
    &-title {
      color: #666666;
      font-size: 32rpx;
    }
    &-content {
      font-size: 28rpx;
      color: #999;
    }
  }
  .btn {
    border-radius: 60rpx;
  }
}
</style>
