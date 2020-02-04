<template>
  <div class="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="product in saleProducts" v-bind:key="product.name">
        <span class="name">{{product.name}} </span>
        <span class="price">${{product.price}}</span>
      </li>
    </ul>
    <button @click="reducePrice">Reduce Price</button>
  </div>
</template>

<script>
export default {
  name: "ProductListOne",
  computed: {
    products() {
      return this.$store.state.products;
    },
    saleProducts() {
     return this.$store.getters.saleProducts
    }
  },
  methods: {
    reducePrice: function() {
      this.$store.dispatch('reducePrice');
    }
  }
};
</script>

<style scoped>
</style>
