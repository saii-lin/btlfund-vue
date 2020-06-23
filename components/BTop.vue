<template>
  <div class="top" @click="scrollToTop">
    <img src="/images/top.png" alt />
  </div>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      this.$scrollTo(".page-body", 1000, {
        container: ".body"
      });
    }
  }
};
</script>

<style>
.top > img {
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 98;
  width: 50px;
  cursor: pointer;
  transition: 0.5s;
}
.top > img:hover {
  transform: translateY(-10px);
  filter: hue-rotate(150deg);
}
</style>
