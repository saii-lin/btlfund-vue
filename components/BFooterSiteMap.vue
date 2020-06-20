<template>
  <div class="site-map">
    <div class="site-map_block">
      <h4>About Us</h4>
      <ul>
        <li>
          <a href="/about-us/intro">Intro</a>
        </li>
        <li>
          <a href="/about-us/our-core-values">Our Core Values</a>
        </li>
        <li>
          <a href="/about-us/our-clients">Our Clients</a>
        </li>
        <li>
          <a href="$t:index.nav.GoogleMap">Our Location</a>
        </li>
        <li>
          <a href="/about-us/global-presence">Global Presence</a>
        </li>
      </ul>
    </div>
    <div class="site-map_block">
      <h4>What we do</h4>
      <ul>
        <li>
          <a href="/what-we-do/asset-management">Asset Management</a>
        </li>
        <li>
          <a href="/what-we-do/introducing-brokerage">Introducing Brokerage</a>
        </li>
      </ul>
    </div>
    <div class="site-map_block h4_a">
      <a href>
        <h4>Market Insight</h4>
      </a>
      <ul>
        <li>
          <a href="/market-insight/market-commentary">Market Commentary</a>
        </li>
        <li>
          <a href="/market-insight/special-editions">Special Editions</a>
        </li>
      </ul>
    </div>
    <div class="site-map_block h4_a">
      <a href>
        <h4>Forms</h4>
      </a>
      <ul>
        <li>
          <a href="/forms/asset-management-forms">Asset Management Forms</a>
        </li>
        <li>
          <a href="/forms/brokerage-forms">Brokerage Forms</a>
        </li>
      </ul>
    </div>
    <div class="site-map_block">
      <h4>Resources and Education Center</h4>
      <ul>
        <li>
          <a href="/resource-and-education-center/bond">Bond</a>
        </li>
        <li>
          <a href="/resource-and-education-center/digital-structure-note">Digital Structure Note</a>
        </li>
        <li>
          <a href="/resource-and-education-center/equity-linked-notes">Equity Linked Notes</a>
        </li>
        <li>
          <a
            href="/resource-and-education-center/equity-structured-products-accumulator-decumulator"
          >Equity Structured Products Accumulator / Decumulator</a>
        </li>
        <li>
          <a href="/resource-and-education-center/exchange-traded-fund">Exchange Traded Fund</a>
        </li>
        <li>
          <a href="/resource-and-education-center/options">Options</a>
        </li>
        <li>
          <a href="/resource-and-education-center/glossary">Glossary</a>
        </li>
        <li>
          <a href="/resource-and-education-center/qa">Q&A</a>
        </li>
      </ul>
    </div>
    <div class="site-map_block contact">
      <h4>Contact us</h4>

      <ul>
        <li>Address:</li>
        <li>12/F, Chung Nam Building, 1 Lockhart Road, Hong Kong</li>
      </ul>

      <ul>
        <li>Hotline: +852 3701 7000</li>
        <li>Fax: +852 3701 7099</li>
      </ul>

      <ul>
        <li>Asset Management Services</li>
        <li>ams@btlfund.com.hk</li>
      </ul>

      <ul>
        <li>Brokerage Services</li>
        <li>info@btlfund.com.hk</li>
      </ul>

      <div>
        <p></p>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.site-map {
  background: #0f4c81;
}
.site-map {
  display: flex;
  justify-content: space-evenly;
  padding-top: 20px;
}
.site-map_block h4,
.site-map_block a,
.site-map_block li {
  color: #fff;
  font-size: 14px;
}
.site-map_block h4 {
  font-size: 18px;
  position: relative;
}
.site-map_block h4::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-bottom: 1px solid #fff;
}
.site-map_block ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.site-map_block a {
  text-decoration: none;
}
.site-map_block a:hover {
  color: #ccc;
}
.site-map_block li {
  padding: 5px;
}
.contact ul {
  margin-bottom: 15px;
}
.h4_a h4:hover {
  color: #ccc;
}
@media screen and (max-width: 1500px) {
  .site-map {
    display: grid;
    grid-template-columns: auto auto auto;
  }
}
@media screen and (max-width: 1000px) {
  .site-map {
    display: grid;
    grid-template-columns: auto auto;
  }
  .site-map_block h4::after {
    width: 300px;
  }
}
@media screen and (max-width: 700px) {
  .site-map {
    display: grid;
    grid-template-columns: auto;
  }
  .site-map_block h4::after {
    width: auto;
  }
  .site-map_block {
    padding-top: 10px;
  }
}
@media screen and (max-width: 414px) {
  .site-map_block a,
  .site-map_block li {
    font-size: 12px;
  }
  .site-map_block h4::after {
    width: 300px;
  }
}
</style>