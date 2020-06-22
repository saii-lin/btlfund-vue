<template>
  <div>
    <div class="amc_text">
      <div class="amc_title">{{ $t("whatwedo.IntroducingBrokerage2.Overview&Benefits") }}</div>
      <div class="amc_content">
        <p>{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent") }}</p>
        <ul>
          <li>
            <div
              class="amc_title2"
            >{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Securities") }}</div>
            <div class="amc_content2">
              <div class="amc_title3"></div>
              <p>{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Securities2.HongKongMarketContent") }}</p>
              <p>{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Securities2.HongKongMarketContent2") }}</p>
            </div>
            <div class="amc_content2">
              <div
                class="amc_title3"
              >{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.GlobalMarket") }}</div>
              <p>{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.GlobalMarket2.GlobalMarketContent") }}</p>
              <p>{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.GlobalMarket2.GlobalMarketContent2") }}</p>
            </div>
          </li>
          <li>
            <div
              class="amc_title2"
            >{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.OtherInvestmentProducts") }}</div>
            <div class="amc_content2">
              <div
                class="amc_title3"
              >{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Futures&Options2.Futures") }}</div>
              <p>{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Futures&Options2.FuturesContent") }}</p>
              <p>{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Futures&Options2.FuturesContent2") }}</p>
              <ul>
                <li>{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Futures&Options2.FuturesContent3.Flexibility") }}</li>
                <li>{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Futures&Options2.FuturesContent3.Diversity") }}</li>
                <li>{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Futures&Options2.FuturesContent3.BeneficialMarketConditions") }}</li>
                <li>{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Futures&Options2.FuturesContent3.CostEffective") }}</li>
                <li>{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Futures&Options2.FuturesContent3.LowBarriersToEntry") }}</li>
              </ul>
              <p>{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Futures&Options2.FuturesContent4") }}</p>
            </div>
          </li>
          <li>
            <div class="amc_content2">
              <div
                class="amc_title3"
              >{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Futures&Options2.Options") }}</div>
              <p>{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Futures&Options2.OptionsContent") }}</p>
              <p>{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Futures&Options2.OptionsContent2") }}</p>
              <p>{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Futures&Options2.OptionsContent3") }}</p>
              <ul>
                <li>{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Futures&Options2.OptionsContent4") }}</li>
                <li>{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Futures&Options2.OptionsContent5") }}</li>
                <li>{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Futures&Options2.OptionsContent6") }}</li>
              </ul>
              <p>{{ $t("whatwedo.IntroducingBrokerage2.Overview&BenefitsContent2.Futures&Options2.OptionsContent7") }}</p>
              <ul>
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
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.amc_title3 {
  margin: 10px 50px;
  font-weight: bold;
}
.amc_content2 > ul {
  margin-left: 50px;
}
.amc_content2 > ul > li {
  padding: 10px;
}
.amc_content2 strong {
  color: red;
}
@media screen and (max-width: 414px) {
  .amc_content2 > ul {
    margin-left: 30px;
  }
}
</style>
