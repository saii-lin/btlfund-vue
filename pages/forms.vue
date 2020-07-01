<template>
  <div>
    <b-layout2 :data="pageData.layout"></b-layout2>
    <div class="forms">
      <ul>
        <div id="asset-management-forms" class="forms_title">
          {{ $t("forms.AssetManagementForms") }}
        </div>
        <li>
          <a href="/pdf/銀信資產管理有限公司 - 客戶資料表格.xps"
            >銀信資產管理有限公司 - 客戶資料表格.xps</a
          >
        </li>
        <li>
          <a href="/pdf/銀信資產管理有限公司 - 投資管理協議書.xps"
            >銀信資產管理有限公司 - 投資管理協議書.xps</a
          >
        </li>
      </ul>
      <ul>
        <div id="brokerage-forms" class="forms_title">
          {{ $t("forms.BrokerageForms") }}
        </div>
        <li>
          <a href="/pdf/海外帳戶稅務合規法案(公司).xps"
            >海外帳戶稅務合規法案(公司).xps</a
          >
        </li>
        <li>
          <a href="/pdf/海外帳戶稅務合規法案(個人).xps"
            >海外帳戶稅務合規法案(個人).xps</a
          >
        </li>
        <li>
          <a href="/pdf/專業投資者 Ver1.3 082018.pdf"
            >專業投資者 Ver1.3 082018.pdf</a
          >
        </li>
        <li>
          <a href="/pdf/CRS-ControllingPerson(chi).pdf"
            >CRS-ControllingPerson(chi).pdf</a
          >
        </li>
        <li>
          <a href="/pdf/CRS-ControllingPerson(eng).pdf"
            >CRS-ControllingPerson(chi).pdf</a
          >
        </li>
        <li>
          <a href="/pdf/CRS-Entity(chi).pdf">CRS-Entity(chi).pdf</a>
        </li>
        <li>
          <a href="/pdf/CRS-Entity(chi).pdf">CRS-Entity(eng).pdf</a>
        </li>
        <li>
          <a href="/pdf/CRS-Individual(chi) Ver1.1.pdf"
            >CRS-Individual(chi) Ver1.1.pdf</a
          >
        </li>
        <li>
          <a href="/pdf/CRS-Individual(eng).pdf">CRS-Individual(eng).pdf</a>
        </li>
        <li>
          <a href="/pdf/Professional Investors (eng) Mar 2019 Ver 1.2.pdf"
            >Professional Investors (eng) Mar 2019 Ver 1.2.pdf</a
          >
        </li>
        <li>
          <a href="/pdf/W-8BEN.pdf">W-8BEN.pdf</a>
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
  scrollToTop: true,
  components: {
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
      const target = pageContents.find(x => x.name === "forms");
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
.forms_title {
  font-size: 20px;
  font-weight: bold;
}
.forms li {
  padding: 10px;
}
.forms a:hover {
  color: rgb(117, 117, 117) !important;
}
</style>
