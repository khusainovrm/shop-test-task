<template>
  <div class="select-container">
    <div class="select-box">
      Сортировать по:
      <select v-model="value" name="select">
        <option selected value="price">
          цене
        </option>
        <option value="popular">
          популярности
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    value: 'price'
  }),
  watch: {
    value () {
      this.$store.dispatch('sort/setSort', this.value)
    }
  }

}
</script>

<style lang="scss">
@import '~assets/scss/index.scss';

.select-container{
  position:absolute;
  top:$header-height;
  left: $sidebar-width;
  right: 88px;
  height: 97px;

  .select-box{
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 16px;
    line-height: 21px;
    /* black */
    color: #1F1F1F;
  }

  select{
    border:none;
    font-size: 16px;
    line-height: 21px;
    /* grey */
    color: #59606D;

    option{
      font-size: 14px;
      line-height: 18px;
      background: #FFFFFF;
      border:none;
      /* card-bs */
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
      border-radius: 8px;
    }
  }
}

</style>
