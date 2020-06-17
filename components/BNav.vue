<template>
  <div :class="['b-nav', hidden ? 'hidden' : '']" :style="{ width: `${width}px` }">
    <div style="position:relative">
      <div class="nav">
        <img class="logo_pc" src="/images/Logo.png" alt />
        <div class="nav_top">
          <ul class="language">
            <li class>
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
            <li @click="openNav">
              <img class="bg" src="/images/bg.png" alt />
            </li>
          </ul>
        </div>
      </div>
      <div :class="['menu', navOpened ? 'opened' : '']">
        <ul class="menu_title">
          <li
            :class="{
              selected: navItemSelected && navItemSelected.name === navItem.name
            }"
            v-for="(navItem, index) in navItems"
            :key="index"
            @click="selectNavItem(navItem)"
          >
            <nuxt-link
              v-if="navItem.link"
              :to="navItem.link"
              @click="forceToClose"
            >{{ navItem.name }}</nuxt-link>
            <template v-else>{{ navItem.name }}</template>
            <div v-if="!navItem.link" class="triangle"></div>
          </li>
        </ul>
        <ul :class="['menu_content', subNavOpened && !navItemSelected.link ? 'opened' : '']">
          <li v-for="(navItem, index) in subNavItems" :key="index" @click="forceToClose">
            <nuxt-link :to="navItem.link">{{ navItem.name }}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
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
    navItems,
    navItemSelected: undefined,
    navOpened: false,
    subNavOpened: false
  }),
  computed: {
    subNavItems() {
      if (!this.navItemSelected) return [];
      const target = this.navItems.find(
        item => item.name === this.navItemSelected.name
      );
      return target ? target.subNavItems : [];
    }
  },
  methods: {
    openNav() {
      if (this.navOpened) {
        this.subNavOpened = false;
        this.navItemSelected = undefined;
      }
      this.navOpened = !this.navOpened;
    },
    forceToClose() {
      this.navOpened = false;
      this.subNavOpened = false;
      this.navItemSelected = undefined;
    },
    selectNavItem(navItem) {
      this.navItemSelected = navItem;
      this.subNavOpened = true;
    }
  }
};
</script>

<style>
.b-nav {
  position: fixed;
  top: 0px;
  transition: top 0.5s;
  z-index: 99;
}
.b-nav.hidden {
  top: -128px;
}
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
.nav {
  position: absolute;
  z-index: 2;
  width: 100%;
  background: white;
  height: 128px;
}
.menu {
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  position: absolute;
  width: 100%;
  height: 420px;
  top: calc(128px - 420px - 10px);
  transition: top 0.5s;
  z-index: 1;
}
.menu.opened {
  top: 128px;
}
.menu .menu_title {
  background: #4f83cc;
  width: 350px;
  margin: 0;
  padding: 10px;
  position: absolute;
  z-index: 2;
  height: calc(100% - 20px);
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
  width: 100%;
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
  width: 400px;
  padding: 10px;
  position: absolute;
  z-index: 1;
  transition: left 0.5s;
  left: calc(370px - 420px);
  height: calc(100% - 20px);
  /* overflow-y: scroll; */
}
.menu_content.opened {
  left: 370px;
}
.menu_content li a:hover {
  color: #002f6c;
}
</style>
