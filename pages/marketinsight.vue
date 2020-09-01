<template>
  <div>
    <b-layout2 :data="pageData.layout"></b-layout2>
    <div class="market">
      <div class="market_p">{{ $t("index.block3.MarketInsightTitleContent") }}</div>
      <div class="market_title" id="market-commentary">{{ $t("marketinsight.MarketCommentary") }}</div>
      <div class="market_grid">
        <div v-for="(report, index) in marketCommentary" :key="index" class="market_content">
          <a :href="report.link" download>
            <img class="market_pic" :src="report.src" alt />
            <p class="market_content_title">{{report.title}}</p>
            <p class="market_text">{{report.text}}</p>
          </a>
        </div>
      </div>
      <div class="market_title" id="special-editions">{{ $t("marketinsight.SpecialEditions") }}</div>
      <div class="market_grid Special">
        <!-- <div v-for="(report, index) in specialEditions" :key="index" class="market_content">
          <a :href="report.link" download>
            <img class="market_pic" :src="report.src" alt />
            <p class="market_content_title">{{report.title}}</p>
            <p class="market_text">{{report.text}}</p>
          </a>
        </div>-->
      </div>
    </div>
    <b-footer-site-map></b-footer-site-map>
  </div>
</template>

<script>
import pageContents from "@/assets/json/page-contents.json";
import BLayout2 from "~/components/BLayout2.vue";
import BFooterSiteMap from "~/components/BFooterSiteMap.vue";
import reports from "@/assets/json/reports.json";
export default {
  components: {
    scrollToTop: true,
    BLayout2,
    BFooterSiteMap,
  },
  data() {
    return {
      pageContents,
    };
  },
  mounted() {
    this.scrollto();
  },
  computed: {
    marketCommentary() {
      return reports.MarketCommentary;
    },
    specialEditions() {
      return reports.SpecialEditions;
    },
    pageData() {
      const target = pageContents.find((x) => x.name === "market-insight");
      if (target) {
        return {
          layout: {
            title: this.$t(target.title),
            image: target.image,
          },
        };
      }
    },
  },
  methods: {
    scrollto() {
      if (location.hash) {
        this.$scrollTo(location.hash, 1000, {
          container: ".body",
        });
      }
    },
  },
  watch: {
    $route() {
      this.scrollto();
    },
  },
};
</script>

<style>
.market_p {
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  display: block;
  margin: 50px auto;
  max-width: 70%;
}
.market {
  width: 90%;
  margin: 0 auto 100px;
}
.market_pic {
  width: 100%;
  /* height: 220px; */
}
.market_content {
  width: 80%;
  background: rgb(240, 239, 239);
  margin: 10px auto;
}
.market_grid {
  margin: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.market p {
  line-height: 20px;
  padding: 10px;
}
.market_content_title {
  font-size: 16px;
  color: rgb(54, 52, 150);
  font-weight: bold;
  margin: 0;
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
.Special {
  height: 300px;
}
@media screen and (max-width: 900px) {
  .market_grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 500px) {
  .market_content {
    width: 90%;
  }
  .market_p {
    margin: 20px auto;
    max-width: 80%;
  }
  .market {
    margin: 0 auto 0px;
  }
  .market_grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
