<template>
  <div v-scroll="onScroll" class="body">
    <b-nav-mobile
      v-if="$vuetify.breakpoint.smAndDown"
      ref="navMobile"
      :hidden="downward"
      :width="contentWidth"
    ></b-nav-mobile>
    <b-nav v-else ref="nav" :hidden="downward" :width="contentWidth"></b-nav>
    <div
      class="page-body"
      ref="content"
      :style="{
        'margin-top': $vuetify.breakpoint.smAndDown ? '78px' : '145px'
      }"
    >
      <nuxt />
    </div>
    <b-top v-if="showGoToTopBtn"></b-top>
  </div>
</template>
<script>
import BNav from "~/components/BNav";
import BNavMobile from "~/components/BNavMobile";
import BTop from "~/components/BTop";
export default {
  components: {
    BNav,
    BNavMobile,
    BTop
  },
  data: () => ({
    scrollTop: 0,
    downward: false,
    contentWidth: 0,
    showGoToTopBtn: false
  }),
  mounted() {
    this.contentWidth = this.$refs.content.offsetWidth;
    window.addEventListener("resize", () => {
      this.contentWidth = this.$refs.content.offsetWidth;
    });
  },
  methods: {
    onScroll(e, position) {
      this.downward =
        position.scrollTop > 145 && position.scrollTop > this.scrollTop;
      this.scrollTop = position.scrollTop;
      this.showGoToTopBtn =
        position.scrollTop > this.$vuetify.breakpoint.height;
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
</style>
