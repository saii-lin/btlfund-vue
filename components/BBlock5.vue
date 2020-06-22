<template>
  <div class="block5">
    <h2>{{ $t("index.block5.RescourcesAndEducationCenter") }}</h2>
    <div class="block5_pic"></div>
    <div class="block5_content">
      <div class="block5_icon">
        <div class="block5_icon1">
          <nuxt-link :to="localePath('/resource-and-education-center/bond')">
            <v-img
              :width="size"
              :height="size"
              src="/images/block5-2.png"
            ></v-img>
            <p>{{ $t("index.block5.Bond") }}</p>
          </nuxt-link>
        </div>
        <div class="block5_icon1">
          <nuxt-link
            :to="
              localePath(
                '/resource-and-education-center/digital-structure-notes'
              )
            "
          >
            <v-img
              :width="size"
              :height="size"
              src="/images/block5-3.png"
            ></v-img>
            <p>{{ $t("index.block5.DigitalStructureNote") }}</p>
          </nuxt-link>
        </div>
        <div class="block5_icon1">
          <nuxt-link
            :to="
              localePath('/resource-and-education-center/equity-linked-notes')
            "
          >
            <v-img
              :width="size"
              :height="size"
              src="/images/block5-4.png"
            ></v-img>
            <p>{{ $t("index.block5.EquityLinkedNotes") }}</p>
          </nuxt-link>
        </div>
        <div class="block5_icon1">
          <nuxt-link
            :to="
              localePath(
                '/resource-and-education-center/equity-structured-products-accumulator-decumulator'
              )
            "
          >
            <v-img
              :width="size"
              :height="size"
              src="/images/block5-5.png"
            ></v-img>
            <p>
              {{
                $t(
                  "index.block5.EquityStructuredProductsAccumulatorDecumulator"
                )
              }}
            </p>
          </nuxt-link>
        </div>
      </div>
      <div class="block5_icon">
        <div class="block5_icon1">
          <nuxt-link
            :to="
              localePath('/resource-and-education-center/exchange-traded-fund')
            "
          >
            <v-img
              :width="size"
              :height="size"
              src="/images/block5-6.png"
            ></v-img>
            <p>
              {{ $t("index.block5.ExchangeTradedFund") }}
            </p>
          </nuxt-link>
        </div>
        <div class="block5_icon1">
          <nuxt-link :to="localePath('/resource-and-education-center/options')">
            <v-img
              :width="size"
              :height="size"
              src="/images/block5-7.png"
            ></v-img>
            <p>{{ $t("index.block5.Options") }}</p>
          </nuxt-link>
        </div>
        <div class="block5_icon1">
          <nuxt-link
            :to="localePath('/resource-and-education-center/glossary')"
          >
            <v-img
              :width="size"
              :height="size"
              src="/images/block5-8.png"
            ></v-img>
            <p>{{ $t("index.block5.Glossary") }}</p>
          </nuxt-link>
        </div>
        <div class="block5_icon1">
          <nuxt-link :to="localePath('/resource-and-education-center/qa')">
            <v-img
              :width="size"
              :height="size"
              src="/images/block5-9.png"
            ></v-img>
            <p>{{ $t("index.block5.QA") }}</p>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    size: 150
  })
};
</script>

<style scoped>
.block5 {
  background: #cdd2d1;
}
.block5 h2 {
  background: #0f4c81;
  color: #fff;
  padding: 20px;
  font-size: 50px;
  text-align: center;
  margin: 0;
}
.block5_pic {
  background-image: url(/images/block5-1.png);
  background-size: cover;
  background-position-y: bottom;
  width: 100%;
  height: 1000px;
}
.block5_icon {
  display: flex;
  justify-content: center;
}
.block5_icon a {
  color: #000;
  text-decoration: none;
}
.block5_icon p {
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
}
.block5_icon1 {
  width: 20vw;
  margin: 30px;
}
.block5_icon1 p {
  font-size: 25px;
  padding: 10px;
}
.block5_icon1 .v-image {
  margin: 0 auto;
  display: block;
  transition: 0.5s;
}
.block5_icon1 .v-image:hover {
  transform: translateY(-15px);
  box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.5);
}
@media screen and (max-width: 1000px) {
  .block5_icon {
    display: grid;
    grid-template-columns: auto auto;
  }
  .block5_icon1 img {
    width: 150px;
  }
}
@media screen and (max-width: 800px) {
  .block5_icon {
    display: grid;
    grid-template-columns: auto;
  }
}
@media screen and (max-width: 414px) {
  .block5 h2 {
    font-size: 25px;
  }
  .block5_pic {
    background-size: cover;
    width: 100vw;
    height: 300px;
    margin: 0px;
  }
  .block5_icon1 img {
    width: 100px;
  }
  .block5_icon1 {
    width: 80vw;
  }
  .block5_icon p {
    font-size: 14px;
  }
}
</style>
