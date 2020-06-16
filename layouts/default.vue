<template>
  <div>
    <b-nav ref="nav"></b-nav>
    <div @click="forceToClose">
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
  data: () => ({}),
  methods: {
    forceToClose() {
      this.$refs.nav.forceToClose();
    }
  }
};
</script>
<style>
</style>
