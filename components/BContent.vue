<template>
  <div class="content">
    <template v-for="(text, index) in data.texts">
      <p v-if="typeof text === typeof ''" :key="index">{{ $t(text) }}</p>
      <ul v-else-if="text.type === 'list'" :key="index">
        <li v-for="(listText, jndex) in text.texts" :key="`${index}-${jndex}`">{{ $t(listText) }}</li>
      </ul>
      <template v-else-if="text.type === 'component'">
        <b-asset-management v-if="text.name === 'BAssetManagement'" :key="index"></b-asset-management>
        <b-introducing-brokerage v-else-if="text.name === 'BIntroducingBrokerage'" :key="index"></b-introducing-brokerage>
      </template>
    </template>
  </div>
</template>

<script>
import BAssetManagement from "~/components/BAssetManagement.vue";
import BIntroducingBrokerage from "~/components/BIntroducingBrokerage.vue";
export default {
  components: {
    BAssetManagement,
    BIntroducingBrokerage
  },
  props: {
    data: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style>
.content {
  padding-bottom: 20px;
}
.content p {
  font-size: 20px;
  margin: 20px;
  line-height: 30px;
  /* color: #0f4c81; */
}
@media screen and (max-width: 414px) {
  .content p {
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
