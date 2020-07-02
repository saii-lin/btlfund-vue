<template>
  <div class="block5">
    <h2>{{ $t("index.block5.RescourcesAndEducationCenter") }}</h2>
    <div class="block5_pic"></div>
    <div class="block5_content">
      <div class="block5_icon">
        <div class="block5_icon1">
          <div class="icon-front">
            <v-img :width="size" :height="size" src="/images/block5-2.png"></v-img>
            <p>{{ $t("index.block5.Bond") }}</p>
          </div>
          <div class="icon-back">
            <div class="icon-back__title">{{ $t("index.block5.Bond") }}</div>
            <div class="icon-back__content">{{ $t("index.block5.BondBrief") }}</div>
            <div class="icon-back__more">
              <nuxt-link
                :to="localePath('/resource-and-education-center/bond')"
              >{{ $t("index.block4.ReadMore") }} &gt;</nuxt-link>
            </div>
          </div>
        </div>
        <div class="block5_icon1">
          <div class="icon-front">
            <v-img :width="size" :height="size" src="/images/block5-3.png"></v-img>
            <p>{{ $t("index.block5.DigitalStructureNote") }}</p>
          </div>
          <div class="icon-back">
            <div class="icon-back__title">{{ $t("index.block5.DigitalStructureNote") }}</div>
            <div class="icon-back__content">{{ $t("index.block5.DigitalStructureNoteBrief") }}</div>
            <div class="icon-back__more">
              <nuxt-link
                :to="
                  localePath(
                    '/resource-and-education-center/digital-structure-notes'
                  )
                "
              >{{ $t("index.block4.ReadMore") }} &gt;</nuxt-link>
            </div>
          </div>
        </div>
        <div class="block5_icon1">
          <div class="icon-front">
            <v-img :width="size" :height="size" src="/images/block5-4.png"></v-img>
            <p>{{ $t("index.block5.EquityLinkedNotes") }}</p>
          </div>
          <div class="icon-back">
            <div class="icon-back__title">{{ $t("index.block5.EquityLinkedNotes") }}</div>
            <div class="icon-back__content">{{ $t("index.block5.EquityLinkedNotesBrief") }}</div>
            <div class="icon-back__more">
              <nuxt-link
                :to="
                  localePath(
                    '/resource-and-education-center/equity-linked-notes'
                  )
                "
              >{{ $t("index.block4.ReadMore") }} &gt;</nuxt-link>
            </div>
          </div>
        </div>
        <div class="block5_icon1">
          <div class="icon-front">
            <v-img :width="size" :height="size" src="/images/block5-5.png"></v-img>
            <p>
              {{
              $t(
              "index.block5.EquityStructuredProductsAccumulatorDecumulator"
              )
              }}
            </p>
          </div>
          <div class="icon-back">
            <div class="icon-back__title">
              {{
              $t(
              "index.block5.EquityStructuredProductsAccumulatorDecumulator"
              )
              }}
            </div>
            <div class="icon-back__content">
              {{
              $t(
              "index.block5.EquityStructuredProductsAccumulatorDecumulatorBrief"
              )
              }}
            </div>
            <div class="icon-back__more">
              <nuxt-link
                :to="
                  localePath(
                    '/resource-and-education-center/equity-structured-products-accumulator-decumulator'
                  )
                "
              >{{ $t("index.block4.ReadMore") }} &gt;</nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="block5_icon">
        <div class="block5_icon1">
          <div class="icon-front">
            <v-img :width="size" :height="size" src="/images/block5-6.png"></v-img>
            <p>{{ $t("index.block5.ExchangeTradedFund") }}</p>
          </div>
          <div class="icon-back">
            <div class="icon-back__title">{{ $t("index.block5.ExchangeTradedFund") }}</div>
            <div class="icon-back__content">{{ $t("index.block5.ExchangeTradedFundBrief") }}</div>
            <div class="icon-back__more">
              <nuxt-link
                :to="
                  localePath(
                    '/resource-and-education-center/exchange-traded-fund'
                  )
                "
              >{{ $t("index.block4.ReadMore") }} &gt;</nuxt-link>
            </div>
          </div>
        </div>
        <div class="block5_icon1">
          <div class="icon-front">
            <v-img :width="size" :height="size" src="/images/block5-7.png"></v-img>
            <p>{{ $t("index.block5.Options") }}</p>
          </div>
          <div class="icon-back">
            <div class="icon-back__title">{{ $t("index.block5.Options") }}</div>
            <div class="icon-back__content">{{ $t("index.block5.OptionsBrief") }}</div>
            <div class="icon-back__more">
              <nuxt-link
                :to="localePath('/resource-and-education-center/options')"
              >{{ $t("index.block4.ReadMore") }} &gt;</nuxt-link>
            </div>
          </div>
        </div>
        <div class="block5_icon1">
          <div class="icon-front">
            <v-img :width="size" :height="size" src="/images/block5-8.png"></v-img>
            <p>{{ $t("index.block5.Glossary") }}</p>
          </div>
          <div class="icon-back">
            <div class="icon-back__title">{{ $t("index.block5.Glossary") }}</div>
            <div class="icon-back__content">{{ $t("index.block5.GlossaryBrief") }}</div>
            <div class="icon-back__more">
              <nuxt-link
                :to="localePath('/resource-and-education-center/glossary')"
              >{{ $t("index.block4.ReadMore") }} &gt;</nuxt-link>
            </div>
          </div>
        </div>
        <div class="block5_icon1">
          <div class="icon-front">
            <v-img :width="size" :height="size" src="/images/block5-9.png"></v-img>
            <p>{{ $t("index.block5.QA") }}</p>
          </div>
          <div class="icon-back">
            <div class="icon-back__title">{{ $t("index.block5.QA") }}</div>
            <div class="icon-back__content">{{ $t("index.block5.QABrief") }}</div>
            <div class="icon-back__more">
              <nuxt-link
                :to="localePath('/resource-and-education-center/qa')"
              >{{ $t("index.block4.ReadMore") }} &gt;</nuxt-link>
            </div>
          </div>
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
/* .icon-front img{
  width: 100px;
} */
.block5 h2 {
  background: #0f4c81;
  color: #fff;
  padding: 20px;
  font-size: 50px;
  text-align: center;
  margin: 0;
}
.block5_pic {
  background-image: url(/images/block5-1.jpg);
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
  position: relative;
  height: 254px;
}
.block5_icon1 p {
  font-size: 16px;
  padding: 10px;
}
.block5_icon1 .v-image {
  margin: 0 auto;
  display: block;
  transition: 0.5s;
}
.icon-front {
  border: 2px white solid;
  padding-top: 26px;
  position: absolute;
  width: 100%;
  height: 100%;
}
.icon-back {
  background-color: white;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 10%;
  transition: 0.2s;
  opacity: 0;
  padding: 20px;
}
.block5_icon1:hover .icon-back {
  top: 0px;
  opacity: 1;
}
.icon-back__title {
  font-size: 18px;
  padding: 10px 0px;
  font-weight: bold;
  color: #0f4c81;
}
.icon-back__more {
  padding: 20px 0px;
  font-weight: bold;
}
.icon-back__more:hover {
  color: #0f4c81;
  text-decoration: underline;
}
@media screen and (max-width: 1000px) {
  .block5_icon {
    display: grid;
    grid-template-columns: auto auto;
  }
  .block5_icon1 img {
    width: 150px;
  }
  .block5_icon1 {
    width: 40vw;
  }
}
@media screen and (max-width: 800px) {
  .block5_icon {
    display: grid;
    grid-template-columns: auto;
  }
  .block5_icon1 {
    width: 80vw;
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
