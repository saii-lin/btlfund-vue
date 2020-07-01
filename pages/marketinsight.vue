<template>
  <div>
    <b-layout2 :data="pageData.layout"></b-layout2>
    <div class="market">
      <p>{{ $t("index.block3.MarketInsightTitleContent") }}</p>
      <ul>
        <li>
          <a
            href="/pdf/Market Review Mar 2020.pdf"
            download="Market Review Mar 2020.pdf"
            >{{ $t("marketinsight.MarketCommentary") }}</a
          >
        </li>
        <li>
          <a
            href="/pdf/1810.HK March 2019.pdf"
            download="1810.HK March 2019.pdf"
            >{{ $t("marketinsight.SpecialEditions") }}</a
          >
        </li>
      </ul>
    </div>
    <b-footer-site-map></b-footer-site-map>
  </div>
</template>

<script>
import pageContents from "@/assets/json/page-contents.json";
import BLayout2 from "~/components/BLayout2.vue";
import BFooterSiteMap from "~/components/BFooterSiteMap.vue";
export default {
  components: {
    scrollToTop: true,
    BLayout2,
    BFooterSiteMap
  },
  data: () => ({
    pageContents
  }),
  mounted() {
    this.scrollto();
  },
  computed: {
    pageData() {
      const target = pageContents.find(x => x.name === "market-insight");
      if (target) {
        return {
          layout: {
            title: this.$t(target.title),
            image: target.image
          }
        };
      }
    }
  },
  methods: {
    scrollto() {
      if (location.hash) {
        this.$scrollTo(location.hash, 1000, {
          container: ".body"
        });
      }
    }
  },
  watch: {
    $route() {
      this.scrollto();
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
