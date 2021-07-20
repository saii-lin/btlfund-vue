<template>
  <div class="block4">
    <h2>{{ $t("index.block4.MeetTheTeam") }}</h2>
    <div class="member-grid" v-if="members.length > 0">
      <v-img
        :width="size"
        :height="size"
        src="/images/block4-1.jpg"
        class="member-grid__avatar"
      ></v-img>
      <div class="member-grid__content">
        <h2 class="member-grid__content__title">{{ members[0].title }}</h2>
        <p
          class="member-grid__content__text"
          v-for="(text, index) in members[0].texts"
          :key="index"
        >
          {{ text }}
        </p>
      </div>
    </div>
    <div class="block4_pic">
      <div class="block4_pic0 block4_pic1" @click="openDialog(0)">
        <div class="block4_btn0">
          <div class="block4_btn1">{{ $t("index.block4.ReadMore") }}</div>
        </div>
        <h2
          class="member-grid__content__text member-grid__content__name"
          v-if="members.length > 0"
          :class="{ 'special-style': $i18n.locale === 'en-us' }"
        >
          {{ members[1].title }}<br />
          {{ members[1].title2 }}
        </h2>
      </div>
      <div class="block4_pic0 block4_pic2" @click="openDialog(1)">
        <div class="block4_btn0">
          <div class="block4_btn1">{{ $t("index.block4.ReadMore") }}</div>
        </div>
        <h2
          class="member-grid__content__text member-grid__content__name"
          v-if="members.length > 0"
          :class="{ 'special-style': $i18n.locale === 'en-us' }"
        >
          {{ members[2].title }}<br />
          {{ members[2].title2 }}
        </h2>
      </div>
      <div class="block4_pic0 block4_pic3" @click="openDialog(2)">
        <div class="block4_btn0">
          <div class="block4_btn1">{{ $t("index.block4.ReadMore") }}</div>
        </div>
        <h2
          class="member-grid__content__text member-grid__content__name"
          v-if="members.length > 0"
          :class="{ 'special-style': $i18n.locale === 'en-us' }"
        >
          {{ members[3].title }}<br />
          {{ members[3].title2 }}
        </h2>
      </div>
    </div>
    <v-dialog data-app v-model="dialog" max-width="800px">
      <v-card>
        <v-btn class="close-btn" icon dark @click="dialog = false">
          <v-icon large>close</v-icon>
        </v-btn>
        <v-carousel
          class="lightbox-carousel"
          :cycle="false"
          height="fit-content"
          hide-delimiters
        >
          <v-carousel-item
            ref="carouselItems"
            v-for="(item, i) in members.slice(1)"
            :key="i"
          >
            <div class="member-grid">
              <v-img
                :width="size"
                :height="size"
                :src="item.src"
                class="member-grid__avatar"
              ></v-img>
              <div
                class="member-grid__content member-grid__content__text member-grid__content__text_scroll"
              >
                <h2
                  class="member-grid__content__title member-grid__content__text_padding"
                >
                  {{ item.title }} {{ item.title2 }}
                </h2>
                <p
                  class="member-grid__content__text_padding"
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
    size: 210,
  }),
  mounted() {
    this.members = [
      {
        src: "/images/block4-1.jpg",
        title: this.$t("index.block4.MrTangChiHong"),
        texts: [
          this.$t("index.block4.MrTangChiHongContent"),
          this.$t("index.block4.MrTangChiHongContent2"),
        ],
      },
      {
        src: "/images/block4-2.jpg",
        title: this.$t("index.block4.MrLuiChiLung"),
        title2: this.$t("index.block4.MrLuiChiLungWork"),
        texts: [this.$t("index.block4.MrLuiChiLungContent")],
      },
      {
        src: "/images/block4-3.jpg",
        title: this.$t("index.block4.MrChanKaiChunClay"),
        title2: this.$t("index.block4.MrChanKaiChunClayWork"),
        texts: [
          this.$t("index.block4.MrChanKaiChunClayContent"),
          this.$t("index.block4.MrChanKaiChunClayContent2"),
          this.$t("index.block4.MrChanKaiChunClayContent3"),
        ],
      },
      {
        src: "/images/block4-4.jpg",
        title: this.$t("index.block4.MrJoeYu"),
        title2: this.$t("index.block4.MrJoeYuWork"),
        texts: [
          this.$t("index.block4.MrJoeYuContent"),
          this.$t("index.block4.MrJoeYuContent2"),
          this.$t("index.block4.MrJoeYuContent3"),
        ],
      },
    ];
  },
  methods: {
    openDialog(index) {
      this.dialog = true;
      this.$refs.carouselItems[index].toggle();
    },
  },
};
</script>

