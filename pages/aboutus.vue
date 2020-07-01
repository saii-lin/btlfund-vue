<template>
  <div>
    <b-layout2 :data="pageData.layout"></b-layout2>
    <div class="about">
      <div class="about_content" id="intro">
        <div class="about_text">
          <h2>{{ $t("aboutus.Intro") }}</h2>
          <p>{{ $t("aboutus.IntroContent") }}</p>
        </div>
        <div class="about_pic about_pic3"></div>
      </div>
      <div class="about_content" id="our-core-values">
        <div class="about_pic about_pic4"></div>
        <div class="about_text">
          <h2>{{ $t("aboutus.OurCoreValues") }}</h2>
          <p>{{ $t("aboutus.OurCoreValuesContent") }}</p>
          <ul>
            <li>{{ $t("aboutus.OurCoreValuesContent2.Excellence") }}</li>
            <li>{{ $t("aboutus.OurCoreValuesContent2.TeamSpirit") }}</li>
            <li>{{ $t("aboutus.OurCoreValuesContent2.HardWork") }}</li>
            <li>{{ $t("aboutus.OurCoreValuesContent2.Integrity ") }}</li>
            <li>{{ $t("aboutus.OurCoreValuesContent2.Consideration") }}</li>
          </ul>
        </div>
      </div>
      <div class="about_content" id="our-clients">
        <div class="about_text">
          <h2>{{ $t("aboutus.OurClients") }}</h2>
          <p>{{ $t("aboutus.OurClientsContent") }}</p>
        </div>
        <div class="about_pic about_pic5"></div>
      </div>
      <div class="about_content" id="global-presence">
        <div class="about_pic about_pic6"></div>
        <div class="about_text">
          <h2>{{ $t("aboutus.GlobalPresence") }}</h2>
          <p>{{ $t("aboutus.GlobalPresenceContent") }}</p>
        </div>
      </div>
      <!-- <div class="about_location">
        <h2>{{ $t("aboutus.OurLocation") }}</h2>
        <iframe
          class="about_map"
          :src="$t('index.block6.GoogleMap')"
          height="450"
          frameborder="0"
          style="border:0;"
          allowfullscreen
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>-->
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
      const target = pageContents.find(x => x.name === "about-us");
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
.about_pic3 {
  background-image: url(/images/about3.jpg);
}
.about_pic4 {
  background-image: url(/images/about4.jpg);
}
.about_pic5 {
  background-image: url(/images/about5.jpg);
}
.about_pic6 {
  background-image: url(/images/about6.jpg);
}
.about_text h2 {
  font-size: 35px;
  margin: 15px 20px !important;
}
.about_text h2,
.about_text p {
  margin: 15px 20px !important;
}
.about_text ul {
  list-style: none !important;
  margin: 15px 20px !important;
  padding: 0;
}
.about_text li {
  line-height: 25px;
  padding-bottom: 5px;
}
.about_map {
  width: 80%;
  display: block;
  margin: 0 auto;
}
.about_location h2 {
  font-size: 35px;
  text-align: center;
  margin-bottom: 20px;
}
</style>
