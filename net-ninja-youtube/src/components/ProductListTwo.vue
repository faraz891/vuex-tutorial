<template>
  <div class="product-list-two">
    <h2>Product List Two</h2>
    <ul>
      <li v-for="product in saleProducts" v-bind:key="product.name">
        <span class="name">{{product.name}}</span>
        <span class="price">{{product.price}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ProductListTwo",
  computed: mapGetters(["saleProducts"])
};
</script>

<style scoped>
</style>