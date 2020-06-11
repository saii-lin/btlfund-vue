<template>
  <div>
    <header>
      <div>
        <nuxt-link to="/">
          <h3>Go Back To Home Page</h3>
        </nuxt-link>
      </div>
      <div>
        <h3>
          <a
            href="https://github.com/wangpin34/vue-scroll#readme"
            target="_blank"
          >
            https://github.com/wangpin34/vue-scroll#readme
          </a>
        </h3>
      </div>
    </header>
    <div class="hello">
      <div class="dashboard">scrollTop:{{ position.scrollTop }}</div>
      <ol v-scroll:throttle="{ fn: onScroll, throttle: 500 }">
        <li v-for="order of orders" v-bind:key="order">{{ order }}</li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: "orders-view",
  data: function() {
    var limit = 50,
      orders = [],
      orderLabel = "Order";
    while (limit-- > 0) {
      orders.push(`${orderLabel} ${limit}`);
    }
    return {
      orders,
      position: { scrollTop: 0, scrollLeft: 0 }
    };
  },
  methods: {
    onScroll: function(e, position) {
      this.position = position;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 96px;
  line-height: 48px;
  text-align: center;
  font-size: 14px;
  background-color: #009688;
  z-index: 1;
}

.hello {
  width: 100%;
  margin: 96px auto 0;
  position: relative;
  max-height: calc(100vh - 48px);
}

.dashboard {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 32px;
  padding: 0 16px;
  line-height: 32px;
  color: #000;
  background-color: #d7ddd5;
  text-align: left;
  z-index: 1;
}

ol {
  max-height: calc(100vh - 48px - 48px);
  padding: 0;
  margin: 32px auto 0;
  overflow: auto;
  list-style: none;
  color: #009688;
  font-size: 14px;
}

li {
  background: #fff;
  margin: 8px;
  padding: 0 16px;
  line-height: 48px;
  border: 1px solid #009688;
  border-radius: 2px;
  text-align: left;
}
</style>
