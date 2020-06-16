<template>
  <div>
    <ul>
      <h3>Module Demos:</h3>
      <li v-for="(demo, index) in demos" :key="index">
        <nuxt-link :to="`/modules/${demo}`">{{ demo }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    demos: ["nuxt-i18n", "vue-scroll", "vue-scrollto"]
  })
};
</script>

<style>
</style>
