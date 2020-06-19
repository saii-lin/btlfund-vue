<template>
  <div class="contact">
    <h2>{{ $t("index.block6.ContactUs") }}</h2>
    <div class="contact_content">
      <div class="contact_text">
        <div class="contact_font">
          <img src="/images/contact1.png" alt />
          <div class="info">
            {{ $t("index.block6.12FChungNamBuilding1LockhartRoadHongKong") }}
          </div>
        </div>
        <div class="contact_font contact_font__4x">
          <div>
            <img src="/images/contact2.png" alt />
            <div class="info">{{ $t("index.block6.Hotline") }}</div>
          </div>
          <div>
            <div></div>
            <div class="info">{{ $t("index.block6.Fax") }}</div>
          </div>
        </div>
        <div class="contact_font contact_font__4x">
          <div>
            <img src="/images/contact3.png" alt />
            <div class="info">
              {{ $t("index.block6.AssetManagementServices") }}
              &nbsp;&nbsp;ams@btlfund.com.hk
            </div>
          </div>
          <div>
            <div></div>
            <div class="info">
              {{ $t("index.block6.BrokerageServices") }}
              &nbsp;&nbsp;info@btlfund.com.hk
            </div>
          </div>
        </div>
      </div>
      <div>
        <iframe
          class="contact_map"
          :src="$t('index.block6.GoogleMap')"
          height="450"
          frameborder="0"
          style="border:0;"
          allowfullscreen
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.contact {
  margin: 20px 0px;
}
.contact h2 {
  color: #0f4c81;
  font-size: 50px;
  text-align: center;
  padding: 20px;
}
.contact_content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 90%;
  margin: auto;
}
.contact_map {
  width: 100%;
}
.contact_font {
  display: grid;
  grid-template-columns: 50px auto;
  grid-column-gap: 10px;
}
.contact_font > img {
  justify-self: center;
  align-self: center;
}
.contact_font .info {
  font-size: 20px;
  color: #0f4c81;
  align-self: center;
}
.contact_font__4x {
  grid-template-columns: 1fr;
  grid-template-rows: 50px 50px;
}
.contact_font__4x > div {
  display: grid;
  grid-template-columns: 50px auto;
  grid-gap: 10px;
}
.contact_font__4x > div > img {
  justify-self: center;
  align-self: center;
}
.contact_text > div {
  margin-bottom: 25px;
}
@media screen and (max-width: 1200px) {
  .contact_content {
    display: block;
  }
  .contact_text {
    width: 50vw;
    margin: 0 auto;
  }
  .contact_map {
    margin: 0 auto;
    display: block;
    width: 80vw;
  }
}
@media screen and (max-width: 414px) {
  .contact_text {
    width: 95vw;
  }
  .contact_text .info {
    font-size: 14px;
  }
  .contact h2 {
    font-size: 25px;
  }
}
</style>
