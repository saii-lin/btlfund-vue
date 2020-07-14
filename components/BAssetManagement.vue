<template>
  <div>
    <div class="amc">
      <p>{{$t("whatwedo.AssetManagementContent")}}</p>
      <div class="amc_pic">
        <div class="amc_text amc_text3">
          <div class="amc_pic_bg">
            <div
              class="amc_title"
            >{{ $t("whatwedo.AssetManagementContent2.InvestmentAdvisoryMandates") }}</div>
            <!-- <div
              class="amc_content"
            >{{ $t("whatwedo.AssetManagementContent2.InvestmentAdvisoryMandatesContent") }}</div>-->
            <div
              class="amc_content"
            >{{ $t("whatwedo.AssetManagementContent2.InvestmentAdvisoryMandatesContent2") }}</div>
          </div>
        </div>
        <div class="amc_text amc_text4">
          <div class="amc_pic_bg">
            <div
              class="amc_title"
            >{{ $t("whatwedo.AssetManagementContent2.DiscretionaryMandates") }}</div>
            <!-- <div
              class="amc_content"
            >{{ $t("whatwedo.AssetManagementContent2.DiscretionaryMandatesContent") }}</div>
            <div
              class="amc_content"
            >{{ $t("whatwedo.AssetManagementContent2.DiscretionaryMandatesContent2") }}</div>-->
            <div
              class="amc_content"
            >{{ $t("whatwedo.AssetManagementContent2.DiscretionaryMandatesContent3") }}</div>
          </div>
        </div>
      </div>
      <div class="amc_pic2">
        <div class="amc_text amc_text5">
          <div class="amc_pic_bg">
            <div class="amc_title">{{ $t("whatwedo.AssetManagementContent2.ExternalAssetManager") }}</div>
            <!-- <div
            class="amc_content"
          >{{ $t("whatwedo.AssetManagementContent2.ExternalAssetManagerContent1") }}</div>
          <div
            class="amc_content"
          >{{ $t("whatwedo.AssetManagementContent2.ExternalAssetManagerContent2") }}</div>
          <div class="amc_grid">
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
            </div>-->
            <div
              class="amc_content"
            >{{ $t("whatwedo.AssetManagementContent2.ExternalAssetManagerContent4") }}</div>
          </div>
        </div>
        <div class="amc_text amc_text6">
          <div class="amc_pic_bg">
            <div class="amc_text2 other-services">
              <div
                class="amc_title2"
              >{{ $t("whatwedo.AssetManagementContent2.OtherInvestmentServices") }}</div>
              <!-- <div
              class="amc_content"
            >{{ $t("whatwedo.AssetManagementContent2.OtherInvestmentServicesContent") }}</div>
            <div
              class="amc_content"
            >{{ $t("whatwedo.AssetManagementContent2.ExternalAssetManagerContent3.ConsolidatedBalanceSheetContent2") }}</div>
            <div
              class="amc_content"
              >{{ $t("whatwedo.AssetManagementContent2.ExternalAssetManagerContent3.ConsolidatedBalanceSheetContent3") }}</div>-->
              <div
                class="amc_content"
              >{{ $t("whatwedo.AssetManagementContent2.OtherInvestmentServicesContent2") }}</div>
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

<style scoped>
.amc {
  max-width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-row-gap: 5px;
}
.amc_title {
  font-size: 20px;
  font-weight: bold;
}
.amc_pic_bg {
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  padding: 15px;
  transition: 0.5s;
  cursor: pointer;
  min-height: 250px;
}
.amc_pic_bg:hover {
  background: rgba(105, 77, 0, 0.5);
}
.amc_title {
  color: #fff;
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
.amc_text {
  min-height: 250px;
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
  width: 100%;
}
.amc_text6 {
  background-image: url(/images/what-we-do1-3.jpg);
  background-size: cover;
  width: 100%;
}
.amc_pic {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 5px;
}
.amc_pic2 {
  display: grid;
  grid-template-columns: 70% auto;
  grid-column-gap: 5px;
}
.amc_grid {
  display: grid;
  margin-top: 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 20px;
}
.amc_grid .other-services {
  grid-column: 1/-1;
  border: none;
  padding: 0px;
}
.amc_title2 {
  padding: 5px 5px 5px 10px;
}
.amc_text2 {
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  /* border: 1px solid white; */
  padding: 10px;
}
.amc_text2 .amc_content {
  font-size: 14px;
}
@media screen and (max-width: 500px) {
  .amc_pic {
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 5px;
  }
  .amc_grid {
    display: grid;
    margin-top: 20px;
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 5px;
    grid-row-gap: 20px;
  }
}
</style>
