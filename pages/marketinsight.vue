<template>
  <div>
    <b-layout2 :data="pageData.layout"></b-layout2>
    <div class="market">
      <div class="market_p">{{ $t("index.block3.MarketInsightTitleContent") }}</div>
      <div class="market_title" id="market-commentary">{{ $t("marketinsight.MarketCommentary") }}</div>
      <div class="market1">
        <div class="market_content">
          <a href="/pdf/Market Review Mar 2020.pdf" download>
            <img class="market_pic" src="/images/market1.jpg" alt />
            <p class="market_content_title">Market Review Mar 2020</p>
            <p class="market_text">
              2019 年环球事件不断，美联储停止紧缩政策，更在今年 10 月开始每月购买
              600 亿美元短债、中美贸易谈判反覆、人民币跌破关键水平、英国脱欧等…环
              球不明朗因素在上升。
            </p>
          </a>
        </div>
      </div>
      <div class="market_title" id="special-editions">{{ $t("marketinsight.SpecialEditions") }}</div>
      <div class="market1">
        <div class="market_content">
          <a href="/pdf/1810.HK March 2019.pdf" download>
            <img class="market_pic" src="/images/market2.jpg" alt />
            <p class="market_content_title">1810.HK March 2019</p>
            <p class="market_text">
              由於小米 2018 年第二季度產生的一次性以股份為基礎的薪酬人民幣 99 億元給小米創辦人雷軍, 加上在 2018 年尾增發股份給雷軍
              及其家族為受益人的信託基金 ARK Trust （Hong Kong） Limited 約 80 億元, 使公司期內收入增加波動性. 令部份投資者對公司
              失去信心.
            </p>
          </a>
        </div>
      </div>
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
.market_p {
  font-size: 20px;
  margin: 15px 0;
}
.market {
  width: 90%;
  margin: 0 auto;
}
.market_pic {
  width: 200px;
}
.market_content {
  width: 200px;
  background: rgb(240, 239, 239);
}
.market1 {
  margin: 20px;
}
.market p {
  line-height: 20px;
  padding: 10px;
}
.market_content_title {
  font-size: 16px;
  color: rgb(54, 52, 150);
  font-weight: bold;
}
.market_text {
  font-size: 14px;
  line-height: 20px;
}
.market a:hover {
  color: rgb(117, 117, 117) !important;
}
.market_title {
  font-size: 20px;
  font-weight: bold;
}
</style>
