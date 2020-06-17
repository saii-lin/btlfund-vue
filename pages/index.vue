<template>
  <div>
    <b-slide></b-slide>
    <b-what-we-do></b-what-we-do>
    <b-about-us></b-about-us>
    <b-investor-education-center></b-investor-education-center>
    <b-coutact-us></b-coutact-us>
    <b-footer></b-footer>
  </div>
</template>

<script>
import BSlide from "~/components/BSlide.vue";
import BWhatWeDo from "~/components/BWhatWeDo";
import BAboutUs from "~/components/BAboutUs";
import BInvestorEducationCenter from "~/components/BInvestorEducationCenter";
import BCoutactUs from "~/components/BCoutactUs";
import BFooter from "~/components/BFooter";
export default {
  components: {
    BSlide,
    BWhatWeDo,
    BAboutUs,
    BInvestorEducationCenter,
    BCoutactUs,
    BFooter
  }
};
</script>

<style scoped>
</style>
