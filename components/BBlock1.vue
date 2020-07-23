<template>
  <div class="carousel-background b-block1">
    <v-carousel height="600px" hide-controls hide-delimiters>
      <v-carousel-item ref="carouselItems" v-for="(item, i) in sources" :key="i">
        <div class="background">
          <img :src="item.src" />
        </div>
        <v-img position="bottom center" :src="item.src">
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
          src: "/images/slide1.jpg",
          link: "#",
          title: this.$t("index.block1.OurVision"),
          texts: [this.$t("index.block1.OurVisionContent")]
        },
        {
          src: "/images/slide2.jpg",
          title: this.$t("index.block1.OurMission"),
          link: "#",
          texts: [this.$t("index.block1.OurMissionContent")]
        },
        {
          src: "/images/slide3.jpg",
          title: this.$t("index.block1.OurDifference"),
          link: "#",
          texts: [
            this.$t("index.block1.OurDifferenceContent"),
            this.$t("index.block1.OurMissionContent2")
          ]
        }
      ]
    };
  }
};
</script>
<style scoped>
.b-block1 {
  margin-bottom: 30px;
}
.carousel-background {
  position: relative;
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
  width: 80%;
  margin: auto;
}
.v-carousel {
  box-shadow: none;
}
.background {
  width: 100vw;
  top: -72px;
  bottom: 0;
  position: absolute;
  overflow: hidden;
}
.background img {
  height: 110vh;
  width: 110vw;
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
  background: rgba(255, 255, 255, 0.6);
  width: 500px;
  position: absolute;
  bottom: 0px;
  padding: 10px;
}
.background-content__title {
  font-size: 50px;
  padding: 10px;
  margin: 0;
}
.background-content__text {
  font-size: 20px;
  line-height: 30px;
  padding: 10px;
  margin: 0 auto;
  font-weight: bold;
  text-align: justify;
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
    bottom: 0px;
    top: auto;
  }
}
</style>
<style>
.carousel-background .v-carousel__controls {
  width: fit-content;
  left: calc(50vw - 132px / 2);
  border-radius: 20px 20px 0px 0px;
  background-color: #0f4c81;
}
@media screen and (max-width: 414px) {
  .carousel-background .v-carousel__controls {
    display: none;
  }
}
</style>
