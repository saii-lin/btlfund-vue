<template>
  <div class="about">
    <div class="about_content about_content_top">
      <img class="about_pic" src="/istock/block2-3.png" alt />
      <div class="about_text about_text_top">
        <h3>MARKET INSIGHT</h3>
        <p>
          We seek to deliver to our clients leading market insight, helping them
          to raise money, invest, and risk diversification across
          multi-financial asset classes.
        </p>
      </div>
    </div>
    <div class="about_content about_content_bottom">
      <div class="about_text about_text_bottom">
        <h3>
          OUR CORE VALUE:
          <strong>E-T-H-I-C</strong>
        </h3>
        <ul>
          <li><strong>E</strong>xcellence</li>
          <li><strong>T</strong>eam Spirit</li>
          <li><strong>H</strong>ard Work</li>
          <li><strong>I</strong>ntegrity</li>
          <li><strong>C</strong>onsideration</li>
        </ul>
      </div>
      <img class="about_pic" src="/istock/block2-4.png" alt />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.about {
  margin-bottom: 30px;
}
.about_content {
  display: flex;
  justify-content: center;
}
.about_pic {
  width: 35vw;
  margin: 20px;
}
.about_text {
  width: 35vw;
}
.about_text h3,
.about_text p {
  margin: 60px 20px 0;
}
.about_text h3 {
  color: #002f6c;
  font-size: 40px;
}
.about_text p {
  font-size: 20px;
  line-height: 30px;
}
.about_text p,
.about_text li {
  font-style: italic;
}
.about_text strong {
  color: red;
  font-size: 40px;
}
.about_text ul {
  list-style: square inside url("/images/list.png");
  margin: 60px 0px 0;
}
.about_text li {
  font-size: 20px;
  padding-top: 10px;
}
.about_text li strong {
  margin-left: 10px;
}
</style>
