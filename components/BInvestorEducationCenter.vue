<template>
  <div class="iec">
    <h2>Investor Education Center</h2>
    <div class="iec_in">
      <div class="iec_text">
        <ul>
          <li>
            <a href>Bond></a>
          </li>
          <li>
            <a href>CBBC></a>
          </li>
          <li>
            <a href>Digital Structure Note></a>
          </li>
          <li>
            <a href>Equity Linked Notes></a>
          </li>
        </ul>
        <div class="more">more</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.iec h2 {
  font-size: 50px;
  color: #002f6c;
  text-align: center;
}
.iec_in {
  background: url(/images/index5.jpeg);
  height: 85vh;
  position: relative;
}
.iec_text {
  background: rgba(255, 255, 255, 0.8);
  width: 500px;
  min-height: 300px;
  position: absolute;
  bottom: 0;
}
.iec_text a {
  color: #000;
  text-decoration: none;
  font-size: 30px;
  transition: 0.5s;
}
.iec_text a:hover {
  color: rgb(92, 92, 92);
}
.iec_text li {
  padding: 10px;
}
</style>