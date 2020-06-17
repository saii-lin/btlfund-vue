<template>
  <div v-scroll="onScroll" class="body">
    <b-nav ref="nav" :hidden="downward" :width="contentWidth"></b-nav>
    <div @click="forceToClose" ref="content">
      <nuxt />
    </div>
  </div>
</template>
<script>
import BNav from "~/components/BNav";
export default {
  components: {
    BNav
  },
  data: () => ({
    scrollTop: 0,
    downward: false,
    contentWidth: 0
  }),
  mounted() {
    this.contentWidth = this.$refs.content.offsetWidth;
  },
  methods: {
    forceToClose() {
      this.$refs.nav.forceToClose();
    },
    onScroll(e, position) {
      this.downward = position.scrollTop > this.scrollTop;
      this.scrollTop = position.scrollTop;
      this.$refs.nav.forceToClose();
    }
  }
};
</script>
<style scoped>
.body {
  max-height: 100vh;
  overflow-y: scroll;
}
</style>
