<template>
  <div class="block5">
    <h2>RESCOURCES AND EDUCATION CENTER</h2>
    <div class="block5_pic"></div>
    <div class="block5_content">
      <div class="block5_icon">
        <div class="block5_icon1">
          <a href>
            <v-img
              :width="size"
              :height="size"
              src="/istock/block4-2.png"
            ></v-img>
            <p>Bond</p>
          </a>
        </div>
        <div class="block5_icon1">
          <a href>
            <v-img
              :width="size"
              :height="size"
              src="/istock/block4-3.png"
            ></v-img>
            <p>
              Digital Structure Note
            </p>
          </a>
        </div>
        <div class="block5_icon1">
          <a href>
            <v-img
              :width="size"
              :height="size"
              src="/istock/block4-4.png"
            ></v-img>
            <p>
              Equity Linked Notes
            </p>
          </a>
        </div>
        <div class="block5_icon1">
          <a href>
            <v-img
              :width="size"
              :height="size"
              src="/istock/block4-5.png"
            ></v-img>
            <p>
              Equity Structured Products Accumulator / De-cumulator
            </p>
          </a>
        </div>
      </div>
      <div class="block5_icon">
        <div class="block5_icon1">
          <a href>
            <v-img
              :width="size"
              :height="size"
              src="/istock/block4-6.png"
            ></v-img>
            <p>
              Exchange Traded Fund
            </p>
          </a>
        </div>
        <div class="block5_icon1">
          <a href>
            <v-img
              :width="size"
              :height="size"
              src="/istock/block4-7.png"
            ></v-img>
            <p>Options</p>
          </a>
        </div>
        <div class="block5_icon1">
          <a href>
            <v-img
              :width="size"
              :height="size"
              src="/istock/block4-8.png"
            ></v-img>
            <p>Glossary</p>
          </a>
        </div>
        <div class="block5_icon1">
          <a href>
            <v-img
              :width="size"
              :height="size"
              src="/istock/block4-9.png"
            ></v-img>
            <p>Q&amp;A</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    size: 150
  })
};
</script>

<style scoped>
.block5 {
  background: #cdd2d1;
}
.block5 h2 {
  background: #0f4c81;
  color: #fff;
  padding: 20px;
  font-size: 50px;
  text-align: center;
  margin: 0;
}
.block5_pic {
  background-image: url(/istock/block4-1.png);
  background-size: cover;
  background-position-y: bottom;
  width: 100%;
  height: 1000px;
}
.block5_icon {
  display: flex;
  justify-content: center;
}
.block5_icon a {
  color: #000;
  text-decoration: none;
}
.block5_icon p {
  font-size: 20px;
  text-align: center;
}
.block5_icon1 {
  width: 20vw;
  margin: 30px;
}
.block5_icon1 p {
  font-size: 25px;
  padding: 10px;
}
.block5_icon1 .v-image {
  margin: 0 auto;
  display: block;
  transition: 0.5s;
}
.block5_icon1 .v-image:hover {
  transform: translateY(-15px);
}
</style>
