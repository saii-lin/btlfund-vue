<template>
  <div v-scroll="onScroll" class="body" ref="body">
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
    <v-dialog v-model="disclaimDialog" max-width="670px" persistent>
      <b-disclaim @close="disclaimDialog = false"></b-disclaim>
    </v-dialog>
  </div>
</template>
<script>
import BNav from "~/components/BNav";
import BNavMobile from "~/components/BNavMobile";
import BTop from "~/components/BTop";
import BDisclaim from "~/components/BDisclaim";
export default {
  components: {
    BNav,
    BNavMobile,
    BTop,
    BDisclaim
  },
  data: () => ({
    scrollTop: 0,
    downward: false,
    contentWidth: 0,
    showGoToTopBtn: false,
    disclaimDialog: true
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
  },
  watch: {
    $route() {
      this.$refs.body.scrollTop = 0;
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
