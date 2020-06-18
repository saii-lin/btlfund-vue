<template>
  <div class="block5">
    <h2>RESCOURCES AND EDUCATION CENTER</h2>
    <div class="block5_pic"></div>
    <div class="block5_content">
      <div class="block5_icon">
        <div class="block5_icon1">
          <a href>
            <img src="/images/icon1.png" alt />
            <p>Bond</p>
          </a>
        </div>
        <div class="block5_icon1">
          <a href>
            <img src="/images/icon2.png" alt />
            <p>
              Digital Structure
              Note
            </p>
          </a>
        </div>
        <div class="block5_icon1">
          <a href>
            <img src="/images/icon3.png" alt />
            <p>
              Equity Linked
              Notes
            </p>
          </a>
        </div>
        <div class="block5_icon1">
          <a href>
            <img src="/images/icon4.png" alt />
            <p>
              Equity Structured
              Products Accumulator
              / De-cumulator
            </p>
          </a>
        </div>
      </div>
      <div class="block5_icon">
        <div class="block5_icon1">
          <a href>
            <img src="/images/icon5.png" alt />
            <p>
              Exchange Traded
              Fund
            </p>
          </a>
        </div>
        <div class="block5_icon1">
          <a href>
            <img src="/images/icon6.png" alt />
            <p>Options</p>
          </a>
        </div>
        <div class="block5_icon1">
          <a href>
            <img src="/images/icon7.png" alt />
            <p>Glossary</p>
          </a>
        </div>
        <div class="block5_icon1">
          <a href>
            <img src="/images/icon8.png" alt />
            <p>Q&A</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
  background-image: url(/images/iec.jpeg);
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
.block5_icon1 img {
  margin: 0 auto;
  display: block;
  transition: 0.5s;
}
.block5_icon1 img:hover {
  transform: translateY(-15px);
}
</style>