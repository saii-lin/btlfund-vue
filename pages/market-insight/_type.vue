<template>
  <div>
    <b-layout2 :data="pageData.layout"></b-layout2>
    <div class="market">
      <p>{{ $t("index.block3.MarketInsightTitleContent") }}</p>
      <ul>
        {{ $t("marketinsight.MarketCommentary") }}
        <li>
          <a
            href="/pdf/Market Review Mar 2020.pdf"
            download="Market Review Mar 2020.pdf"
          >Market Review Mar 2020.pdf</a>
        </li>
      </ul>
      <ul>
        {{ $t("marketinsight.SpecialEditions") }}
        <li>
          <a
            href="/pdf/1810.HK March 2019.pdf"
            download="1810.HK March 2019.pdf"
          >1810.HK March 2019.pdf</a>
        </li>
      </ul>
    </div>
    <b-footer-site-map></b-footer-site-map>
  </div>
</template>

<script>
import pageContents from "@/assets/json/page-contents.json";
import BLayout2 from "~/components/BLayout2.vue";
import BContent from "~/components/BContent.vue";
import BFooterSiteMap from "~/components/BFooterSiteMap.vue";
export default {
  components: {
    scrollToTop: true,
    BLayout2,
    BContent,
    BFooterSiteMap
  },
  data: () => ({
    pageContents
  }),
  computed: {
    pageData() {
      const target = pageContents.find(x => x.name === "market-insight");
      if (target) {
        const page = target.pages.find(x => x.name === this.$route.params.type);
        return {
          layout: {
            title: this.$t(target.title),
            subTitle: this.$t(page.title),
            image: target.image
          },
          content: {
            texts: page.texts
          }
        };
      }
    }
  }
};
</script>

<style>
.market p {
  font-size: 20px;
  margin: 20px;
}
.market li {
  padding: 10px;
}
.market a {
  font-size: 20px;
  font-weight: bold;
}
.market a:hover {
  color: rgb(117, 117, 117) !important;
}
</style>
