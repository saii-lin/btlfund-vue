<template>
  <div v-scroll="onScroll" class="body">
    <b-nav ref="nav" :hidden="downward" :width="contentWidth"></b-nav>
    <b-nav-mobile
      ref="navMobile"
      :hidden="downward"
      :width="contentWidth"
    ></b-nav-mobile>
    <div class="page-body" @click="forceToClose" ref="content">
      <nuxt />
    </div>
  </div>
</template>
<script>
import BNav from "~/components/BNav";
import BNavMobile from "~/components/BNavMobile";
export default {
  components: {
    BNav,
    BNavMobile
  },
  data: () => ({
    scrollTop: 0,
    downward: false,
    contentWidth: 0
  }),
  mounted() {
    this.contentWidth = this.$refs.content.offsetWidth;
    window.addEventListener("resize", () => {
      this.contentWidth = this.$refs.content.offsetWidth;
    });
  },
  methods: {
    forceToClose() {
      this.$refs.nav.forceToClose();
    },
    onScroll(e, position) {
      this.downward =
        position.scrollTop > 145 && position.scrollTop > this.scrollTop;
      this.scrollTop = position.scrollTop;
      this.$refs.nav.forceToClose();
      this.$refs.navMobile.forceToClose();
    }
  }
};
</script>
<style>
.body {
  max-height: 100vh;
  overflow-y: scroll;
}
.page-body {
  margin-top: 145px;
}
a {
  text-decoration: none !important;
  color: inherit !important;
}
.b-nav-mobile {
  display: none;
}
@media screen and (max-width: 414px) {
  .b-nav {
    display: none;
  }
  .b-nav-mobile {
    display: block;
  }
}
</style>
