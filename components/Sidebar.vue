<template>
  <div class="sidebar">
    <h1>Каталог</h1>
    <div class="category-container">
      <div class="category">
        <p>Рюкзак</p>
      </div>
      <div class="category">
        Футболки
      </div>
      <div class="category">
        Рубашки
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '~assets/scss/index.scss';

.sidebar{
  position: absolute;
  top: $header-height;
  width: $sidebar-width;
  height: min(100vh);

  h1{
    position:absolute;
    left: 88px;
    top: 32px;
    font-family: 'PT Sans', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 41px;
    /* black */
    color: #1F1F1F;

  }

  .category-container{
    position: absolute;
    width: 161px;
    left: 87px;
    top: 97px;

    .category{
      font-family: PT Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 21px;
      /* identical to box height */
      display: flex;
      align-items: flex-end;
      /* grey */
      color: #59606D;
      margin-bottom: 16px;

      &:hover{
        cursor: pointer;
      }
    }
  }
}
</style>
