<template>
  <div class="what">
    <div class="what_content what_content_top">
      <div class="what_pic what_pic1"></div>
      <div class="what_text what_top_text">
        <h3>{{ $t("index.block2.AssetManagementTitle") }}</h3>
        <p>{{ $t("index.block2.AssetManagementTitleContent") }}</p>
      </div>
    </div>
    <div class="what_content what_content_bottom">
      <div class="what_text what_bottom_text">
        <h3>{{ $t("index.block2.IntroducingBrokerageTitle") }}</h3>
        <p>{{ $t("index.block2.IntroducingBrokerageContent") }}</p>
      </div>
      <div class="what_pic what_pic2"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.what {
  margin-top: 150px;
}
.what_content {
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
}
.what_pic {
  width: 30vw;
  margin: 20px;
  height: calc(30vw * 0.76);
  background-size: cover;
}
.what_text {
  width: 40vw;
  align-self: center;
}
.what_text h3,
.what_text p {
  margin: 30px 20px 0;
}
.what_text p {
  font-style: italic;
}
.what_text h3 {
  font-size: calc(2.5rem + 1vw);
}
.what_text p {
  font-size: 20px;
  line-height: 30px;
}
.what_top_text h3 {
  color: #0f4c81;
}
.what_content_bottom {
  background: #cdd2d1;
}
.what_bottom_text h3 {
  color: #fff;
}
.what_pic1 {
  background-image: url(/images/block2-1.jpg);
}
.what_pic2 {
  background-image: url(/images/block2-2.jpg);
}
.what_top_text {
  margin-bottom: 150px;
}
.what_bottom_text {
  margin-bottom: 50px;
}
@media screen and (max-width: 1000px) {
  .what_content {
    display: block;
  }
  .what_text {
    margin: 20px auto;
    width: 60vw;
  }
  .what_text h3 {
    text-align: center;
  }
  .what_bottom_text {
    padding-bottom: 50px;
  }
  .what_pic {
    margin: 0 auto;
    width: 60vw;
  }
}
@media screen and (max-width: 414px) {
  .what {
    margin-top: 50px;
  }
  .what_pic {
    width: 100vw;
    margin: 0px;
    height: calc(100vw * 0.76);
  }
  .what_text h3 {
    font-size: 25px;
  }
  .what_text {
    width: 90vw;
  }
  .what_text p {
    font-size: 14px;
    line-height: 20px;
  }
  .what_bottom_text h3 {
    padding-top: 50px;
  }
}
</style>
