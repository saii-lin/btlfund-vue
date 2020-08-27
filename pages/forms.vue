<template>
  <div>
    <b-layout2 :data="pageData.layout"></b-layout2>
    <div class="forms">
      <div id="asset-management-forms" class="forms_title">Forms(ENG)</div>
      <div class="forms_flex">
        <div v-for="(form, index) in forms_onlyEnus" :key="index" class="forms_content">
          <div class="forms_title2">{{ $t(form.text) }}</div>
          <div class="form_text">{{ $t("forms.download") }}</div>
          <div class="download">
            <a
              class="download_a"
              :href="form.link"
              download
            >PDF</a>
          </div>
        </div>
      </div>
      <div id="brokerage-forms" class="forms_title">表格(繁/簡)</div>
      <div class="forms_grid">
        <div v-for="(form, index) in forms_others" :key="index" class="forms_content">
          <div class="forms_title2">{{ $t(form.text) }}</div>
          <div class="form_text">{{ $t("forms.download") }}</div>
          <div class="download">
            <a
              class="download_a"
              :href="form.link"
              download
            >PDF</a>
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
import forms from "@/assets/json/forms.json";
export default {
  scrollToTop: true,
  components: {
    BLayout2,
    BFooterSiteMap,
  },
  data: () => ({
    pageContents,
  }),
  mounted() {
    this.scrollto();
  },
  computed: {
    forms_onlyEnus() {
      return forms.filter(f => f.locales.includes('en-us') && f.locales.length === 1)
    },
    forms_others() {
      return forms.filter(f1 => !this.forms_onlyEnus.map(f2 => f2.text).includes(f1.text))
    },
    pageData() {
      const target = pageContents.find((x) => x.name === "forms");
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
.forms {
  margin: 100px auto;
}
.forms_grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
}
.forms_flex {
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
  font-size: 40px;
  font-weight: bold;
  margin: 20px;
  text-align: center;
  position: relative;
  margin: 100px 0;
}
.forms_title::after {
  content: "";
  position: absolute;
  top: 150%;
  bottom: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid #ccc;
  width: 95%;
  margin: auto;
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
