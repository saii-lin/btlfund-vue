<template>
  <div>
    <div class="int">
      <p>{{ $t("whatwedo.IntroducingBrokerage2.Overview&Benefits") }}</p>
      <p>{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent") }}</p>
      <div class="amc_pic">
        <div class="amc_text amc_text6">
          <div
            class="amc_title"
          >{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Securities") }}</div>
          <div class="amc_grid">
            <div
              class="amc_text2 amc_text8"
              v-show="amc_text6__show === 'amc_text8' || amc_text6__show === ''"
              @click="amc_text6__show = amc_text6__show ? '' : 'amc_text8'"
              :style="{ gridColumn: amc_text6__show === 'amc_text8' ? '1/-1' : undefined }"
            >
              <div class="amc_pic_bg">
                <div class="amc_pic_border">
                  <div
                    class="amc_title2"
                  >{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Securities2.HongKongMarket") }}</div>
                  <div
                    v-show="amc_text6__show === 'amc_text8'"
                    class="amc_content"
                  >{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Securities2.HongKongMarketContent") }}</div>
                  <div
                    v-show="amc_text6__show === 'amc_text8'"
                    class="amc_content"
                  >{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Securities2.HongKongMarketContent2") }}</div>
                  <div
                    class="amc_content"
                  >{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Securities2.HongKongMarketContent3") }}</div>
                </div>
              </div>
            </div>
            <div
              class="amc_text2 amc_text9"
              v-show="amc_text6__show === 'amc_text9' || amc_text6__show === ''"
              @click="amc_text6__show = amc_text6__show ? '' : 'amc_text9'"
              :style="{ gridColumn: amc_text6__show === 'amc_text9' ? '1/-1' : undefined }"
            >
              <div class="amc_pic_bg">
                <div class="amc_pic_border">
                  <div
                    class="amc_title2"
                  >{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.GlobalMarket") }}</div>
                  <div
                    v-show="amc_text6__show === 'amc_text9'"
                    class="amc_content"
                  >{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.GlobalMarket2.GlobalMarketContent") }}</div>
                  <div
                    v-show="amc_text6__show === 'amc_text9'"
                    class="amc_content"
                  >{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.GlobalMarket2.GlobalMarketContent2") }}</div>
                  <div
                    v-show="amc_text6__show === ''"
                    class="amc_content"
                  >{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.GlobalMarket2.GlobalMarketContent3") }}</div>
                </div>
              </div>
            </div>
            <div
              class="amc_text2 amc_text10"
              v-show="amc_text6__show === 'amc_text10' || amc_text6__show === ''"
              @click="amc_text6__show = amc_text6__show ? '' : 'amc_text10'"
              :style="{ gridColumn: amc_text6__show === 'amc_text10' ? '1/-1' : undefined }"
            >
              <div class="amc_pic_bg">
                <div class="amc_pic_border">
                  <div
                    class="amc_title2"
                  >{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.OtherInvestmentProducts") }}</div>
                  <ul v-show="amc_text6__show === 'amc_text10'">
                    <li>{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.OtherInvestmentProducts2.CallableBullAndBearContracts") }}</li>
                    <li>{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.OtherInvestmentProducts2.RealEstateInvestmentTrusts") }}</li>
                    <li>{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.OtherInvestmentProducts2.DebtSecurities") }}</li>
                    <li>{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.OtherInvestmentProducts2.DerivativeWarrants") }}</li>
                    <li>{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.OtherInvestmentProducts2.InitialPublicOfferings") }}</li>
                    <li>{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.OtherInvestmentProducts2.PrivatePlacement") }}</li>
                    <li>{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.OtherInvestmentProducts2.ExchangeTradedFund(ETF)") }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="amc_pic">
        <div class="amc_text amc_text7">
          <div
            class="amc_title"
          >{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Futures&Options") }}</div>
          <div class="amc_grid">
            <div
              class="amc_text2 amc_text11"
              v-show="amc_text7__show === 'amc_text11' || amc_text7__show === ''"
              @click="amc_text7__show = amc_text7__show ? '' : 'amc_text11'"
              :style="{ gridColumn: amc_text7__show === 'amc_text11' ? '1/-1' : undefined }"
            >
              <div class="amc_pic_bg">
                <div class="amc_pic_border">
                  <div
                    class="amc_title2"
                  >{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Futures&Options2.Futures") }}</div>
                  <div
                    v-show="amc_text7__show === 'amc_text11'"
                    class="amc_content"
                  >{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Futures&Options2.FuturesContent") }}</div>
                  <div
                    v-show="amc_text7__show === 'amc_text11'"
                    class="amc_content"
                  >{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Futures&Options2.FuturesContent2") }}</div>
                  <ul v-show="amc_text7__show === 'amc_text11'">
                    <li>{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Futures&Options2.FuturesContent3.Flexibility") }}</li>
                    <li>{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Futures&Options2.FuturesContent3.Diversity") }}</li>
                    <li>{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Futures&Options2.FuturesContent3.BeneficialMarketConditions") }}</li>
                    <li>{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Futures&Options2.FuturesContent3.CostEffective") }}</li>
                    <li>{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Futures&Options2.FuturesContent3.LowBarriersToEntry") }}</li>
                  </ul>
                  <div
                    v-show="amc_text7__show === 'amc_text11'"
                    class="amc_content"
                  >{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Futures&Options2.FuturesContent2") }}</div>
                  <div
                    v-show="amc_text7__show === ''"
                    class="amc_content"
                  >{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Futures&Options2.FuturesContent5") }}</div>
                </div>
              </div>
            </div>
            <div
              class="amc_text2 amc_text12"
              v-show="amc_text7__show === 'amc_text12' || amc_text7__show === ''"
              @click="amc_text7__show = amc_text7__show ? '' : 'amc_text12'"
              :style="{ gridColumn: amc_text7__show === 'amc_text12' ? '1/-1' : undefined }"
            >
              <div class="amc_pic_bg">
                <div class="amc_pic_border">
                  <div
                    class="amc_title2"
                  >{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Futures&Options2.Options") }}</div>
                  <div
                    v-show="amc_text7__show === 'amc_text12'"
                    class="amc_content"
                  >{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Futures&Options2.OptionsContent") }}</div>
                  <div
                    v-show="amc_text7__show === 'amc_text12'"
                    class="amc_content"
                  >{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Futures&Options2.OptionsContent2") }}</div>
                  <div
                    v-show="amc_text7__show === 'amc_text12'"
                    class="amc_content"
                  >{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Futures&Options2.OptionsContent3") }}</div>
                  <ul v-show="amc_text7__show === 'amc_text12'">
                    <li>
                      {{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Futures&Options2.OptionsContent8") }}
                      <strong>{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Futures&Options2.HYPERLINK") }}</strong>
                    </li>
                    <li>
                      {{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Futures&Options2.OptionsContent9") }}
                      <strong>{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Futures&Options2.HYPERLINK") }}</strong>
                    </li>
                    <li>
                      {{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Futures&Options2.OptionsContent10") }}
                      <strong>{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Futures&Options2.HYPERLINK") }}</strong>
                    </li>
                    <li>
                      {{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Futures&Options2.OptionsContent11") }}
                      <strong>{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Futures&Options2.HYPERLINK") }}</strong>
                    </li>
                  </ul>
                  <div
                    v-show="amc_text7__show === ''"
                    class="amc_content"
                  >{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Futures&Options2.OptionsContent12") }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amc_text6__show: "",
      amc_text7__show: ""
    };
  }
};
</script>

<style scoped>
.amc_title {
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
}
.amc_pic_bg {
  background: rgba(0, 0, 0, 0.5);
  padding: 15px;
  height: 100%;
  transition: 0.5s;
  cursor: pointer;
}
.amc_pic_bg:hover {
  background: rgba(105, 77, 0, 0.5);
}
.amc_title {
  /* color: #fff; */
  padding: 10px;
}
.amc_content {
  color: #fff;
  padding: 2px 2px 2px 10px;
}
.amc_content {
  font-size: 16px;
  line-height: 25px;
}
.amc_grid {
  display: grid;
  margin-top: 20px;
  grid-column-gap: 5px;
  grid-row-gap: 20px;
}
.amc_text6 .amc_grid {
  grid-template-columns: repeat(3, 1fr);
  height: 320px;
}
.amc_text6 .amc_grid.active {
  grid-template-columns: repeat(1, 1fr);
}
.amc_text7 .amc_grid {
  grid-template-columns: repeat(2, 1fr);
  height: 320px;
}
.amc_title2 {
  padding: 5px 5px 5px 10px;
}
.amc_text2 {
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  min-height: 200px;
}
.amc_text2 .amc_content {
  font-size: 14px;
}
.int {
  width: 90%;
  margin: 0 auto;
}
.int .amc_pic {
  margin: 5px;
}
.int .amc_title {
  text-align: center;
}
.amc_text8 {
  background-image: url(/images/what-we-do2-1.jpg);
  background-size: cover;
}
.amc_text9 {
  background-image: url(/images/what-we-do2-2.jpg);
  background-size: cover;
}
.amc_text10 {
  background-image: url(/images/what-we-do2-3.jpg);
  background-size: cover;
}
.amc_text11 {
  background-image: url(/images/what-we-do2-4.jpg);
  background-size: cover;
}
.amc_text12 {
  background-image: url(/images/what-we-do2-5.jpg);
  background-size: cover;
}
.amc_text8.active {
  display: none;
}
.amc_text9.active {
  display: none;
}
.amc_text10.active {
  display: none;
}
.amc_text11.active {
  display: none;
}
.amc_text12.active {
  display: none;
}
.int ul {
  padding: 5px;
  list-style: none;
}
.int li {
  font-size: 14px;
  padding-left: 30px;
}
.int strong {
  color: red;
}
@media screen and (max-width: 700px) {
  .amc_text6 .amc_grid {
    grid-template-columns: repeat(1, 1fr);
  }
  .amc_text7 .amc_grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
