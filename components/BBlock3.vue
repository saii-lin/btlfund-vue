<template>
  <div class="about">
    <div class="about_content about_content_top">
      <div class="about_pic about_pic1"></div>
      <div class="about_text about_text_top">
        <h3>{{ $t("index.block3.MarketInsightTitle") }}</h3>
        <p>{{ $t("index.block3.MarketInsightTitleContent") }}</p>
      </div>
    </div>
    <div class="about_content about_content_bottom">
      <div class="about_text about_text_bottom">
        <h3>{{ $t("index.block3.E-T-H-I-C") }}</h3>
        <ul>
          <li>
            <strong>{{ $t("index.block3.E") }}</strong>
            {{ $t("index.block3.xcellence") }}
          </li>
          <li>
            <strong>{{ $t("index.block3.T") }}</strong>
            {{ $t("index.block3.eamSpirit") }}
          </li>
          <li>
            <strong>{{ $t("index.block3.H") }}</strong>
            {{ $t("index.block3.ardWork") }}
          </li>
          <li>
            <strong>{{ $t("index.block3.I") }}</strong>
            {{ $t("index.block3.ntegrity") }}
          </li>
          <li>
            <strong>{{ $t("index.block3.C") }}</strong>
            {{ $t("index.block3.onsideration") }}
          </li>
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
  width: 50vw;
  margin: 20px;
  height: calc(40vw * 0.76);
  background-size: cover;
}
.about_pic1 {
  background-image: url(/images/block3-1.jpg);
}
.about_pic2 {
  background-image: url(/images/block3-2.jpg);
}
.about_text {
  width: 25vw;
  align-self: center;
}
.about_text h3,
.about_text p {
  margin: 10px 20px 0;
}
.about_text h3 {
  color: #0f4c81;
  font-size: calc(2.5rem + 1vw);
}
.about_content_bottom h3 {
  color: #fff;
}
.about_text p {
  font-size: 20px;
  line-height: 30px;
}
/* .about_text p,
.about_text li {
  font-style: italic;
} */
.about_text strong {
  color: #3c2373;
  font-size: 36px;
}
.about_text ul {
  list-style: square inside url("/images/list.png");
  margin: 0px 0px;
}
.about_text li {
  font-size: 20px;
  padding-top: 5px;
}
.about_text li strong {
  margin-left: 10px;
}
.about_text_top p {
  margin-bottom: 150px;
}
.about_content_top {
  margin-bottom: 80px;
}
.about_content_bottom {
  background: #cdd2d1;
}
@media screen and (max-width: 1000px) {
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
  .about_pic {
    margin: 10px auto;
    width: 60vw;
  }
}
@media screen and (max-width: 414px) {
  .about {
    margin-top: 30px;
  }
  .about_pic {
    width: 100vw;
    margin: 0px;
    height: calc(100vw * 0.76);
  }
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
    text-align: justify;
    
  }
  .about_text li {
    font-size: 14px;
  }
  .about_content {
    margin: 0px;
  }
  .about_text_bottom{
    padding: 20px;
  }
}
</style>
