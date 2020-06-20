<template>
  <div class="carousel-background b-block1">
    <v-carousel height="800px" hide-controls>
      <v-carousel-item
        ref="carouselItems"
        v-for="(item, i) in sources"
        :key="i"
      >
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
            >
              {{ text }}
            </p>
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
          link: "#",
          title: this.$t("index.block1.OurVision"),
          texts: [this.$t("index.block1.OurVisionContent")]
        },
        {
          src: "/images/slide2.jpg",
          title: this.$t("index.block1.OurMission"),
          link: "#",
          texts: [
            this.$t("index.block1.OurMissionContent"),
            this.$t("index.block1.OurMissionContent2")
          ]
        },
        {
          src: "/images/slide3.jpeg",
          title: this.$t("index.block1.OurDifference"),
          link: "#",
          texts: [this.$t("index.block1.OurDifferenceContent")]
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
}
.v-carousel {
  box-shadow: none;
}
.background {
  width: 100vw;
  top: -72px;
  height: 700px;
  bottom: 0;
  position: absolute;
  overflow: hidden;
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
  top: 33%;
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
  margin: 0;
  font-weight: bold;
}
@media screen and (max-width: 414px) {
  .carousel-background,
  .v-carousel,
  .v-image {
    height: calc(100vh - 78px) !important;
  }
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
