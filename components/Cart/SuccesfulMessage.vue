<template>
  <div class="succesful-container">
    <div class="ok">
      <img src="/ok.png" alt="ok">
    </div>
    Заявка успешно отправлена
    <div class="manager">
      Вскоре наш менеджер свяжется с Вами
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import '~assets/scss/index.scss';

.succesful-container{
  position: absolute;
  top: 470px;
  right: 82x;
  left: 81px;
  font-weight: bold;
  font-size: 24px;
  line-height: 31px;
  color: #000000;

  .ok{
    position: absolute;
    top: -95px;
    width: 80px;
    height: 80px;
    left: 109px;
    right: 109px;
  }

  .manager{
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    /* grey */
    color: #59606D;
    @include flex;
  }
}

</style>
