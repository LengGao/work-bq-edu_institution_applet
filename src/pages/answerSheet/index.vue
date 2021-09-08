<template>
  <view class="answer-sheet">
    <Header />
    <view class="content">
      <Title>单选题</Title>
      <view class="circular-list">
        <Circular>1</Circular>
        <Circular type="primary">2</Circular>
        <Circular type="success">3</Circular>
        <Circular type="error">4</Circular>
        <Circular>5</Circular>
        <Circular>6</Circular>
      </view>
      <Title>多选题</Title>
      <view class="circular-list">
        <Circular>1</Circular>
        <Circular type="primary">2</Circular>
        <Circular type="success">3</Circular>
        <Circular type="error">4</Circular>
        <Circular>5</Circular>
        <Circular>6</Circular>
        <Circular type="success">3</Circular>
        <Circular type="error">4</Circular>
        <Circular>5</Circular><Circular type="success">3</Circular>
        <Circular type="error">4</Circular>
        <Circular>5</Circular><Circular type="success">3</Circular>
        <Circular type="error">4</Circular>
        <Circular>5</Circular>
      </view>
      <Title>多选题</Title>
      <view class="circular-list">
        <Circular>1</Circular>
        <Circular type="primary">2</Circular>
        <Circular type="success">3</Circular>
        <Circular type="error">4</Circular>
        <Circular>5</Circular>
        <Circular>6</Circular>
        <Circular type="success">3</Circular>
        <Circular type="error">4</Circular>
        <Circular>5</Circular><Circular type="success">3</Circular>
        <Circular type="error">4</Circular>
        <Circular>5</Circular><Circular type="success">3</Circular>
        <Circular type="error">4</Circular>
        <Circular>5</Circular>
      </view>
      <Title>多选题</Title>
      <view class="circular-list">
        <Circular>1</Circular>
        <Circular type="primary">2</Circular>
        <Circular type="success">3</Circular>
        <Circular type="error">4</Circular>
        <Circular>5</Circular>
        <Circular>6</Circular>
        <Circular type="success">3</Circular>
        <Circular type="error">4</Circular>
        <Circular>5</Circular><Circular type="success">3</Circular>
        <Circular type="error">4</Circular>
        <Circular>5</Circular><Circular type="success">3</Circular>
        <Circular type="error">4</Circular>
        <Circular>5</Circular>
      </view>
      <Title>多选题</Title>
      <view class="circular-list">
        <Circular>1</Circular>
        <Circular type="primary">2</Circular>
        <Circular type="success">3</Circular>
        <Circular type="error">4</Circular>
        <Circular>5</Circular>
        <Circular>6</Circular>
        <Circular type="success">3</Circular>
        <Circular type="error">4</Circular>
        <Circular>5</Circular><Circular type="success">3</Circular>
        <Circular type="error">4</Circular>
        <Circular>5</Circular><Circular type="success">3</Circular>
        <Circular type="error">4</Circular>
        <Circular>5</Circular>
      </view>
    </view>
    <Footer class="footer" />
  </view>
</template>
<script>
import Header from "./components/header.vue";
import Title from "./components/title.vue";
import Circular from "./components/circular.vue";
import Footer from "./components/footer.vue";
export default {
  name: "answerSheet",
  components: {
    Header,
    Title,
    Circular,
    Footer,
  },
  onLoad({ id }) {
    console.log(id);
  },
};
</script>
<style lang="less" scoped>
@import "@/styles/var";
.answer-sheet {
  height: 100%;
  display: flex;
  flex-direction: column;
  .content {
    padding: 20rpx 40rpx;
    flex: 1;
    overflow-y: auto;
    .circular-list {
      display: flex;
      flex-wrap: wrap;
    }
  }
  .footer {
    flex-shrink: 0;
    margin-top: auto;
  }
}
</style>