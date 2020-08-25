<template>
  <div class="full-cart">
    Товары в корзине
    <div class="cart-content">
      <transition-group name="list" tag="p">
        <div v-for="product in products" :key="product.additionalId" class="item">
          <div class="image-item">
            <img src="/louis.png" alt="louis">
          </div>
          <div class="description-item">
            {{ product.name }}
          </div>
          <div class="price-item">
            {{ product.price | toRoubles }}
          </div>
          <div class="delete-icon" @click="removeHanlder(product.additionalId)">
            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 5C0 4.44772 0.447715 4 1 4H19C19.5523 4 20 4.44772 20 5C20 5.55228 19.5523 6 19 6H1C0.447715 6 0 5.55228 0 5Z" fill="#959DAD" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8 2C7.73478 2 7.48043 2.10536 7.29289 2.29289C7.10536 2.48043 7 2.73478 7 3V4H13V3C13 2.73478 12.8946 2.48043 12.7071 2.29289C12.5196 2.10536 12.2652 2 12 2H8ZM15 4V3C15 2.20435 14.6839 1.44129 14.1213 0.87868C13.5587 0.31607 12.7956 0 12 0H8C7.20435 0 6.44129 0.31607 5.87868 0.87868C5.31607 1.44129 5 2.20435 5 3V4H3C2.44772 4 2 4.44772 2 5V19C2 19.7957 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H15C15.7957 22 16.5587 21.6839 17.1213 21.1213C17.6839 20.5587 18 19.7957 18 19V5C18 4.44772 17.5523 4 17 4H15ZM4 6V19C4 19.2652 4.10536 19.5196 4.29289 19.7071C4.48043 19.8946 4.73478 20 5 20H15C15.2652 20 15.5196 19.8946 15.7071 19.7071C15.8946 19.5196 16 19.2652 16 19V6H4Z" fill="#959DAD" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8 9C8.55229 9 9 9.44771 9 10V16C9 16.5523 8.55229 17 8 17C7.44772 17 7 16.5523 7 16V10C7 9.44771 7.44772 9 8 9Z" fill="#959DAD" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 9C12.5523 9 13 9.44771 13 10V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V10C11 9.44771 11.4477 9 12 9Z" fill="#959DAD" />
            </svg>
          </div>
          <div class="raiting-star-icon">
            <div class="raiting-star-relative-box">
              <div class="upper-star">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00002 0.125C7.2379 0.125 7.45517 0.260045 7.56046 0.47336L9.34643 4.09154L13.3404 4.67532C13.5758 4.70972 13.7712 4.87473 13.8445 5.10098C13.9179 5.32723 13.8565 5.57552 13.6861 5.74147L10.7966 8.55585L11.4785 12.5318C11.5187 12.7663 11.4223 13.0033 11.2299 13.1432C11.0374 13.283 10.7822 13.3014 10.5716 13.1907L7.00002 11.3124L3.42843 13.1907C3.21785 13.3014 2.96267 13.283 2.77018 13.1432C2.5777 13.0033 2.48129 12.7663 2.52151 12.5318L3.20344 8.55585L0.313935 5.74147C0.143549 5.57552 0.0821284 5.32723 0.155489 5.10098C0.22885 4.87473 0.424275 4.70972 0.659626 4.67532L4.6536 4.09154L6.43958 0.47336C6.54487 0.260045 6.76213 0.125 7.00002 0.125ZM7.00002 2.16203L5.62921 4.93914C5.53825 5.12342 5.36251 5.25121 5.15916 5.28093L2.09278 5.72913L4.3111 7.88978C4.45852 8.03336 4.52581 8.24032 4.49102 8.44315L3.96763 11.4948L6.70911 10.0531C6.89122 9.95731 7.10881 9.95731 7.29093 10.0531L10.0324 11.4948L9.50901 8.44315C9.47422 8.24032 9.54151 8.03336 9.68893 7.88978L11.9073 5.72913L8.84087 5.28093C8.63753 5.25121 8.46179 5.12342 8.37083 4.93914L7.00002 2.16203Z" fill="#F2C94C" />
                </svg>
              </div>
              <div class="down-star">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.5 3L0 0H6H12L9.5 3V6.5L9 7.5L6 6L5 6.5L2.5 7.5V6.5V3Z" fill="#F2C94C" />
                </svg>
              </div>
              <div class="raiting-number-item">
                {{ product.rating }}
              </div>
            </div>
          </div>
        </div>
      </transition-group>
      <div class="make-order">
        Оформить заказ
        <form class="form-order" @submit.prevent="sendHandler">
          <input
            v-model="name"
            type="text"
            placeholder="Ваше имя"
            :class="{invalid:!$v.name.required && $v.name.$dirty}"
          >
          <input
            v-model="tel"
            v-mask="'+7 (###) ###-##-##'"
            type="tel"
            placeholder="Телефон"
            :class="{invalid:(!$v.tel.required && $v.tel.$dirty) || ($v.tel.$dirty && !$v.tel.minLength)}"
          >
          <input
            v-model="address"
            type="text"
            placeholder="Адресс"
            :class="{invalid:!$v.address.required && $v.address.$dirty}"
          >
          <button type="submit">
            Отправить
          </button>
        </form>

        <div
          v-if="(!$v.name.required && $v.name.$dirty)
            || (!$v.address.required && $v.address.$dirty)
            || (!$v.tel.required && $v.tel.$dirty)
            || ($v.tel.$dirty && !$v.tel.minLength)"
          class="warning"
        >
          <div class="exclamation">
            !!
          </div>
          <div class="warning-text">
            Все полня обязательные. <br>
            После удачной отправки формы содержимое корзины очищается
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
import { mask } from 'vue-the-mask'

