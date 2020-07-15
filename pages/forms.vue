<template>
  <div>
    <b-layout2 :data="pageData.layout"></b-layout2>
    <div class="forms">
      <div id="asset-management-forms" class="forms_title">{{ $t("forms.AssetManagementForms") }}</div>
      <div class="forms_flax">
        <div class="forms_content">
          <div class="forms_title2">{{ $t("forms.ClientInformationFormIndividual") }}</div>
          <div class="form_text">{{ $t("forms.download") }}</div>
          <div class="download">
            <a class="download_a" href="/pdf/銀信資產管理有限公司 - 客戶資料表格.xps" download>PDF</a>
          </div>
        </div>
        <div class="forms_content">
          <div class="forms_title2">{{ $t("forms.InvestmentManagementAgreement") }}</div>
          <div class="form_text">{{ $t("forms.download") }}</div>
          <div class="download">
            <a class="download_a" href="/pdf/銀信資產管理有限公司 - 投資管理協議書.xps" download>PDF</a>
          </div>
        </div>
      </div>
      <div id="brokerage-forms" class="forms_title">{{ $t("forms.BrokerageForms") }}</div>
      <div class="forms_grid">
        <div class="forms_content">
          <div class="forms_title2">{{ $t("forms.CorporateFATCASelf-Certification") }}</div>
          <div class="form_text">{{ $t("forms.download") }}</div>
          <div class="download">
            <a class="download_a" href="/pdf/海外帳戶稅務合規法案(公司).xps" download>PDF</a>
          </div>
        </div>
        <div class="forms_content">
          <div class="forms_title2">{{ $t("forms.IndividualFATCASelf-Certification") }}</div>
          <div class="form_text">{{ $t("forms.download") }}</div>
          <div class="download">
            <a class="download_a" href="/pdf/海外帳戶稅務合規法案(個人).xps" download>PDF</a>
          </div>
        </div>
        <div class="forms_content">
          <div class="forms_title2">{{ $t("forms.ProfessionalInvestors(CN)") }}</div>
          <div class="form_text">{{ $t("forms.download") }}</div>
          <div class="download">
            <a class="download_a" href="/pdf/專業投資者 Ver1.3 082018.pdf" download>PDF</a>
          </div>
        </div>
        <div class="forms_content">
          <div class="forms_title2">{{ $t("forms.ProfessionalInvestors(EN)") }}</div>
          <div class="form_text">{{ $t("forms.download") }}</div>
          <div class="download">
            <a
              class="download_a"
              href="/pdf/Professional Investors (eng) Mar 2019 Ver 1.2.pdf"
              download
            >PDF</a>
          </div>
        </div>
        <div class="forms_content">
          <div class="forms_title2">{{ $t("forms.SelfCertificationFormControllingPerson(EN)") }}</div>
          <div class="form_text">{{ $t("forms.download") }}</div>
          <div class="download">
            <a class="download_a" href="/pdf/CRS-ControllingPerson(eng).pdf" download>PDF</a>
          </div>
        </div>
        <div class="forms_content">
          <div class="forms_title2">{{ $t("forms.SelfCertificationFormControllingPerson(CN)") }}</div>
          <div class="form_text">{{ $t("forms.download") }}</div>
          <div class="download">
            <a class="download_a" href="/pdf/CRS-ControllingPerson(chi).pdf" download>PDF</a>
          </div>
        </div>
        <div class="forms_content">
          <div class="forms_title2">{{ $t("forms.SelfCertificationFormIndividual(EN)") }}</div>
          <div class="form_text">{{ $t("forms.download") }}</div>
          <div class="download">
            <a class="download_a" href="/pdf/CRS-Individual(eng).pdf" download>PDF</a>
          </div>
        </div>
        <div class="forms_content">
          <div class="forms_title2">{{ $t("forms.SelfCertificationFormIndividual(CN)") }}</div>
          <div class="form_text">{{ $t("forms.download") }}</div>
          <div class="download">
            <a class="download_a" href="/pdf/CRS-Individual(chi) Ver1.1.pdf" download>PDF</a>
          </div>
        </div>
        <div class="forms_content">
          <div class="forms_title2">{{ $t("forms.SelfCertificationFormEntity(EN)") }}</div>
          <div class="form_text">{{ $t("forms.download") }}</div>
          <div class="download">
            <a class="download_a" href="/pdf/CRS-Entity(cng).pdf" download>PDF</a>
          </div>
        </div>
        <div class="forms_content">
          <div class="forms_title2">{{ $t("forms.SelfCertificationFormEntity(CN)") }}</div>
          <div class="form_text">{{ $t("forms.download") }}</div>
          <div class="download">
            <a class="download_a" href="/pdf/CRS-Entity(chi).pdf" download>PDF</a>
          </div>
        </div>

        <div class="forms_content">
          <div class="forms_title2">{{ $t("forms.W-8BEN") }}</div>
          <div class="form_text">{{ $t("forms.download") }}</div>
          <div class="download">
            <a class="download_a" href="/pdf/W-8BEN.pdf" download>PDF</a>
          </div>
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
.forms_grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
}
.forms_flax {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.forms_content {
  margin: 10px;
  text-align: center;
}
.forms_title2 {
  font-size: 16px;
  font-weight: bold;
}
.form_text,
.forms_title2,
.download {
  margin: 10px;
}
.form_text {
  font-size: 16px;
}
.download {
  margin: 25px;
}
.download_a {
  border: 1px solid rgb(199, 160, 75);
  border-radius: 20px;
  width: 20%;
  height: 50px;
  padding: 5px 15px;
  color: rgb(199, 160, 75) !important;
  transition: 0.5s;
}
.forms a:hover {
  border: 1px solid rgb(150, 116, 43);
  color: rgb(150, 116, 43) !important;
}
.forms_title {
  font-size: 20px;
  font-weight: bold;
  margin: 20px;
}
.forms li {
  padding: 10px;
}
@media screen and (max-width: 800px) {
  .forms_grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .forms_flax {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
