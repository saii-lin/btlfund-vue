<template>
  <div>
    <b-layout2 :data="pageData.layout"></b-layout2>
    <div class="forms">
      <ul>
        <div class="forms_title">{{ $t("forms.AssetManagementForms") }}</div>
        <li>
          <a href="/pdf/銀信資產管理有限公司 - 客戶資料表格.xps">{{ $t("forms.ClientInformationForm") }}</a>
        </li>
        <li>
          <a href="/pdf/銀信資產管理有限公司 - 投資管理協議書.xps">{{ $t("forms.InvestmentManagementAgreement") }}</a>
        </li>
      </ul>
      <ul>
        <div class="forms_title">{{ $t("forms.BrokerageForms") }}</div>
        <li>
          <a href></a>
        </li>
        <li>
          <a href></a>
        </li>
        <li>
          <a href></a>
        </li>
        <li>
          <a href></a>
        </li>
        <li>
          <a href></a>
        </li>
        <li>
          <a href></a>
        </li>
        <li>
          <a href></a>
        </li>
        <li>
          <a href></a>
        </li>
        <li>
          <a href></a>
        </li>
        <li>
          <a href></a>
        </li>
        <li>
          <a href></a>
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
      const target = pageContents.find(x => x.name === "forms");
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
