<template>
  <v-card>
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

<style></style>
