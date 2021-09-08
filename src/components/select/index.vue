<template>
  <view class="select">
    <i-option
      @change="onOptionChange"
      v-for="(item, index) in options"
      :label="letter[index]"
      :value="item.value"
      :key="index"
      :status="status(item.value)"
      :noletter="noletter"
      >{{ item.text }}</i-option
    >
  </view>
</template>
<script>
import IOption from "../option";
export default {
  name: "select",
  components: {
    IOption,
  },
  props: {
    noletter: {
      type: Boolean,
      default: false,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [Array, String, Number],
      default: "",
    },
    options: {
      type: Array,
      default: () => [],
    },
    answer: {
      type: [Array, String, Number],
      default: "",
    },
  },
  data() {
    return {
      checkedVal: this.value,
      letter: {
        0: "A",
        1: "B",
        2: "C",
        3: "D",
        4: "E",
        5: "F",
        6: "G",
        7: "H",
        8: "R",
        9: "J",
      },
    };
  },

  watch: {
    checkedVal(newValue, oldValue) {
      if (this.multiple) {
        this.$emit("input", newValue);
        return;
      }
      if (newValue !== oldValue) {
        this.$emit("input", newValue);
      }
    },
  },
  methods: {
    status(value) {
      if (this.multiple) {
        if (this.answer.length) {
          if (this.answer.includes(value)) {
            return "success";
          }
          if (this.checkedVal.includes(value) && !this.answer.includes(value)) {
            return "error";
          }
        }
        if (this.checkedVal.includes(value)) {
          return "active";
        }
        return "";
      } else {
        // 单选下的状态
        if (this.answer) {
          if (value == this.answer) {
            return "success";
          }
          if (value != this.answer && this.checkedVal === value) {
            return "error";
          }
        }
        if (value === this.checkedVal) {
          return "active";
        }
        return "";
      }
    },
    onOptionChange(val) {
      // 多选
      if (this.multiple) {
        if (!this.answer.length) {
          //已经选了就去掉
          if (this.checkedVal.includes(val)) {
            this.checkedVal = this.checkedVal.filter((item) => item !== val);
          } else {
            this.checkedVal.push(val);
          }
        } else {
          uni.showToast({
            icon: "none",
            title: "已经答过了",
          });
        }
      } else {
        //单选
        if (!this.answer) {
          this.checkedVal = val;
        } else {
          uni.showToast({
            icon: "none",
            title: "已经答过了",
          });
        }
      }
    },
  },
};
</script>
<style lang="less" scoped>
</style>