<template>
  <div>
    <b-block1></b-block1>
    <b-block2></b-block2>
    <b-block3></b-block3>
    <b-block4></b-block4>
    <b-block5></b-block5>
    <b-block6></b-block6>
    <b-footer></b-footer>
  </div>
</template>

<script>
import BBlock1 from "~/components/BBlock1.vue";
import BBlock2 from "~/components/BBlock2.vue";
import BBlock3 from "~/components/BBlock3.vue";
import BBlock4 from "~/components/BBlock4.vue";
import BBlock5 from "~/components/BBlock5.vue";
import BBlock6 from "~/components/BBlock6.vue";
export default {
  scrollToTop: true,
  components: {
    BBlock1,
    BBlock2,
    BBlock3,
    BBlock4,
    BBlock5,
    BBlock6,
  },
  mounted() {
    if (this.$route.hash === "#contactus") {
      this.$scrollTo(".contact", 1000, {
        container: ".body",
      });
    }
  },
};
</script>

<style scoped></style>
