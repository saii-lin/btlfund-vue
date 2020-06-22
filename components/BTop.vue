<template>
  <div class="top">
    <img src="/images/top.png" alt />
  </div>
</template>

<script>
export default {};
</script>

<style>
.top > img {
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 100;
  width: 50px;
  cursor: pointer;
  transition: 0.5s;
}
.top > img:hover {
  transform: translateY(-10px);
  filter: hue-rotate(150deg);
}
</style>