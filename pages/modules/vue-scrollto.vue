<template>
  <div id="app">
    <div>
      <nuxt-link to="/demo">
        <h3>Go Back To Home Page</h3>
      </nuxt-link>
    </div>
    <div>
      <h3>
        <a
          href="https://vue-scrollto.netlify.app/examples/"
          target="_blank"
        >https://vue-scrollto.netlify.app/examples/</a>
      </h3>
    </div>
    <button v-scroll-to="'#element'">Scroll to #element</button>

    <h1 id="element">Hi. I'm element</h1>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1,
button {
  margin-bottom: 1000px;
}
</style>
