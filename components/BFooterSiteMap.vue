<template>
  <div class="site-map">
    <div class="site-map__grid">
      <div class="site-map_block">
        <h4>{{ $t("index.nav.AboutUs") }}</h4>
        <ul>
          <li>
            <nuxt-link :to="localePath('/aboutus#intro')">{{
              $t("aboutus.Intro")
            }}</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('/aboutus#our-core-values')">{{
              $t("aboutus.OurCoreValues")
            }}</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('/aboutus#our-clients')">{{
              $t("aboutus.OurClients")
            }}</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('$t:index.nav.GoogleMap')">{{
              $t("aboutus.OurLocation")
            }}</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('/aboutus#global-presence')">{{
              $t("aboutus.GlobalPresence")
            }}</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="site-map_block">
        <h4>{{ $t("index.nav.WhatWeDo") }}</h4>
        <ul>
          <li>
            <nuxt-link :to="localePath('/what-we-do/asset-management')">{{
              $t("whatwedo.AssetManagement")
            }}</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('/what-we-do/introducing-brokerage')">{{
              $t("whatwedo.IntroducingBrokerage")
            }}</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="site-map_block h4_a">
        <h4>{{ $t("index.nav.MarketInsight") }}</h4>
        <ul>
          <li>
            <nuxt-link :to="localePath('/marketinsight#market-commentary')">{{
              $t("marketinsight.MarketCommentary")
            }}</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('/marketinsight#special-editions')">{{
              $t("marketinsight.SpecialEditions")
            }}</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="site-map_block h4_a">
        <h4>{{ $t("index.nav.Forms") }}</h4>
        <ul>
          <li>
            <nuxt-link :to="localePath('/forms#asset-management-forms')">{{
              $t("forms.AssetManagementForms")
            }}</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('/forms#brokerage-forms')">{{
              $t("forms.BrokerageForms")
            }}</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="site-map_block site-map_block_large">
        <h4>{{ $t("index.nav.ResourcesAndEducationCenter") }}</h4>
        <ul>
          <li>
            <nuxt-link
              :to="localePath('/resource-and-education-center/bond')"
              >{{ $t("index.block5.Bond") }}</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              :to="
                localePath(
                  '/resource-and-education-center/digital-structure-notes'
                )
              "
              >{{ $t("index.block5.DigitalStructureNote") }}</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              :to="
                localePath('/resource-and-education-center/equity-linked-notes')
              "
              >{{ $t("index.block5.EquityLinkedNotes") }}</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              :to="
                localePath(
                  '/resource-and-education-center/equity-structured-products-accumulator-decumulator'
                )
              "
              >{{
                $t(
                  "index.block5.EquityStructuredProductsAccumulatorDecumulator"
                )
              }}</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              :to="
                localePath(
                  '/resource-and-education-center/exchange-traded-fund'
                )
              "
              >{{ $t("index.block5.ExchangeTradedFund") }}</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              :to="localePath('/resource-and-education-center/options')"
              >{{ $t("index.block5.Options") }}</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              :to="localePath('/resource-and-education-center/glossary')"
              >{{ $t("index.block5.Glossary") }}</nuxt-link
            >
          </li>
          <li>
            <nuxt-link :to="localePath('/resource-and-education-center/qa')">{{
              $t("index.block5.QA")
            }}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <b-block6 :with-title="false" :font-color="'#ffffff'"></b-block6>
  </div>
</template>

<script>
import BBlock6 from "@/components/BBlock6";
export default {
  components: {
    BBlock6
  }
};
</script>

<style>
.site-map {
  background: #0f4c81;
  padding: 20px 40px;
}
.site-map__grid {
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid #fff;
  padding-bottom: 20px;
  margin-bottom: 40px;
}
.site-map_block h4 {
  margin-bottom: 15px;
  padding-bottom: 10px;
}
.site-map_block h4,
.site-map_block a,
.site-map_block li {
  color: #fff;
  font-size: 18px;
}
.site-map_block li:hover {
  text-decoration: underline;
  color: #cdd2d1;
}
.site-map_block h4 {
  font-size: 22px;
  position: relative;
  margin-bottom: 20px;
}
.site-map_block h4::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-bottom: 1px solid #fff;
}
.site-map_block ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.site-map_block a {
  text-decoration: none;
}
.site-map_block li {
  padding: 5px;
}
.contact ul {
  margin-bottom: 15px;
}
@media screen and (max-width: 1500px) {
  .site-map__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 20px;
  }
  .site-map_block_large {
    grid-column: 2/-1;
  }
  .site-map_block ul {
    margin-bottom: 20px;
  }
}
@media screen and (max-width: 1000px) {
  .site-map_block h4::after {
    width: 300px;
  }
}
@media screen and (max-width: 700px) {
  .site-map__grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
  .site-map_block_large {
    grid-column: 1/-1;
  }
  .site-map_block h4::after {
    width: auto;
  }
  .site-map_block {
    padding-top: 10px;
  }
}
@media screen and (max-width: 414px) {
  .site-map {
    padding: 20px 10px;
  }
  .site-map__grid {
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
  }
  .site-map_block a,
  .site-map_block li {
    font-size: 12px;
  }
  .site-map_block h4::after {
    width: 300px;
  }
}
</style>
