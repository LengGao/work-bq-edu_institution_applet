<script>
import { mapActions } from "vuex";
export default {
  onLaunch: function ({ query }) {
    const { is_share, question_bank_id, question_bank_name } = query;
    if (question_bank_id) {
      this.$store.dispatch("setQuestionBankInfo", {
        question_bank_id,
        question_bank_name,
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
