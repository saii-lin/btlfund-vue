<template>
  <div>
    <b-layout2></b-layout2>
    <b-content></b-content>
    <b-footer-site-map></b-footer-site-map>
  </div>
</template>

<script>
import BLayout2 from "~/components/BLayout2.vue";
import BContent from "~/components/BContent.vue";
import BFooterSiteMap from "~/components/BFooterSiteMap.vue";
export default {
  components: {
    BLayout2,
    BContent,
    BFooterSiteMap
  }
};
</script>

<style></style>
