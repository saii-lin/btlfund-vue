<template>
  <div class="contact">
    <h2>Contact Us</h2>
    <div class="contact_content">
      <div class="contact_text">
        <div class="contact_font">
          <img src="/images/contact1.png" alt />
          <p>12/F, Chung Nam Building, 1 Lockhart Road, Hong Kong</p>
        </div>
        <div class="contact_font">
          <img src="/images/contact2.png" alt />
          <div>
            <p>Hotline: +852 3701 7000</p>
            <p>Fax: +852 3701 7099</p>
          </div>
        </div>
        <div class="contact_font">
          <img src="/images/contact3.png" alt />
          <div>
            <p>Asset Management Services &nbsp;&nbsp;ams@btlfund.com.hk</p>
            <p>Brokerage Services&nbsp;&nbsp;info@btlfund.com.hk</p>
          </div>
        </div>
      </div>
      <iframe
        class="contact_map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.9863530812327!2d114.16674711473063!3d22.278506785334827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404005d9e374527%3A0xa062e3e689d390ab!2z5Lit5Y2X5aSn5buI!5e0!3m2!1sen-US!2stw!4v1592365359864!5m2!1sen-US!2stw"
        width="700"
        height="450"
        frameborder="0"
        style="border:0;"
        allowfullscreen
        aria-hidden="false"
        tabindex="0"
      ></iframe>
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
  color: #002f6c;
  font-size: 50px;
  text-align: center;
  padding: 20px;
}
.contact_content {
  display: flex;
  justify-content: space-evenly;
}
.contact_font {
  display: grid;
  grid-template-columns: 50px auto;
}
.contact_font img {
  margin-top: 20px;
}
.contact_font p {
  font-size: 20px;
  color: #002f6c;
}
</style>
