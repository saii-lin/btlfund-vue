<template>
  <div class="about">
    <div class="about_content about_content_top">
      <div class="about_pic about_pic1"></div>
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
          <br />
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
      <div class="about_pic about_pic2"></div>
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
  background-size: cover;
}
.about_pic1 {
  background-image: url(/istock/block2-3.png);
}
.about_pic2 {
  background-image: url(/istock/block2-4.png);
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
  margin: 60px 0px 30px;
}
.about_text li {
  font-size: 20px;
  padding-top: 10px;
}
.about_text li strong {
  margin-left: 10px;
}
.about_text_top p {
  margin-bottom: 150px;
}
@media screen and (max-width: 1300px) {
  .about_content {
    display: block;
  }
  .about_text {
    margin: 20px auto;
    width: 60vw;
  }
  .about_text_top p {
    margin-bottom: 10px;
  }
  .about_text h3 {
    text-align: center;
  }
  @media screen and (max-width: 414px) {
    .about_text {
      width: 90vw;
    }
    .about_text h3 {
      font-size: 25px;
    }
    .about_text strong {
      font-size: 20px;
    }
    .about_text p {
      font-size: 14px;
      line-height: 20px;
    }
    .about_text li {
      font-size: 14px;
    }
  }
}
</style>
