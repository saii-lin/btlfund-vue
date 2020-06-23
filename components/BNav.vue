<template>
  <div
    :class="['b-nav', hidden ? 'hidden' : '']"
    :style="{ width: `${width}px` }"
  >
    <div>
      <div class="nav">
        <div class="navbar">
          <nuxt-link class="to-home-link" :to="localePath('/')">
            <img class="logo_pc" src="/images/Logo.png" alt />
          </nuxt-link>
          <ul class="navbar-grid">
            <li>
              <!-- <input class="search" type="text" /> -->
            </li>
            <li>
              <!-- <img src="/images/nav1.png" /> -->
            </li>
            <li>
              <nuxt-link :to="switchLocalePath('en-us')">Eng</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="switchLocalePath('zh-tw')">繁</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="switchLocalePath('zh-cn')">简</nuxt-link>
            </li>
            <li>
              <a href>
                <img src="/images/nav2.png" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="menu">
        <ul class="menu-grid">
          <template v-for="(navItem, index) in navItems">
            <li
              v-if="!navItem.hidden"
              :key="`nav-item-${index}`"
              @click="scrollto(navItem)"
            >
              {{ navItem.name }}
              <ul class="sub-menu-grid" v-if="navItem.subNavItems">
                <template v-for="(subNavItem, jndex) in navItem.subNavItems">
                  <nuxt-link
                    v-if="subNavItem.link.startsWith('/')"
                    :to="
                      localePath(
                        subNavItem.link.startsWith('/$t')
                          ? locale(subNavItem.link)
                          : subNavItem.link
                      )
                    "
                    :key="`nav-item-${index}-${jndex}`"
                  >
                    <li>{{ subNavItem.name }}</li>
                  </nuxt-link>
                  <a
                    v-else
                    :key="`nav-item-${index}-${jndex}`"
                    :href="
                      subNavItem.link.startsWith('$t')
                        ? locale(subNavItem.link)
                        : subNavItem.link
                    "
                    target="_blank"
                  >
                    <li>{{ subNavItem.name }}</li>
                  </a>
                </template>
              </ul>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>
<script src=""></script>
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
    locale(key) {
      return this.$t(key.substr(3));
    },
    scrollto(target) {
      if (target.link) {
        if (this.$route.name.startsWith("index")) {
          this.$scrollTo(target.scrollto, 1000, {
            container: ".body"
          });
        } else {
          this.$router.push({ path: this.localePath("/"), hash: "contactus" });
        }
      }
    }
  }
};
</script>

<style>
.b-nav {
  position: fixed;
  top: 0px;
  transition: top 0.3s;
  z-index: 99;
}
.b-nav.hidden {
  top: -150px;
}
.b-nav ul {
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
@media screen and (max-width: 414px) {
  .logo_pc {
    width: 300px;
  }
}
</style>
