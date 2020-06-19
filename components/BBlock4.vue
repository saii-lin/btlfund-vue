<template>
  <div class="block4">
    <h2>MEET THE TEAM</h2>
    <div class="block4_pic">
      <div class="block4_pic0 block4_pic1" @click="openDialog(0)">
        <div class="block4_btn0">
          <div class="block4_btn1">Read More</div>
        </div>
      </div>
      <div class="block4_pic0 block4_pic2" @click="openDialog(1)">
        <div class="block4_btn0">
          <div class="block4_btn1">Read More</div>
        </div>
      </div>
    </div>
    <div class="block4_pic">
      <div class="block4_pic0 block4_pic3" @click="openDialog(2)">
        <div class="block4_btn0">
          <div class="block4_btn1">Read More</div>
        </div>
      </div>
      <div class="block4_pic0 block4_pic4" @click="openDialog(3)">
        <div class="block4_btn0">
          <div class="block4_btn1">Read More</div>
        </div>
      </div>
    </div>
    <v-dialog v-model="dialog" max-width="1000px">
      <v-card>
        <v-carousel class="lightbox-carousel" :cycle="false" height="400px" hide-delimiters>
          <v-carousel-item ref="carouselItems" v-for="(item, i) in members" :key="i">
            <div class="member-grid">
              <v-img :src="item.src" class="member-grid__avatar"></v-img>
              <div class="member-grid__content">
                <h2 class="member-grid__content__title">{{ item.title }}</h2>
                <p
                  class="member-grid__content__text"
                  v-for="(text, index) in item.texts"
                  :key="index"
                >{{ text }}</p>
              </div>
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    members: [
      {
        src: "images/index5.jpeg",
        title:
          "Mr. Tang Chi Hong, Eric - Responsible Officer / Chief Executive Officer",
        texts: [
          "Mr. Tang has been in the banking and finance industry for over 30 years with global exposure and a strong focus in the securities and futures sector. His experience ranged from wealth management services for high-net-worth individuals in all major asset classes including equities, fixed income products, futures and options, to different functions in operations, particularly dealing, settlement, client services and risk management. He once co-managed an in-house Hedge Fund Portfolio when he worked with the Crosby Group. Above all, he commands invaluable practical skills in new start-up with all-round experience in managing the daily operations of an investment intermediary.",
          "Mr. Tang previously held management position at various prominent companies including Green Futures (Hong Kong) Ltd., Kingsway Financial Services Group, Boom Securities, Crosby Group, Standard Chartered Bank International Private Banking and South China Securities after starting off at several reputable brokerages including Charles Schwab, Paine Webber and Richardson Greenshields of Canada."
        ]
      },
      {
        src: "images/index6.jpeg",
        title: "Mr. Lui Chi Lung , Louis - Responsible Officer",
        texts: [
          "Mr. Lui has established his career in the private banking and asset management sector over the past 25 years. During the period, he has been working for several major European banks, as well as managing a portfolio of hundred millions US dollar of assets under management(AUM). He was once the non-executive director of a Hong Kong listed company. Mr. Lui possesses extensive knowledge in various types of investment products, covering equities, fixed income, mutual funds, private equities, to structured derivative products. He also has experience in managing a loan portfolio for his high net-worth individual customers."
        ]
      },
      {
        src: "images/index7.jpeg",
        title:
          "Mr. Yeung Chung Wing, Michel - General Manager / Compliance & Operations",
        texts: [
          "Mr. Yeung is a management accountant and an experienced banker for over 15 years. Previously, he headed the finance and administration function of a licensed mobile telecommunications provider in Hong Kong. He will assist to monitoring compliance issues and general administration matters, the accounting/finance function and daily business operations."
        ]
      },
      {
        src: "images/index8.jpeg",
        title: "",
        texts: []
      }
    ]
  }),
  methods: {
    openDialog(index) {
      this.dialog = true;
      this.$refs.carouselItems[index].toggle();
    }
  }
};
</script>

<style scoped>
.block4 {
  background: #cdd2d1;
}
.block4 > h2 {
  font-size: 50px;
  text-align: center;
  padding: 20px;
}
.block4_pic {
  display: flex;
  justify-content: center;
}
.block4_pic0 {
  width: 34vw;
  height: 350px;
  margin: 15px;
  background-size: cover;
  cursor: pointer;
}
.block4_btn0,
.block4_btn1 {
  opacity: 0;
  transition: 0.5s;
}
.block4_pic0:hover .block4_btn0,
.block4_pic0:hover .block4_btn1 {
  opacity: 1;
}
.block4_btn0 {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: relative;
}
.block4_btn1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  background: #002f6c;
  padding: 10px;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}
.block4_btn1:hover {
  background: #1057b4;
}
.block4_pic1 {
  background-image: url(/images/index5.jpeg);
}
.block4_pic2 {
  background-image: url(/images/index6.jpeg);
}
.block4_pic3 {
  background-image: url(/images/index7.jpeg);
}
.block4_pic4 {
  background-image: url(/images/index8.jpeg);
}
.member-grid {
  display: grid;
  grid-template-columns: 450px auto;
}
.member-grid__avatar {
  margin: 20px;
}
.member-grid__content {
  margin: 20px;
  align-self: center;
}
.member-grid__content__title {
  font-size: 20px;
  padding-bottom: 10px;
}
.member-grid__content__text {
  font-size: 16px;
}
.v-dialog__content--active {
  background: #000000d0;
}
</style>
<style>
.lightbox-carousel .v-carousel__prev,
.lightbox-carousel .v-carousel__next {
  position: fixed;
}
@media screen and (max-width: 1000px) {
  .block4_pic {
    display: block !important;
  }
  .block4_pic0 {
    width: 80vw !important;
    margin: 20px auto !important;
  }
  .block4 > h2 {
    font-size: 40px !important;
  }
}
@media screen and (max-width: 414px) {
  .block4 > h2 {
    font-size: 25px !important;
  }
  .block4_pic0 {
    height: 200px !important;
  }
}
</style>
