<script>
import { mapActions } from "vuex";
export default {
  onLaunch: function () {
    console.log("App Launch");
    const { appid } = wx.getExtConfigSync ? wx.getExtConfigSync() : {};
    console.log(appid);
    this.getAppInfo({ appid });
  },
  onShow: function () {
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
