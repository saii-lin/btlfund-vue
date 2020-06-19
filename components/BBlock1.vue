<template>
  <div class="carousel-background">
    <v-carousel height="800px" hide-controls>
      <v-carousel-item ref="carouselItems" v-for="(item, i) in sources" :key="i">
        <div class="background">
          <img :src="item.src" />
        </div>
        <v-img :src="item.src">
          <div class="background-content">
            <h2 class="background-content__title">{{ item.title }}</h2>
            <p
              class="background-content__text"
              v-for="(text, index) in item.texts"
              :key="index"
            >{{ text }}</p>
          </div>
        </v-img>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default() {
        return [];
      }
    },
    selected: {
      type: Number,
      default: 0
    },
    cycle: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      sources: [
        {
          src: "/images/slide1.jpeg",
          title: this.$t("OurVision"),
          texts: [this.$t("OurVisionContent")]
        },
        {
          src: "/images/slide2.jpg",
          title: "Our Mission",
          texts: [
            "BTL will be trusted to reliably deliver innovative, exemplary and high performance financial services and products, for our clients whilst upholding the highest standards of integrity and quality.",
            "BTL values the trust and confidence our clients placed in us and strive to consistently and steadfastly deliver innovative and exemplary financial services and outstanding performance to them whilst upholding the highest standard of integrity and quality."
          ]
        },
        {
          src: "/images/slide3.jpeg",
          title: "Our Difference",
          texts: [
            "As opposed to beating a benchmark, growing our clients' assets is at the very core of our business.  BTL is fully committed to putting clients' interests as our top priority.  We tailor our exceptional services and portfolio management to meet each client's unique needs."
          ]
        }
      ]
    };
  }
};
</script>
<style scoped>
.carousel-background {
  position: relative;
  height: 800px;
}
.shadow {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.5), 80%, transparent);
  z-index: 1;
}
.v-image {
  height: 100%;
  width: calc(80vh * 16 / 9);
  margin: auto;
  border-radius: 10px;
  background-color: #6f7287;
}
.v-carousel {
  box-shadow: none;
}
.background {
  width: 100vw;
  top: -72px;
  height: 75vh;
  bottom: 0;
  position: absolute;
  overflow: hidden;
  background-color: #6f7287;
}
.background img {
  height: 110vh;
  width: auto;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  filter: blur(15px);
  top: 0;
}
.background::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  opacity: 0.2;
}
.background-content {
  background: rgba(255, 255, 255, 0.8);
  width: 500px;
  position: absolute;
  bottom: 0;
}
.background-content__title {
  font-size: 50px;
  padding: 10px;
  margin: 0;
  color: #424746;
}
.background-content__text {
  font-size: 20px;
  line-height: 30px;
  padding: 10px;
  margin: 0;
}
@media screen and (max-width: 414px) {
  .background-content__text {
    font-size: 14px;
    line-height: 20px;
  }
  .background-content__title {
    font-size: 25px;
  }
  .v-image {
    width: 100vw;
  }
  .background-content {
    width: 100vw;
  }
}
</style>
<style>
.carousel-background .v-carousel__controls {
  width: fit-content;
  left: calc(50vw - 110px);
  border-radius: 10px;
}
@media screen and (max-width: 414px) {
  .carousel-background .v-carousel__controls {
    display: none;
  }
}
</style>
