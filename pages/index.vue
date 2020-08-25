<template>
  <div class="container">
    <Header />
    <Sidebar />
    <Select />
    <ProductList />
    <Cart v-if="isCartOpened" />
  </div>
</template>

<script>
export default {
  computed: {
    isCartOpened () {
      return this.$store.getters['modelWindowCart/modalWindowIsOpen']
    }
  },
  mounted () {
    this.$store.dispatch('cart/initCart')
  }
}
</script>

<style lang="scss">
@import '~assets/scss/index.scss';

.container{
  position:relative;
  font-family: PT Sans;
}
</style>
