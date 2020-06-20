<template>
  <div>
    <b-layout2 :data="pageData.layout"></b-layout2>
    <b-content :data="pageData.content"></b-content>
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
    pageData() {
      const target = pageContents.find(x => x.name === "about-us");
      if (target) {
        const page = target.pages.find(x => x.name === this.$route.params.type);
        if (page) {
          return {
            layout: {
              title: this.$t(target.title),
              subTitle: this.$t(page.title)
            },
            content: {
              texts: page.texts
            }
          };
        }
      }
    }
  }
};
</script>

<style></style>
