<template>
  <div class="about">
    <h2>About Us</h2>
    <div class="about_icon">
      <div>
        <img src="/images/icon1.png" alt />
        <p>Securities</p>
      </div>
      <div>
        <img src="/images/icon2.png" alt />
        <p>Suggest</p>
      </div>
      <div>
        <img src="/images/icon3.png" alt />
        <p>Futures</p>
      </div>
      <div>
        <img src="/images/icon4.png" alt />
        <p>Asset Management</p>
      </div>
    </div>
    <div class="about_text">
      BTL Asset Management Company Limited ("BTL") is duly authorized and licensed by the Hong Kong Securities and Futures Commission to conduct business in Types 1, 2, 4, 5 & 9 regulated activities, namely dealing in securities through other securities dealers and advising on securities and future contracts, as well as asset management.
      <div class="more about_more">more</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.about {
  background: #f7f7f7;
  min-height: 70vh;
}
.about h2 {
  font-size: 50px;
  color: #002f6c;
  text-align: center;
  padding: 10px;
}
.about_icon {
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
}
.about_icon p,
.about_text {
  color: #002f6c;
}
.about_icon p {
  text-align: center;
  font-weight: bold;
  font-size: 25px;
}
.about_text {
  font-size: 20px;
  line-height: 30px;
  padding: 40px;
  margin-top: 50px;
}
.about_more {
  margin: 70px 30px 0px;
}
</style>