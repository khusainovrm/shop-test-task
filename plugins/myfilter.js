import Vue from 'vue'

function toRoubles (value) {
  const result = new Intl.NumberFormat({
    style: 'currency'
  }).format(value)

  return `${result} ₽`
}

Vue.filter('toRoubles', toRoubles)
