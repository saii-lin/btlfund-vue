<template>
  <div>
    <img class="logo_pc" src="/images/Logo.png" alt />
    <div class="nav">
      <div class="nav_top">
        <ul class="language">
          <li>
            <nuxt-link :to="switchLocalePath('en-us')">English</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="switchLocalePath('zh-tw')">繁體中文</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="switchLocalePath('zh-cn')">简体中文</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="nav_bottom">
        <ul class="navbar">
          <li>
            <img class="search_pic" src="/images/nav1.png" />
          </li>
          <li>
            <input class="search_text" type="text" placeholder="search" />
          </li>
          <li>
            <a href>
              <img class="login" src="/images/nav2.png" alt />
            </a>
          </li>
          <li @click="navOpened = !navOpened">
            <img class="bg" src="/images/bg.png" alt />
          </li>
        </ul>
      </div>
    </div>
    <div class="menu" v-show="navOpened">
      <ul class="menu_title">
        <li
          :class="{'selected': navItemSelected === navItem.name}"
          v-for="(navItem, index) in navItems"
          :key="index"
          @click="navItemSelected = navItem"
        >
          <a v-if="navItem.link" :href="navItem.link">{{navItem.name}}</a>
          <template v-else>{{navItem.name}}</template>
          <div v-if="!navItem.link" class="triangle"></div>
        </li>
      </ul>
      <ul class="menu_content" v-show="navItemSelected.name && !navItemSelected.link">
        <li v-for="(navItem, index) in subNavItems" :key="index">
          <a :href="navItem.link">{{navItem.name}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import navItems from "@/assets/json/nav-items.json";
export default {
  data: () => ({
    navItems,
    navItemSelected: {
      name: ""
    },
    navOpened: false
  }),
  computed: {
    subNavItems() {
      const target = this.navItems.find(
        item => item.name === this.navItemSelected.name
      );
      return target ? target.subNavItems : [];
    }
  },
  methods: {
    forceToClose() {
      this.navOpened = false;
    }
  }
};
</script>

<style>
div {
  font-family: "微軟正黑體";
}
ul {
  list-style: none;
}
.logo_pc {
  width: 400px;
  position: absolute;
  top: 20px;
  left: 20px;
}
.nav_top {
  display: flex;
  justify-content: flex-end;
}
.language {
  display: flex;
}
.language a {
  color: #002f6c;
  text-decoration: none;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
}
.navbar {
  display: flex;
  justify-content: flex-end;
}
.navbar li {
  margin-right: 10px;
}
.search_pic {
  width: 35px;
}
.search_text {
  height: 28px;
  border: 1px solid #002f6c;
  border-radius: 5px;
  background: #e8e8e8;
}
.login {
  width: 27px;
  margin-left: 15px;
}
.bg {
  width: 49px;
  margin-left: 15px;
  cursor: pointer;
}
.menu {
  background: rgba(0, 0, 0, 0.8);
  display: flex;
}
.menu .menu_title {
  background: #4f83cc;
  max-width: 450px;
  min-height: 400px;
  margin: 0;
  padding: 10px;
}
.menu li {
  color: #fff;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  display: flex;
  transition: 0.5s;
}
.menu li a {
  color: #fff;
  text-decoration: none;
  transition: 0.5s;
}
.menu_title li:hover,
.menu_title li a:hover,
.menu_title > li.selected {
  color: #abd3ff;
}
.triangle {
  border-color: transparent transparent transparent #fff;
  border-style: solid solid solid solid;
  border-width: 5px;
  /* 設定 width、height 可更好理解原理 */
  height: 0px;
  width: 0px;
  margin: 8px;
  transition: 0.5s;
}
.menu li:hover .triangle,
.menu_title > li.selected > .triangle {
  border-color: transparent transparent transparent #abd3ff;
}
.menu_content {
  background: #8cbbf2;
  margin: 0;
  min-width: 230px;
  padding: 10px;
}
.menu_content li a:hover {
  color: #002f6c;
}
</style>