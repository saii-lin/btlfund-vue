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
      <div class="what_bottom_left">
        <ul>
          <li>Investment Advisory mandates</li>
          <li>Discretionary mandates</li>
          <li>External Asset Manager</li>
          <li>Other Investment Services</li>
        </ul>
      </div>
      <div class="what_bottom_text">
        <h2>What we do</h2>
      </div>
      <div class="what_bottom_right">
        <ul>
          <li>Securities</li>
          <li>Other Investment Products</li>
          <li>Futures & Options</li>
        </ul>
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
.what_top a:hover .what_text {
  opacity: 1;
}
.what_top_ h3,
.what_top_ p {
  color: #fff;
  opacity: 0;
  margin: 20px;
  padding-top: 10px;
  transition: 0.5s;
}
.what_text {
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
  background: url(/images/index1.jpeg) center;
}
.what_top_right {
  background: url(/images/index2.jpg) center no-repeat;
}
</style>