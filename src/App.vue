<script>
import { mapActions } from "vuex";
export default {
  onLaunch: function (options) {
    console.log(options);
    const { scene } = options.query;
    let is_share, question_bank_id;
    if (scene) {
      let paramsStr = decodeURIComponent(scene);
      question_bank_id = this.getQueryString(paramsStr, "q");
      is_share = this.getQueryString(paramsStr, "is_share");
      console.log("question_bank_id=>", question_bank_id);
      console.log("is_share=>", is_share);
    }
    if (question_bank_id) {
      this.$store.dispatch("setQuestionBankInfo", {
        question_bank_id,
      });
    }
    console.log("App Launch");
    const { appid } = wx.getExtConfigSync ? wx.getExtConfigSync() : {};
    console.log(appid);
    this.getAppInfo({ appid, debug: is_share });
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
  methods: {
    ...mapActions(["getAppInfo"]),
    getQueryString(str, name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = str.match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    },
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
