<template>
  <view class="select-question">
    <view class="menu">
      <view
        class="menu-item"
        :class="{ 'menu-item--active': activeIndex === index }"
        v-for="(item, index) in typeList"
        :key="index"
        @click="handleClick(index)"
        >{{ item.category_name }}
      </view>
    </view>
    <scroll-view
      class="container"
      scroll-y
      :scroll-into-view="toView"
      scroll-with-animation
    >
      <block v-for="(item, index) in typeList" :key="index">
        <Title color="#199fff" :id="`type-${index}`">{{
          item.category_name
        }}</Title>
        <view class="type-list">
          <view
            :class="{
              'type-list-item--acitve':
                questionBankInfo.question_bank_id === child.question_bank_id,
            }"
            @click="handleSelect(child)"
            class="type-list-item"
            v-for="child in item.question_bank"
            :key="child.question_bank_id"
            >{{ child.question_bank_name }}</view
          >
        </view>
      </block>
      <NoData top="30%" v-if="!typeList.length"
        >暂无题库数据，请联系管理员</NoData
      >
    </scroll-view>
  </view>
</template>
<script>
import Title from "@/components/title";
import { getQuestionBankList } from "@/api/index";
import { mapActions, mapGetters } from "vuex";
import NoData from "@/components/noData";
export default {
  name: "selectQuestionBank",
  components: {
    Title,
    NoData,
  },
  data() {
    return {
      typeList: [],
      activeIndex: 0,
      toView: "",
    };
  },
  onLoad() {
    console.log("selectQuestionBank--onLoad");
  },
  computed: {
    ...mapGetters(["questionBankInfo", "organization_id"]),
  },
  watch: {
    // 请求判断了token，一定要等到getVersion 接口走完才能请求，
    // organization_id 是getVersion 接口返回的,判断organization_id就好了
    organization_id: {
      handler(val) {
        console.log("organization_id", val);
        val && this.getQuestionBankList();
      },
      immediate: true,
    },
  },
  methods: {
    ...mapActions(["setQuestionBankInfo"]),
    async getQuestionBankList() {
      const res = await getQuestionBankList();
      console.log(res);
      this.typeList = res.data;
    },
    handleSelect(data) {
      this.setQuestionBankInfo(data);
      uni.switchTab({
        url: "/pages/index/index",
      });
    },
    handleClick(index) {
      this.activeIndex = index;
      this.toView = "type-" + index;
    },
  },
};
</script>
<style lang="less" scoped>
@import "@/styles/var";
.select-question {
  display: flex;
  height: 100%;
  .menu {
    width: 170rpx;
    flex-shrink: 0;
    padding: 30rpx;
    text-align: center;
    box-sizing: border-box;
    font-size: 26rpx;
    background-color: #f2f6fc;
    border-right: 1rpx dashed #eee;
    &-item {
      margin-bottom: 40rpx;
      padding: 10rpx 0;
      font-weight: bold;
      border-bottom: 2rpx solid #eef5ff;
      &--active {
        border-color: @primary;
        color: @primary;
      }
    }
  }
  .container {
    flex: 1;
    height: 100%;
    padding-left: 20rpx;
    padding-top: 16rpx;
    box-sizing: border-box;
    background-color: #f2f6fc7e;
    position: relative;
    .type-list {
      .flex-c();
      flex-wrap: wrap;
      &-item {
        margin-right: 20rpx;
        margin-bottom: 20rpx;
        width: 260rpx;
        min-height: 120rpx;
        background-color: #fff;
        border-radius: 10rpx;
        padding: 30rpx 26rpx;
        font-size: 26rpx;
        color: #666;
        text-align: center;
        box-sizing: border-box;
        &--acitve {
          color: @primary;
        }
      }
    }
  }
}
</style>