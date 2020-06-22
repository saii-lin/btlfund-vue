<template>
  <div>
    <p>{{$t("whatwedo.AssetManagementContent")}}</p>
    <div class="amc_text">
      <div class="amc_title">{{ $t("whatwedo.AssetManagementContent2.InvestmentAdvisoryMandates") }}</div>
      <div class="amc_content">
        <p>{{ $t("whatwedo.AssetManagementContent2.InvestmentAdvisoryMandatesContent") }}</p>
      </div>
    </div>
    <div class="amc_text">
      <div class="amc_title">{{ $t("whatwedo.AssetManagementContent2.DiscretionaryMandates") }}</div>
      <div class="amc_content">
        <p>{{ $t("whatwedo.AssetManagementContent2.DiscretionaryMandatesContent") }}</p>
        <p>{{ $t("whatwedo.AssetManagementContent2.DiscretionaryMandatesContent2") }}</p>
      </div>
    </div>
    <div class="amc_text">
      <div class="amc_title">{{ $t("whatwedo.AssetManagementContent2.ExternalAssetManager") }}</div>
      <div class="amc_content">
        <p>{{ $t("whatwedo.AssetManagementContent2.ExternalAssetManagerContent1") }}</p>
        <p>{{ $t("whatwedo.AssetManagementContent2.ExternalAssetManagerContent2") }}</p>
        <p>{{ $t("whatwedo.AssetManagementContent2.ExternalAssetManagerContent3.SummaryOfKeyBenefits:") }}</p>
        <ul>
          <li>
            <div
              class="amc_title2"
            >{{ $t("whatwedo.AssetManagementContent2.ExternalAssetManagerContent3.CompetitivePricing") }}</div>
            <p>{{ $t("whatwedo.AssetManagementContent2.ExternalAssetManagerContent3.CompetitivePricingContent") }}</p>
          </li>
          <li>
            <div
              class="amc_title2"
            >{{ $t("whatwedo.AssetManagementContent2.ExternalAssetManagerContent3.Research") }}</div>
            <p>{{ $t("whatwedo.AssetManagementContent2.ExternalAssetManagerContent3.ResearchContent") }}</p>
          </li>
          <li>
            <div
              class="amc_title2"
            >{{ $t("whatwedo.AssetManagementContent2.ExternalAssetManagerContent3.ConsolidatedBalanceSheet") }}</div>
            <p>{{ $t("whatwedo.AssetManagementContent2.ExternalAssetManagerContent3.ConsolidatedBalanceSheetContent") }}</p>
            <p>{{ $t("whatwedo.AssetManagementContent2.ExternalAssetManagerContent3.ConsolidatedBalanceSheetContent2") }}</p>
            <p>{{ $t("whatwedo.AssetManagementContent2.ExternalAssetManagerContent3.ConsolidatedBalanceSheetContent3") }}</p>
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
ul {
  list-style: none;
}
.amc_title {
  font-size: 20px;
  font-weight: bold;
  margin-left: 20px;
}
.amc_content p {
  font-size: 16px !important;
  margin-left: 30px !important;
}
.amc_title2 {
  font-weight: bold;
  margin-left: 40px;
}
.amc_content > ul > li p {
  margin-left: 50px !important;
  font-size: 14px !important;
}
</style>
