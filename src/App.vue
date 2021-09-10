<script>
import { getVersion } from "@/api/user";

export default {
  onLaunch: function () {
    this.getVersion();
    console.log("App Launch");
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
  methods: {
    async getVersion() {
      const data = {
        appId: "wxb8322f5e02dbbc3d",
      };
      const res = await getVersion(data);
      console.log(res);
    },
  },
};
</script>

<style lang="less" >
/*每个页面公共css */
@import "@/wxcomponents/vant/common/index.wxss";
@import "@/styles/index.less";
</style>
