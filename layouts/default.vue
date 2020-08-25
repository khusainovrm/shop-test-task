<template>
  <div class="container">
    <Header />
    <Sidebar />
    <Select />
    <Nuxt />
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

html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.container{
  position:relative;
  font-family: PT Sans;
}

@media only screen and (max-width: 600px) {
  .gridOnSmall {
    grid-template-columns: repeat(1, 1fr)!important;
  }
}

@media only screen and (min-width: 600px) and (max-width: 900px) {
  .gridOn1083 {
    grid-template-columns: repeat(2, 1fr)!important;
  }
}

@media only screen and (min-width: 900px) and (max-width: 1150px) {
  .gridOn1150 {
    grid-template-columns: repeat(3, 1fr)!important;
  }
}
</style>
