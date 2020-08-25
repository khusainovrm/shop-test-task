<template>
  <div class="sidebar">
    <h1>Каталог</h1>
    <div class="category-container">
      <div v-for="category in categories" :key="category.id" class="category" @click="chooseCategory(category.id)">
        <nuxt-link :to="'/category/' + category.id">
          <p :class="{active:getCategory(category.id)}">
            {{ category.name }}
          </p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async fetch () {
    const { data } = await this.$axios.get('http://front-test.idalite.com/api/product-category')
    this.categories = data
  },
  data: () => ({
    categories: []
  }),
  computed: {
    isActive (id) {
      const categoryId = this.$store.getters['selectedCategory/selectedCategory']
      return categoryId === id
    }
  },
  methods: {
    chooseCategory (id) {
      this.$store.dispatch('selectedCategory/selectedCategory', id)
    },
    getCategory (id) {
      return this.$store.getters['selectedCategory/selectedCategory'] === id
    }
  }
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

    a {
      color: #000 !important;
      text-decoration: none;

      p {
        /* grey-light */
        color: #959DAD;

        &:hover{
          /* grey */
          color: #59606D;
        }
      }

      p.active {
        /* black */
        color: #1F1F1F;
        text-decoration-line: underline;
      }
    }

    }
  }
}
</style>
