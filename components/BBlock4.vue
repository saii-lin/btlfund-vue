<template>
  <div class="block4">
    <h2>MEET THE TEAM</h2>
    <div class="block4_pic">
      <div class="block4_pic0 block4_pic1">
        <div class="block4_btn0">
          <div class="block4_btn1">Read More</div>
        </div>
      </div>
      <div class="block4_pic0 block4_pic2">
        <div class="block4_btn0">
          <div class="block4_btn1">Read More</div>
        </div>
      </div>
    </div>
    <div class="block4_pic">
      <div class="block4_pic0 block4_pic3">
        <div class="block4_btn0">
          <div class="block4_btn1">Read More</div>
        </div>
      </div>
      <div class="block4_pic0 block4_pic4">
        <div class="block4_btn0">
          <div class="block4_btn1">Read More</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.block4 {
  background: #cdd2d1;
}
.block4 h2 {
  font-size: 50px;
  color: #fff;
  text-align: center;
  padding: 20px;
}
.block4_pic {
  display: flex;
  justify-content: center;
}
.block4_pic0 {
  width: 34vw;
  height: 350px;
  margin: 20px;
  background-size: cover;
}
.block4_btn0,
.block4_btn1 {
  opacity: 0;
  transition: 0.5s;
}
.block4_pic0:hover .block4_btn0,
.block4_pic0:hover .block4_btn1 {
  opacity: 1;
}
.block4_btn0 {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: relative;
}
.block4_btn1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  background: #002f6c;
  padding: 10px;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}
.block4_btn1:hover {
  background: #1057b4;
}
.block4_pic1 {
  background-image: url(/images/index5.jpeg);
}
.block4_pic2 {
  background-image: url(/images/index6.jpeg);
}
.block4_pic3 {
  background-image: url(/images/index7.jpeg);
}
.block4_pic4 {
  background-image: url(/images/index8.jpeg);
}
</style>