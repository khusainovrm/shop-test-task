<template>
  <nuxt-child />
</template>

<script>
export default {
  transition: 'cat'
}
</script>

<style lang="scss">
.cat-enter-active, .cat-leave-active { transition: opacity 1s; }
.cat-enter, .cat-leave-active { opacity: 0; }

</style>
