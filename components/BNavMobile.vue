<template>
  <div
    :class="['b-nav-mobile', hidden ? 'hidden' : '']"
    :style="{ width: `${width}px` }"
  >
    <div class="to-home-link">
      <nuxt-link :to="localePath('/')">
        <img class="logo_pc" src="/images/Logo.png" alt />
      </nuxt-link>
      <img class="hbg" src="/images/bg.png" alt @click="active1 = !active1" />
    </div>
    <ul :class="['menu_ph', active1 ? 'active' : '']">
      <li class="menu_ph_title" @click="active2 = !active2">
        <div class="title_flex">
          {{ $t("index.nav.AboutUs") }}
          <div class="triangle4"></div>
        </div>

        <ul :class="['menu_ph_content', active2 ? 'active' : '']">
          <li>
            <nuxt-link :to="localePath('/about-us/intro')">{{
              $t("aboutus.Intro")
            }}</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('/about-us/our-core-values')">{{
              $t("aboutus.OurCoreValues")
            }}</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('/about-us/our-clients')">{{
              $t("aboutus.OurClients")
            }}</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('$t:index.nav.GoogleMap')">{{
              $t("aboutus.OurLocation")
            }}</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('/about-us/global-presence')">{{
              $t("aboutus.GlobalPresence")
            }}</nuxt-link>
          </li>
        </ul>
      </li>
      <li class="menu_ph_title" @click="active3 = !active3">
        <div class="title_flex">
          {{ $t("index.nav.WhatWeDo") }}
          <div class="triangle4"></div>
        </div>
        <ul :class="['menu_ph_content', active3 ? 'active' : '']">
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
      </li>
      <li class="menu_ph_title">
        <nuxt-link :to="localePath('/market-insight/market-commentary')">{{
          $t("index.nav.MarketInsight")
        }}</nuxt-link>
      </li>
      <li class="menu_ph_title">
        <nuxt-link :to="localePath('/forms/brokerage-forms')">{{
          $t("index.nav.Forms")
        }}</nuxt-link>
      </li>
      <li class="menu_ph_title" @click="active4 = !active4">
        <div class="title_flex">
          {{ $t("index.nav.ResourcesAndEducationCenter") }}
          <div class="triangle4"></div>
        </div>
        <ul :class="['menu_ph_content', active4 ? 'active' : '']">
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
                  '/resource-and-education-center/digital-structure-note'
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
      </li>
      <li class="menu_ph_title">
        <nuxt-link :to="localePath('/#contactus')">{{
          $t("index.block6.ContactUs")
        }}</nuxt-link>
      </li>
      <li class="menu_ph_title" @click="active5 = !active5">
        <div class="title_flex">
          {{ $t("index.nav.Language") }}
          <div class="triangle4"></div>
        </div>
        <ul :class="['menu_ph_content', active5 ? 'active' : '']">
          <li>
            <nuxt-link :to="switchLocalePath('en-us')">Eng</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="switchLocalePath('zh-tw')">繁</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="switchLocalePath('zh-cn')">简</nuxt-link>
          </li>
        </ul>
      </li>
      <li></li>
    </ul>
  </div>
</template>
<script>
import navItems from "@/assets/json/nav-items.json";
export default {
  props: {
    hidden: {
      type: Boolean
    },
    width: {
      type: Number
    }
  },
  data: () => ({
    active1: false,
    active2: false,
    active3: false,
    active4: false,
    active5: false
  }),
  watch: {
    $route(to, from) {
      this.active1 = false;
    }
  }
};
</script>

<style>
.b-nav-mobile {
  position: fixed;
  top: 0px;
  transition: top 0.3s;
  z-index: 99;
  background: #fff;
}
.b-nav-mobile.hidden {
  top: -150px;
}
.b-nav-mobile ul {
  list-style: none;
}
.language {
  display: flex;
}
.language a {
  color: #0f4c81;
  text-decoration: none;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
}
.navbar {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: end;
  height: 100%;
  margin-right: 10px;
}
.to-home-link {
  justify-self: start;
  display: flex;
}
.logo_pc {
  width: 400px;
  padding: 10px 20px;
}
.navbar-grid {
  display: grid;
  grid-template-columns: 4fr repeat(5, 1fr);
  justify-items: center;
  align-items: center;
  width: 400px;
}
.navbar-grid .search {
  border-color: #cdd2d1;
  border-radius: 10px;
  border-style: solid;
  padding: 5px;
}
.navbar-grid .search:focus {
  border-color: #0f4c81;
  outline: none;
}
.search_pic {
  width: 35px;
}
.login {
  width: 27px;
  margin-left: 15px;
}
.nav {
  width: 100%;
  background: white;
}
.menu {
  display: grid;
  background-color: #0f4c81;
  justify-items: end;
  height: 50px;
}
.menu-grid {
  display: flex;
  justify-content: flex-end;
  height: 100%;
  margin: 0px 50px 0px 0px;
}
.menu-grid > li {
  display: grid;
  align-content: center;
  margin-right: 25px;
  font-weight: bold;
  color: white;
  position: relative;
  height: 100%;
  padding: 0px 25px;
  cursor: pointer;
}
.menu-grid > li:hover {
  background-color: white;
  color: #0f4c81;
}
.sub-menu-grid {
  position: absolute;
  background: white;
  padding: 0px;
  margin-top: 50px;
  /* margin-left: -20px; */
  color: #0f4c81;
  display: none;
}
.sub-menu-grid li {
  padding: 10px 20px;
  width: 300px;
  cursor: pointer;
}
.menu-grid > li:hover > .sub-menu-grid {
  display: block;
}
.sub-menu-grid li:hover {
  background-color: #0f4c81;
  color: white;
}
/* ------------ph------------ */
.hbg {
  width: 45px;
  height: 40px;
  margin-top: 12px;
}
.menu_ph {
  background: #6699cc;
  height: 0;
  overflow: hidden;
  transition: 0.5s;
}
.menu_ph.active {
  background: #6699cc;
  height: calc(100vh - 76px);
  overflow-y: scroll;
}
.menu_ph_title {
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  overflow: hidden;
}
.menu_ph_content {
  font-size: 14px;
  height: 0;
  transition: 0.5s;
}
.menu_ph_content.active {
  height: auto;
}
.menu_ph > li {
  padding: 10px;
}
.menu_ph_content > li {
  padding: 15px;
}
.title_flex {
  display: flex;
}
.triangle4 {
  border-color: #fff transparent transparent transparent;
  border-style: solid solid solid solid;

  /* 設定邊框依上、下；左右，各為一群組，相同群組須設定為相同尺寸，調整尺寸可拼湊出任意形狀的三角形 */
  border-width: 10px 5px 3px 5px;

  /* 設定 width、height 可更好理解原理 */
  height: 0px;
  width: 0px;
  margin: 5px;
}
@media screen and (max-width: 414px) {
  .logo_pc {
    width: 300px;
  }
}
</style>
