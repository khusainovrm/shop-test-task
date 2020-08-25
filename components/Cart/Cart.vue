<template>
  <div class="cart-container">
    <div class="empty" />
    <div class="cart-window">
      <div class="relateve-box">
        <div class="title">
          Корзина
        </div>
        <div class="close" @click="closeModalWindow">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893Z" fill="black" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="black" />
          </svg>
        </div>

        <EmptyCart v-show="!quantityInCart" />
        <FullCart v-show="quantityInCart && !succecfuleSend" />
        <SuccesfulMessage v-if="succecfuleSend" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    quantityInCart () {
      return this.$store.getters['cart/quantityOfChosenGoods']
    },
    succecfuleSend () {
      return this.$store.getters['modelWindowCart/succesfulSend']
    }
  },
  methods: {
    closeModalWindow () {
      if (this.$store.getters['modelWindowCart/succesfulSend']) {
        this.$store.dispatch('modelWindowCart/resetSuccesfulSend')
        this.$store.dispatch('modelWindowCart/closeWindow')
        this.$store.dispatch('cart/resetCart')
      } else {
        this.$store.dispatch('modelWindowCart/closeWindow')
      }
    }
  }
}
</script>

<style lang="scss">
@import '~assets/scss/index.scss';

.cart-container{
  z-index: 1000;
  position: fixed;
  overflow: scroll;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: min(100vh);

  .empty{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;;
    /* white */
    background: #FFFFFF;
    opacity: 0.8;
  }

  .cart-window{
    position: fixed;
    overflow: scroll;
    top: 0;
    bottom: 0;
    right: 0;
    width: 460px;
    /* white */
    background: #FFFFFF;
    box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px 0px 0px 8px;

    .relateve-box{
      position: relative;

      .title{
        position: absolute;
        top: 52px;
        left: 48px;
        font-weight: bold;
        font-size: 32px;
        line-height: 41px;
      }

      .close{
        position: absolute;
        top: 65px;
        right: 53px;
        cursor: pointer;

      }
    }
  }

}
</style>
