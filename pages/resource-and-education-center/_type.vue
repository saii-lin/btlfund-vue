<template>
  <div>
    <b-layout2 :data="pageData.layout"></b-layout2>
    <iframe width="100%" height="800px" :src="iframeSrc"></iframe>
    <b-footer-site-map></b-footer-site-map>
  </div>
</template>

<script>
import pageContents from "@/assets/json/page-contents.json";
import BLayout2 from "~/components/BLayout2.vue";
import BContent from "~/components/BContent.vue";
import BFooterSiteMap from "~/components/BFooterSiteMap.vue";

export default {
  scrollToTop: true,
  components: {
    BLayout2,
    BContent,
    BFooterSiteMap
  },
  data: () => ({
    pageContents
  }),
  computed: {
    iframeSrc() {
      return `/investor-education/${this.$route.params.type}.${this.$i18n.locale}.html`;
    },
    pageData() {
      const target = pageContents.find(
        x => x.name === "resource-and-education-center"
      );
      if (target) {
        const page = target.pages.find(x => x.name === this.$route.params.type);
        return {
          layout: {
            title: this.$t(target.title),
            image: target.image,
            subTitle: this.$t(page.title)
          },
          content: {
            // texts: page.texts
          }
        };
      }
    }
  }
};
</script>

<style></style>
