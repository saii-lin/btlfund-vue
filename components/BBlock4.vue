<template>
  <div class="block4">
    <h2>{{ $t("index.block4.MeetTheTeam") }}</h2>
    <div class="block4_pic">
      <div class="block4_pic0 block4_pic1" @click="openDialog(0)">
        <div class="block4_btn0">
          <div class="block4_btn1">{{ $t("index.block4.ReadMore") }}</div>
        </div>
      </div>
      <div class="block4_pic0 block4_pic2" @click="openDialog(1)">
        <div class="block4_btn0">
          <div class="block4_btn1">{{ $t("index.block4.ReadMore") }}</div>
        </div>
      </div>
    </div>
    <div class="block4_pic">
      <div class="block4_pic0 block4_pic3" @click="openDialog(2)">
        <div class="block4_btn0">
          <div class="block4_btn1">{{ $t("index.block4.ReadMore") }}</div>
        </div>
      </div>
      <div class="block4_pic0 block4_pic4" @click="openDialog(3)">
        <div class="block4_btn0">
          <div class="block4_btn1">{{ $t("index.block4.ReadMore") }}</div>
        </div>
      </div>
    </div>
    <v-dialog v-model="dialog" max-width="1000px">
      <v-card>
        <v-btn class="close-btn" icon dark @click="dialog = false">
          <v-icon large>close</v-icon>
        </v-btn>
        <v-carousel
          class="lightbox-carousel"
          :cycle="false"
          height="500px"
          hide-delimiters
        >
          <v-carousel-item
            ref="carouselItems"
            v-for="(item, i) in members"
            :key="i"
          >
            <div class="member-grid">
              <v-img
                :width="size"
                :height="size"
                :src="item.src"
                class="member-grid__avatar"
              ></v-img>
              <div class="member-grid__content">
                <h2 class="member-grid__content__title">{{ item.title }}</h2>
                <p
                  class="member-grid__content__text"
                  v-for="(text, index) in item.texts"
                  :key="index"
                >
                  {{ text }}
                </p>
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
    members: [],
    size: 450
  }),
  mounted() {
    this.members = [
      {
        src: "/images/block4-1.png",
        title: this.$t("index.block4.MrTangChiHong"),
        texts: [
          this.$t("index.block4.MrTangChiHongContent"),
          this.$t("index.block4.MrTangChiHongContent2")
        ]
      },
      {
        src: "/images/block4-2.png",
        title: this.$t("index.block4.MrLuiChiLung"),
        texts: [this.$t("index.block4.MrLuiChiLungContent")]
      },
      {
        src: "/images/block4-3.png",
        title: this.$t("index.block4.MrYeungChungWingMichel"),
        texts: [this.$t("index.block4.MrYeungChungWingMichelContent")]
      },
      {
        src: "/images/block4-4.png",
        title: "",
        texts: []
      }
    ];
  },
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
  padding-bottom: 20px;
}
.block4 > h2 {
  font-size: 50px;
  padding: 30px;
  width: fit-content;
  margin: auto;
  color: white;
}
.block4_pic {
  display: flex;
  justify-content: center;
}
.block4_pic0 {
  width: 34vw;
  height: calc(34vw * 0.7);
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
  background: #0f4c81;
  padding: 10px;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}
.block4_btn1:hover {
  background: #1057b4;
}
.block4_pic1 {
  background-image: url(/images/block4-1.png);
}
.block4_pic2 {
  background-image: url(/images/block4-2.png);
}
.block4_pic3 {
  background-image: url(/images/block4-3.png);
}
.block4_pic4 {
  background-image: url(/images/block4-4.png);
}
.member-grid {
  display: grid;
  grid-template-columns: 500px auto;
}
.member-grid__avatar {
  margin: 20px;
  justify-self: center;
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
.close-btn {
  position: fixed;
  top: 20px;
  right: 20px;
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
