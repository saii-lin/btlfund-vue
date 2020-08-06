<template>
  <div
    class="layout2"
    :style="{ backgroundImage: `url(${data.image})`}"
  >
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
      },
    },
  },
};
</script>

<style scoped>
.layout2 {
  width: 100%;
  height: 600px;
  background-size: cover;
  position: relative;
  /* background-position: center bottom; */
}
.layout2_text {
  background: rgba(255, 255, 255, 0.5);
  position: absolute;
  bottom: 0;
  padding: 10px 0px;
}
.layout2_title {
  font-size: 50px;
  color: #333333;
  font-weight: bold;
  font-family: "MS Gothic", "微軟正黑體", "微軟雅黑體", "Microsoft JhengHei",
    "Arial", "sans-serif";
  text-transform: uppercase;
  padding: 0 10px;
}
/* .layout2_title1{
padding: 10px;
} */
/* .layout2_title2 {
  margin-left: 170px;
} */
@media screen and (max-width: 500px) {
  .layout2_title2 {
    margin-left: 0px;
  }
  .layout2 {
  height: 250px;
}
}
</style>
