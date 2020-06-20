<template>
  <div class="site-map">
    <div class="site-map_block">
      <h4>About Us</h4>
      <ul>
        <li>
          <nuxt-link :to="localePath('/about-us/intro')">{{ $t("aboutus.Intro") }}</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('/about-us/our-core-values')">{{ $t("aboutus.OurCoreValues") }}</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('/about-us/our-clients')">{{ $t("aboutus.OurClients") }}</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('$t:index.nav.GoogleMap')">{{ $t("aboutus.OurLocation") }}</nuxt-link>
        </li>
        <li>
          <nuxt-link
            :to="localePath('/about-us/global-presence')"
          >{{ $t("aboutus.GlobalPresence") }}</nuxt-link>
        </li>
      </ul>
    </div>
    <div class="site-map_block">
      <h4>{{ $t("index.nav.WhatWeDo") }}</h4>
      <ul>
        <li>
          <nuxt-link
            :to="localePath('/what-we-do/asset-management')"
          >{{ $t("whatwedo.AssetManagement") }}</nuxt-link>
        </li>
        <li>
          <nuxt-link
            :to="localePath('/what-we-do/introducing-brokerage')"
          >{{ $t("whatwedo.IntroducingBrokerage") }}</nuxt-link>
        </li>
      </ul>
    </div>
    <div class="site-map_block h4_a">
      <a href>
        <h4>{{ $t("index.nav.MarketInsight") }}</h4>
      </a>
      <ul>
        <li>
          <a href="/market-insight/market-commentary">{{ $t("whatwedo.MarketCommentary") }}</a>
        </li>
        <li>
          <a href="/market-insight/special-editions">{{ $t("whatwedo.Special Editions") }}</a>
        </li>
      </ul>
    </div>
    <div class="site-map_block h4_a">
      <h4>{{ $t("index.nav.Forms") }}</h4>
      <ul>
        <li>
          <a href="/forms/asset-management-forms">{{ $t("forms.AssetManagementForms") }}</a>
        </li>
        <li>
          <a href="/forms/brokerage-forms">{{ $t("forms.BrokerageForms") }}</a>
        </li>
      </ul>
    </div>
    <div class="site-map_block">
      <h4>Resources and Education Center</h4>
      <ul>
        <li>
          <nuxt-link
            :to="localePath('/resource-and-education-center/bond')"
          >{{ $t("index.block5.Bond") }}</nuxt-link>
        </li>
        <li>
          <nuxt-link
            :to="localePath('/resource-and-education-center/digital-structure-note')"
          >{{ $t("index.block5.DigitalStructureNote") }}</nuxt-link>
        </li>
        <li>
          <nuxt-link
            :to="localePath('/resource-and-education-center/equity-linked-notes')"
          >{{ $t("index.block5.EquityLinkedNotes") }}</nuxt-link>
        </li>
        <li>
          <nuxt-link
            :to="localePath('/resource-and-education-center/equity-structured-products-accumulator-decumulator')"
          >{{ $t("index.block5.EquityStructuredProductsAccumulatorDecumulator") }}</nuxt-link>
        </li>
        <li>
          <nuxt-link
            :to="localePath('/resource-and-education-center/exchange-traded-fund')"
          >{{ $t("index.block5.ExchangeTradedFund") }}</nuxt-link>
        </li>
        <li>
          <nuxt-link
            :to="localePath('/resource-and-education-center/options')"
          >{{ $t("index.block5.Options") }}</nuxt-link>
        </li>
        <li>
          <nuxt-link
            :to="localePath('/resource-and-education-center/glossary')"
          >{{ $t("index.block5.Glossary") }}</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('/resource-and-education-center/qa')">{{ $t("block5.Q&A") }}</nuxt-link>
        </li>
      </ul>
    </div>
    <div class="site-map_block">
      <h4>{{ $t("index.block6.ContactUs") }}</h4>

      <ul>
        <li>{{ $t("index.block6.Address") }}</li>
        <li>{{ $t("index.block6.12FChungNamBuilding1LockhartRoadHongKong") }}</li>
      </ul>

      <ul>
        <li>{{ $t("index.block6.Hotline") }}</li>
        <li>{{ $t("index.block6.Fax") }}</li>
      </ul>

      <ul>
        <li>{{ $t("index.block6.AssetManagementServices") }}</li>
        <li>ams@btlfund.com.hk</li>
      </ul>

      <ul>
        <li>{{ $t("index.block6.BrokerageServices") }}</li>
        <li>info@btlfund.com.hk</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.site-map {
  background: #0f4c81;
}
.site-map {
  display: flex;
  justify-content: space-evenly;
  padding-top: 20px;
}
.site-map_block h4,
.site-map_block a,
.site-map_block li {
  color: #fff;
  font-size: 14px;
}
.site-map_block h4 {
  font-size: 18px;
  position: relative;
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
  .site-map {
    display: grid;
    grid-template-columns: auto auto auto;
  }
}
@media screen and (max-width: 1000px) {
  .site-map {
    display: grid;
    grid-template-columns: auto auto;
  }
  .site-map_block h4::after {
    width: 300px;
  }
}
@media screen and (max-width: 700px) {
  .site-map {
    display: grid;
    grid-template-columns: auto;
  }
  .site-map_block h4::after {
    width: auto;
  }
  .site-map_block {
    padding-top: 10px;
  }
}
@media screen and (max-width: 414px) {
  .site-map_block a,
  .site-map_block li {
    font-size: 12px;
  }
  .site-map_block h4::after {
    width: 300px;
  }
}
</style>