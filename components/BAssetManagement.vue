<template>
  <div>
    <p>{{$t("whatwedo.AssetManagementContent")}}</p>
    <div class="amc">
      <div class="amc_pic">
        <div class="amc_text amc_text3">
          <div class="amc_pic_bg">
            <div
              class="amc_title"
            >{{ $t("whatwedo.AssetManagementContent2.InvestmentAdvisoryMandates") }}</div>
            <div
              class="amc_content"
            >{{ $t("whatwedo.AssetManagementContent2.InvestmentAdvisoryMandatesContent") }}</div>
          </div>
        </div>
        <div class="amc_text amc_text4">
          <div class="amc_pic_bg">
            <div
              class="amc_title"
            >{{ $t("whatwedo.AssetManagementContent2.DiscretionaryMandates") }}</div>
            <div
              class="amc_content"
            >{{ $t("whatwedo.AssetManagementContent2.DiscretionaryMandatesContent") }}</div>
            <div
              class="amc_content"
            >{{ $t("whatwedo.AssetManagementContent2.DiscretionaryMandatesContent2") }}</div>
          </div>
        </div>
      </div>
      <div class="amc_text amc_text5">
        <div class="amc_pic_bg">
          <div class="amc_title">{{ $t("whatwedo.AssetManagementContent2.ExternalAssetManager") }}</div>
          <div
            class="amc_content"
          >{{ $t("whatwedo.AssetManagementContent2.ExternalAssetManagerContent1") }}</div>
          <div
            class="amc_content"
          >{{ $t("whatwedo.AssetManagementContent2.ExternalAssetManagerContent2") }}</div>
          <div
            class="amc_content"
          >{{ $t("whatwedo.AssetManagementContent2.ExternalAssetManagerContent3.SummaryOfKeyBenefits:") }}</div>
          <div class="amc_flex">
            <div class="amc_text2">
              <div
                class="amc_title2"
              >{{ $t("whatwedo.AssetManagementContent2.ExternalAssetManagerContent3.CompetitivePricing") }}</div>
              <div
                class="amc_content"
              >{{ $t("whatwedo.AssetManagementContent2.ExternalAssetManagerContent3.ResearchContent") }}</div>
            </div>
            <div class="amc_text2">
              <div
                class="amc_title2"
              >{{ $t("whatwedo.AssetManagementContent2.ExternalAssetManagerContent3.ConsolidatedBalanceSheet") }}</div>
              <div
                class="amc_content"
              >{{ $t("whatwedo.AssetManagementContent2.ExternalAssetManagerContent3.ResearchContent") }}</div>
            </div>
            <div class="amc_text2">
              <div
                class="amc_title2"
              >{{ $t("whatwedo.AssetManagementContent2.ExternalAssetManagerContent3.ConsolidatedBalanceSheet") }}</div>
              <div
                class="amc_content"
              >{{ $t("whatwedo.AssetManagementContent2.ExternalAssetManagerContent3.CompetitivePricingContent") }}</div>
            </div>
            <div class="amc_text2">
              <div
                class="amc_title2"
              >{{ $t("whatwedo.AssetManagementContent2.OtherInvestmentServices") }}</div>
              <div
                class="amc_content"
              >{{ $t("whatwedo.AssetManagementContent2.OtherInvestmentServicesContent") }}</div>
              <div
                class="amc_content"
              >{{ $t("whatwedo.AssetManagementContent2.ExternalAssetManagerContent3.ConsolidatedBalanceSheetContent2") }}</div>
              <div
                class="amc_content"
              >{{ $t("whatwedo.AssetManagementContent2.ExternalAssetManagerContent3.ConsolidatedBalanceSheetContent3") }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
 
  </div>
</template>

<script>
export default {};
</script>

<style>
.amc_title {
  font-size: 20px;
  font-weight: bold;
}
.amc_pic_bg {
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
}
.amc_title,
.amc_content {
  color: #fff;
  padding: 10px 10px 0px;
}
.amc_text {
  width: 45%;
  margin: 6px 3px;
}
.amc_content {
  font-size: 16px;
  line-height: 25px;
}
.amc_text3 {
  background-image: url(/images/what-we-do1-1.jpg);
  background-size: cover;
}
.amc_text4 {
  background-image: url(/images/what-we-do1-2.jpg);
  background-size: cover;
}
.amc_text5 {
  background-image: url(/images/what-we-do1-3.jpg);
  background-size: cover;
  width: 91%;
  margin: auto;
}
.amc_pic {
  display: flex;
  justify-content: center;
}
.amc_flex {
  display: flex;
  justify-content: space-between;
}
.amc_title2 {
  padding: 5px 10px 0px;
}
.amc_text2 {
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  width: 33%;
  margin: 5px;
}
.amc_text2 .amc_content {
  font-size: 14px;
}
</style>
