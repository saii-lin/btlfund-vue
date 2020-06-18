<template>
  <div class="what">
    <div class="what_content what_content_top">
      <img class="what_pic" src="/images/index1.jpeg" alt />
      <div class="what_text what_top_text">
        <h3>ASSET MANAGEMENT</h3>
        <p>
          Our investment strategy, customised for and fully transparent to each
          client, is designed to create steady, long term compounding of wealth.
        </p>
      </div>
    </div>
    <div class="what_content what_content_bottom">
      <div class="what_text what_bottom_text">
        <h3>INTRODUCING BROKERAGE</h3>
        <p>
          BTL is committed to serving the introducing brokerage services in most
          of the major equity and futures markets worldwide including Hong Kong
          and US. Our transparent, low commissions and financing rates, and
          support for best price executions minimize your costs to help you
          maximize your returns.
        </p>
      </div>
      <img class="what_pic" src="images/index2.jpg" alt />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.what {
  /* margin-top: 220px; */
}
.what_content {
  display: flex;
  justify-content: center;
}
.what_pic {
  width: 35vw;
  margin: 20px;
}
.what_text {
  width: 35vw;
}
.what_text h3,
.what_text p {
  margin: 60px 20px 0;
}
.what_text h3 {
  font-size: 40px;
}
.what_text p {
  font-size: 20px;
  line-height: 30px;
}
.what_top_text h3 {
  color: #002f6c;
}
.what_content_bottom {
  background: #cdd2d1;
}
.what_bottom_text h3 {
  color: #fff;
}
</style>
