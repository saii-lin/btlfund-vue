<template>
  <div class="footer">
    <div class="footer_content">
      <h2 class="footer_title">{{ $t("footer.WealthBuildingIsTheMasteringOfQualityAndQuantity") }}</h2>
      <ul class="footer_flex footer_ul1">
        <li class="footer_follow">{{ $t("footer.FollowUs") }}</li>
        <!-- <li>
          <a href>
            <img src="/images/footer1.png" alt />
          </a>
        </li>-->
        <li>
          <a href>
            <img src="/images/footer2.png" alt />
          </a>
        </li>
        <!-- <li>
          <a href>
            <img src="/images/footer3.png" alt />
          </a>
        </li>-->
        <li>
          <a href>
            <img src="/images/footer4.png" alt />
          </a>
        </li>
      </ul>
      <ul class="footer_flex footer_ul2">
        <li>{{ $t("footer.©2020-BTLAssetManagementCompanyLtd") }}</li>
        <li class="footer_line">
          <!-- <a href>{{ $t("footer.FAQ") }}</a> -->
          <nuxt-link :to="localePath('/resource-and-education-center/qa')">{{ $t("footer.FAQ") }}</nuxt-link>
        </li>
        <li>
          <a href>{{ $t("footer.Disclaimers&PrivacyPolicyStatements") }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer {
  background: #0f4c81;
}
.footer_content {
  padding: 100px;
}
.footer_title {
  font-size: 40px;
  color: #fff;
  text-align: center;
  position: relative;
  margin-bottom: 50px;
}
.footer_title::after {
  content: "";
  position: absolute;
  top: 200%;
  left: 0;
  bottom: 0;
  right: 0;
  border-bottom: 1px solid #fff;
  width: 500px;
  margin: auto;
}
.footer_flex {
  list-style: none;
  display: flex;
  justify-content: center;
}

.footer_flex li {
  color: #fff;
  font-size: 14px;
  padding: 10px;
}
.footer_ul1 img {
  width: 28px;
}
.footer_ul2 li {
  padding: 20px;
}
.footer_follow {
  font-size: 22px !important;
}
.footer_line {
  position: relative;
}
.footer_line::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  bottom: 0;
  right: 0;
  transform: translatey(-50%);
  border-right: 1px solid #fff;
  height: 10px;
}
.footer_line::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  bottom: 0;
  right: 0;
  transform: translatey(-50%);
  border-left: 1px solid #fff;
  height: 10px;
}
@media screen and (max-width: 500px) {
  .footer_title {
    font-size: 30px;
    margin-bottom: 20px;
    padding: 5px;
  }
  .footer_content {
    padding: 20px;
  }
  .footer_title::after {
    top: 120%;
    width: 200px;
  }
  .footer_ul1 li {
    padding: 5px;
  }
  .footer_ul2 {
    display: grid;
  }
  .footer_ul2 li {
    text-align: center;
    padding: 5px;
  }
  .footer_line::after {
    border-right: 0px solid #fff;
  }
  .footer_line::before {
    border-left: 0px solid #fff;
  }
}
</style>
