import { isEmpty, get } from 'lodash'

function capitalize_Words(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}

const getters = {
  resumeSearch: state => {
    let result = []
    let asked = ''
    if (state.profil.sexe === 'M') {
      asked += 'Homme'
    } else {
      asked += 'Femme'
    }
    if (state.profil.age) {
      asked += ` (${state.profil.age})`
    }
    asked += ' recherche'
    result.push(asked)

    const labelLocalisation = get(state, 'criteria.localisation.label', null)
    if (isEmpty(labelLocalisation)) {
      result.push(labelLocalisation)
    }
    if (state.criteria.sexe === 'M') {
      result.push('Homme')
    } else {
      result.push('Femme')
    }
    if (state.criteria.rangeAge) {
      result.push(`${state.criteria.rangeAge.min}-${state.criteria.rangeAge.max}`)
    }

    return result.join(' ')
  },
  suggestReferentialFormatted: state => {
    return state.suggestReferential.map(item => {
      return {
        ...item,
        labelFormatted: isEmpty(item.searchCode) ? capitalize_Words(item.label) : `${capitalize_Words(item.label)} (${item.searchCode})`
      }
    })
  }
}

export default getters
