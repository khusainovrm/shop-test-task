<template>
  <div class="empty-cart">
    Пока что вы ничего не добавили
    <br>
    в корзину.
    <div class="button" @click="closeModalWindow">
      Перейти к выбору
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModalWindow () {
      this.$store.dispatch('modelWindowCart/closeWindow')
    }
  }
}
</script>

<style lang="scss">
@import '~assets/scss/index.scss';

.empty-cart{
  position: absolute;
  top: 117px;
  right: 48px;
  left: 48px;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 28px;
  color: #000000;

  .button{
    background: #1F1F1F;
    width: 364px;
    height: 50px;
    margin-top: 24px;
    border-radius: 8px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    /* white */
    color: #FFFFFF;
    @include flex;
    cursor: pointer;

      &:active{
        background: #59606D;
      }

      &:focus{
        outline: none;
      }
  }
}

</style>
