<template>
  <div class="slide">
    <div class="slide_bg">
      <div class="slide_pic">
        <div class="slide_text">
          <h2>Our Mission</h2>
          <p>
            BTL will be trusted to reliably deliver innovative, exemplary and
            high performance financial services and products, for our clients
            whilst upholding the highest standards of integrity and quality.
          </p>
          <div class="more">more</div>
        </div>
        <div class="slide_bar">
          <div class="slide_circle"></div>
          <div class="slide_circle"></div>
          <div class="slide_circle"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.slide_bg {
  background: url(/images/slide2-1.jpg);
  height: 65vh;
  position: relative;
}
.slide_pic {
  background: url(/images/slide2.jpg);
  background-size: cover;
  height: 85vh;
  width: 70vw;
  margin: 0 auto;
}
.slide_text {
  background: rgba(255, 255, 255, 0.8);
  width: 500px;
  position: absolute;
  bottom: 0;
}
.slide_text h2 {
  font-size: 50px;
  padding: 10px;
  margin: 0;
  color: #424746;
}
.slide_text p {
  font-size: 20px;
  line-height: 30px;
  padding: 10px;
  margin: 0;
}
.slide_bar {
  display: flex;
  background: #0f4c8167;
  width: 120px;
  height: 35px;
  border-radius: 10px 10px 0 0;
  position: absolute;
  bottom: -20vh;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-evenly;
}
.slide_circle {
  width: 1px;
  height: 1px;
  background: #eaeaea;
  border-radius: 50%;
  padding: 5px;
  margin-top: 12px;
  transition: 0.5s;
}
.slide_circle:hover {
  background: #424746;
}
.more {
  background: #01579b;
  width: 60px;
  font-size: 20px;
  text-align: center;
  color: #fff;
  padding: 5px;
  float: right;
  margin: 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s;
}
.more:hover {
  background: #4f83cc;
}
</style>
