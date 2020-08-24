<template>
  <div class="select-container">
    <div class="select-box">
      Сортировать по:
      <select name="hero[]">
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
    }
  }
}

</style>