export default {
  data: () => ({
    directives: { mask },
    name: '',
    tel: '',
    address: ''
  }),
  validations: {
    name: { required },
    tel: { required, minLength: minLength(13) },
    address: { required }
  },
  computed: {
    products () {
      return this.$store.getters['cart/productsInCart']
    }
  },
  methods: {
    sendHandler () {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      const ordered = this.$store.getters['cart/productsInCart']
      const orderForSend = { name: this.name, tel: this.tel, address: this.address, order: [...ordered] }
      // eslint-disable-next-line
      console.log('Заказаз сформирован: ', orderForSend)
      this.$store.dispatch('modelWindowCart/succesfulSend')
    },
    removeHanlder (additionalId) {
      this.$store.dispatch('cart/removeProductFromCart', additionalId)
    }
  }

}
</script>

<style lang="scss">
@import '~assets/scss/index.scss';

.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(30px);
}

.full-cart{
  position: absolute;
  top: 117px;
  right: 48px;
  left: 48px;
  font-size: 18px;
  line-height: 23px;
  /* grey */
  color: #59606D;

  .cart-content{
    margin-top: 16px;
    position: relative;

    .item{
      position: relative;
      width: 364px;
      height: 120px;
      margin-bottom: 12px;
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
      border-radius: 8px;
      transition: all 1s;

      .image-item{
        position: absolute;
        top: 15px;
        left:25px;

          img{
            width: 70.57px;
            height: 90px;
          }
      }

      .description-item{
        position: absolute;
        top: 12px;
        left: 130px;
        width: 170px;
        font-size: 14px;
        line-height: 18px;
        /* grey */
        color: #59606D;
      }

      .price-item{
        position: absolute;
        top: 54px;
        left: 130px;
        font-weight: bold;
        font-size: 14px;
        line-height: 18px;
        /* black */
        color: #1F1F1F;
      }

      .delete-icon{
        position: absolute;
        top: 49px;
        right: 22px;
        cursor: pointer;
      }

      .raiting-star-icon{
        position: absolute;
        top: 88px;
        left: 130px;
        width: 34px;
        height: 20px;

        .raiting-star-relative-box{
          position: relative;

          .upper-star{
            position: absolute;
            top: 3.12px;
            left: 3.13px;
          }

          .down-star{
            position: absolute;
            top: 2px;
            left: 4px;
          }

          .raiting-number-item{
            position: absolute;
            top: 7px;
            right: 0;
            bottom: 0;
            font-weight: bold;
            font-size: 10px;
            line-height: 13px;
            /* Yellow */
            color: #F2C94C;
          }
        }

      }
    }

    .make-order{
      margin-top: 20px;

      .form-order {
        display: flex;
        flex-direction: column;
        margin-top: 16px;

        input{
          width: 364px;
          height: 50px;
          /* grey-extra-light */
          background: #F8F8F8;
          border-radius: 8px;
          margin-bottom: 16px;
          font-size: 16px;
          border: none;
          padding-left: 14px;
          color: #1F1F1F;

          &:focus{
            font-size: 16px;
            /* black */
            color: #1F1F1F;
          }

          &::placeholder{
            font-size: 16px;
            /* grey-light */
            color: #959DAD;
            padding-top: 14px;
          }
        }

        button {
          width: 364px;
          height: 50px;
          /* black */
          background: #1F1F1F;
          border-radius: 8px;
          font-size: 16px;
          /* white */
          color: #FFFFFF;

          &:active{
            background: #59606D;
          }

          &:focus{
            outline: none;
          }
        }
      }

      .warning {
        @include flex;
        margin-top: 32px;

        .exclamation{
          width: 19px;
          height: 41px;
          font-weight: bold;
          font-size: 32px;
          line-height: 41px;
          /* Red */
          color: #EB5757;
        }
        .warning-text{
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 21px;
          margin-left: 8px;
          color: #000000;
        }
      }
    }

  }
}

</style>
