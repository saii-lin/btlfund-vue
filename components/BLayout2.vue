<template>
  <div class="layout2" :style="{ backgroundImage: `url(${data.image})` }">
    <div class="layout2_text">
      <div class="layout2_title layout2_title1">{{ data.title }}</div>
      <div class="layout2_title layout2_title2">{{ data.subTitle }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.layout2 {
  width: 100%;
  height: 80vh;
  background-size: cover;
  position: relative;
}
.layout2_text {
  background: rgba(255, 255, 255, 0.8);
  position: absolute;
  bottom: 0;
}
.layout2_title {
  font-size: 50px;
  padding: 10px;
  color: #333333;
  font-weight: bold;
}
.layout2_title2 {
  margin-left: 170px;
}
@media screen and (max-width: 414px) {
  .layout2_title2 {
    margin-left: 0px;
  }
}
</style>
