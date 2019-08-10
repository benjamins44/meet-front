import { isEmpty } from 'lodash'

const ValidationMixin = {
  methods: {
    require(val) {
      return !isEmpty(val) || 'Obligatoire'
    },
    validAge(val) {
      return (!isEmpty(val) && val > 17 && val < 100) || '18 à 99'
    }
  }
}

export default ValidationMixin
