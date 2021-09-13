<template>
  <view
    class="option"
    :class="status ? `option--${status}` : ''"
    @click="handleClick"
  >
    <view class="option-label">
      <text class="iconfont" v-if="status === 'success'">&#xe60d;</text>
      <text class="iconfont" v-else-if="status === 'error'">&#xe621;</text>
      <text v-else>{{ !noletter ? label : "" }}</text>
    </view>
    <view class="option-text"><slot></slot></view>
  </view>
</template>
<script>
export default {
  name: "option",
  props: {
    noletter: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    value: {
      type: [String, Number],
      default: "",
    },
  },
  computed: {},
  data() {
    return {
      checkedValue: this.value,
    };
  },
  methods: {
    handleClick() {
      this.$emit("change", this.checkedValue);
    },
  },
};
</script>
<style lang="less" scoped>
@import "@/styles/var";
.option {
  border: @border;
  padding: 20rpx 18rpx;
  border-radius: 10rpx;
  display: flex;
  margin-bottom: 30rpx;
  align-items: center;
  &-label {
    width: 44rpx;
    height: 44rpx;
    border-radius: 50%;
    border: @border;
    text-align: center;
    flex-shrink: 0;
    margin-right: 12rpx;
  }
  &--active {
    color: @primary;
    border-color: @primary;
    .option-label {
      border-color: @primary;
      background-color: @primary;
      color: #fff;
    }
    .iconfont {
      color: @primary;
    }
  }
  &--success {
    color: @success;
    border-color: @success;
    .option-label {
      border-color: @success;
      background-color: @success;
      color: #fff;
    }
  }
  &--error {
    color: @error;
    border-color: @error;
    .option-label {
      border-color: @error;
      background-color: @error;
      color: #fff;
    }
    .iconfont {
      color: @error;
    }
  }
}
</style>