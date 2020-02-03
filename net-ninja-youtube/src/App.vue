<template>
  <div id="app">
    <ProductListOne v-bind:products="products"/>
    <ProductListTwo v-bind:products="products"/>
  </div>
</template>

<script>
import ProductListOne from './components/ProductListOne'
import ProductListTwo from './components/ProductListTwo'

export default {
  name: 'app',
  components: {
    ProductListOne,
    ProductListTwo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin-top: 60px;
}
</style>
