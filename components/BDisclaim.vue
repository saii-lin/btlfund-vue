<template>
  <v-card class="b-disclaim">
    <v-card-text>
      <v-tabs centered color="transparent" slider-color="black" grow>
        <v-tab
          v-for="(locale, index) in locales"
          :key="index"
          ripple
          :href="`#tab-${locale.value}`"
        >{{ locale.text }}</v-tab>
        <v-tab-item value="tab-enus">
          <v-card flat>
            <b-disclaim-content-enus @agree="agree" @cancel="cancel"></b-disclaim-content-enus>
          </v-card>
        </v-tab-item>
        <v-tab-item value="tab-zhtw">
          <b-disclaim-content-zhtw @agree="agree" @cancel="cancel"></b-disclaim-content-zhtw>
        </v-tab-item>
        <v-tab-item value="tab-zhcn">
          <v-card flat>
            <b-disclaim-content-zhcn @agree="agree" @cancel="cancel"></b-disclaim-content-zhcn>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card-text>
  </v-card>
</template>

<script>
import BDisclaimContentEnus from "@/components/BDisclaim/BDisclaimContentEnus";
import BDisclaimContentZhtw from "@/components/BDisclaim/BDisclaimContentZhtw";
import BDisclaimContentZhcn from "@/components/BDisclaim/BDisclaimContentZhcn";
export default {
  components: {
    BDisclaimContentEnus,
    BDisclaimContentZhtw,
    BDisclaimContentZhcn
  },
  data: () => ({
    locales: [
      { text: "English", value: "enus" },
      { text: "繁體", value: "zhtw" },
      { text: "简体", value: "zhcn" }
    ]
  }),
  methods: {
    cancel() {
      location.href = "about:blank";
      // window.opener = null;
      // window.open("", "_self");
      // window.close();
    },
    agree() {
      this.$emit("close");
    }
  }
};
</script>

<style>
.b-disclaim .panel-heading1 {
  font-size: 20px;
  margin: 20px auto;
  width: fit-content;
}
.b-disclaim .alert {
  border-radius: 15px;
  padding: 10px 15px;

  margin: 20px 10px;
}
.b-disclaim .panel-body h4 {
  font-size: 18px;
}
.b-disclaim .btn {
  color: rgb(0, 0, 0);
  border-radius: 5px;
  padding: 5px;
}
.b-disclaim .btn-danger {
  transition: 0.5s;
  background: #fff;
  font-weight: bold;
}
.b-disclaim .btn-success {
  border: 1px solid #000;
  transition: 0.5s;
  background: #000;
  color: #fff;
}
.b-disclaim .btn-success:hover {
  background: rgb(71, 71, 71);
  color: #fff;
}
.b-disclaim .btn-danger:hover {
  background: rgb(0, 0, 0);
  color: #fff;
}
.b-disclaim .v-card__actions {
  display: flex;
  justify-content: center;
}
.b-disclaim form {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.btn {
  margin: 5px;
}
.btn span {
  padding: 10px;
}
.v-card__actions {
  background: rgb(238, 238, 238);
}
.v-card__text {
  background: rgb(238, 238, 238);
}
</style>
