<template>
  <view class="author">
    <u-parse :content="appInfo.about_us || '无'" />
  </view>
</template>
<script>
import { mapGetters } from "vuex";
import uParse from "@/components/gaoyia-parse/parse.vue";
export default {
  name: "author",
  components: {
    uParse,
  },
  computed: {
    ...mapGetters(["appInfo"]),
  },
};
</script>
<style lang="less" scoped>
@import "@/styles/var";
.author {
  padding: 30rpx;
}
</style>