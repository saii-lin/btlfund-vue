<template>
  <div class="what">
    <div class="what_top">
      <a href>
        <div class="what_top_ what_top_left">
          <div class="what_text">
            <h3>Asset Management</h3>
            <p>Our investment strategy, customised for and fully transparent to each client, is designed to create steady, long term compounding of wealth.</p>
          </div>
        </div>
      </a>
      <a href>
        <div class="what_top_ what_top_right">
          <div class="what_text">
            <h3>Introducing Brokerage</h3>
            <p>Overview & Benefits</p>
          </div>
        </div>
      </a>
    </div>
    <div class="what_bottom">
      <div class="what_bottom_ what_bottom_left">
        <div class="what_bottom_text">
          <ul>
            <li>Investment Advisory mandates</li>
            <li>Discretionary mandates</li>
            <li>External Asset Manager</li>
            <li>Other Investment Services</li>
          </ul>
        </div>
      </div>
      <div class="what_bottom_font">
        <h2>What we do</h2>
      </div>
      <div class="what_bottom_ what_bottom_right">
        <div class="what_bottom_text">
          <ul>
            <li>Securities</li>
            <li>Other Investment Products</li>
            <li>Futures & Options</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.what {
  margin-top: 200px;
}
.what_top {
  display: flex;
  justify-content: space-evenly;
}
.what_top a {
  text-decoration: none;
}
.what_top_ {
  background-size: cover;
  width: 46vw;
  height: 400px;
}
.what_top a:hover .what_top_ h3,
.what_top a:hover .what_top_ p,
.what_top a:hover .what_text,
.what_bottom_text:hover {
  opacity: 1;
}
.what_top_ h3,
.what_top_ p {
  color: #fff;
  /* opacity: 0; */
  margin: 20px;
  padding-top: 10px;
  transition: 0.5s;
}
.what_text,
.what_bottom_text {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: 0.5s;
}
.what_top_ h3 {
  font-size: 40px;
  position: relative;
}
.what_top_ h3::after {
  content: "";
  position: absolute;
  top: 70px;
  left: 0;
  bottom: 0;
  right: 0;
  border-bottom: 1px solid #fff;
}
.what_top_ p {
  font-size: 20px;
  line-height: 30px;
}
.what_top_left {
  background-image: url(/images/index1.jpeg);
  background-position: center;
}
.what_top_right {
  background-image: url(/images/index2.jpg);
  background-position: center;
}
.what_bottom {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
}
.what_bottom_ {
  width: 35vw;
  height: 300px;
  background-size: cover;
}
.what_bottom_left {
  background-image: url(/images/index3.jpeg);
  background-position: center;
}
.what_bottom_right {
  background-image: url(/images/index4.jpeg);
}

.what_bottom_font h2 {
  font-size: 50px;
  color: #002f6c;
  margin-top: 140px;
}
.what_bottom_text {
  font-size: 20px;
}
.what_bottom_text ul {
  margin: 0;
}
.what_bottom_text li {
  color: #fff;
  padding: 10px;
  cursor: default;
}
</style>