<style scoped>
.block4 {
  background: #fff;
  padding-bottom: 50px;
  max-width: 78%;
  margin: 50px auto;
}
.block4 > .member-grid {
  display: grid;
  grid-template-columns: 250px auto;
  /* grid-column-gap: 30px; */
  width: 100%;
}
.block4 > h2 {
  font-size: 50px;
  padding: 20px;
  width: fit-content;
  margin: auto;
  color: #0f4c81;
}
.block4_pic {
  display: flex;
  justify-content: space-between;
  margin: 60px 20px;
}
.block4_pic0 {
  width: 210px;
  height: 210px;
  /* margin: 20px; */
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
  margin-bottom: 10px;
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
  background-image: url(/images/block4-2.jpg);
}
.block4_pic2 {
  background-image: url(/images/block4-3.jpg);
}
.block4_pic3 {
  background-image: url(/images/block4-4.jpg);
}
.block4_pic4 {
  background: #0f4c81;
}
.member-grid {
  display: grid;
  grid-template-columns: 250px auto;
}
.member-grid__avatar {
  margin: 20px;
  justify-self: end;
  /* background: #0f4c81; */
}
.member-grid__content {
  margin: 20px;
  align-self: center;
  text-align: justify;
}
.member-grid__content__title {
  font-size: 20px;
  padding-bottom: 10px;
}
.member-grid__content__text {
  font-size: 16px;
}
.member-grid__content__name {
  text-align: center;
  line-height: 30px;
  font-weight: bolder;
}
.special-style {
  font-size: 14px;
}
.member-grid__content__text_scroll {
  max-height: 265px;
  overflow-y: scroll;
}
.member-grid__content__text_padding {
  padding: 15px;
  margin: 0;
  line-height: 25px;
}
.v-dialog__content--active {
  background: #000000d0;
}
.close-btn {
  position: fixed;
  top: 20px;
  right: 20px;
}

@media screen and (max-width: 1000px) {
  .block4 > .member-grid {
    grid-template-columns: 1fr;
  }
  .block4 > .member-grid > .member-grid__avatar {
    justify-self: center;
  }
  .block4_pic {
    display: block !important;
  }
  .block4_pic0 {
    width: 70vw !important;
    height: 300px;
    margin: 20px auto !important;
    position: relative;
  }
  .block4 > h2 {
    font-size: 40px !important;
  }
  .block4_pic0 h2 {
    position: absolute;
    bottom: 0px;
    color: white;
    background: rgba(0, 0, 0, 0.3);
  }
}
@media screen and (max-width: 414px) {
  .member-grid {
    grid-template-columns: 1fr;
    grid-template-rows: 2fr;
  }
  .member-grid__avatar {
    width: 200px !important;
    height: 200px !important;
    margin: 10px auto;
  }
  .member-grid__content {
    overflow: scroll;
    height: 260px;
    margin: 10px;
  }
  .block4 > h2 {
    font-size: 25px !important;
  }
  .block4_pic0 {
    height: 200px !important;
  }
  .block4 {
    margin: 10px auto;
  }
}
</style>
<style>
.lightbox-carousel .v-carousel__prev,
.lightbox-carousel .v-carousel__next {
  position: fixed;
}
@media screen and (max-width: 414px) {
  .lightbox-carousel .v-carousel__prev,
  .lightbox-carousel .v-carousel__next {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
  }
}
</style>
