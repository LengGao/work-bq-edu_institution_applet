<script>
import { mapActions } from "vuex";
export default {
  onLaunch: function () {
    console.log("App Launch");
  },
  onShow: function () {
    this.getAppInfo();
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
  methods: {
    ...mapActions(["getAppInfo"]),
  },
};
</script>

<style lang="less" >
/*每个页面公共css */
@import "@/wxcomponents/vant/common/index.wxss";
@import "@/components/gaoyia-parse/parse.css";
@import "@/styles/index.less";
.wxParse .p {
  padding-bottom: 0;
}
</style>
