import { isEmpty, get } from 'lodash'

const getters = {
  resumeSearch: state => {
    let result = []
    let asked = ''
    if (state.criterias.sexe === 'M') {
      asked += 'Homme'
    } else {
      asked += 'Femme'
    }
    if (state.criterias.age) {
      asked += ` (${state.criterias.age})`
    }
    asked += ', recherche'
    result.push(asked)

    if (state.criterias.sexeSearch === 'M') {
      result.push(' Homme')
    } else {
      result.push(' Femme')
    }
    const labelLocalisation = get(state, 'criteria.localisation.label', null)
    if (!isEmpty(labelLocalisation)) {
      result.push(`, ${labelLocalisation}`)
    }
    if (state.criterias.rangeAgeMin) {
      result.push(`, age ${state.criterias.rangeAgeMin}-${state.criterias.rangeAgeMax}`)
    }
    if (!isEmpty(state.criterias.keywords)) {
      result.push(`, ${state.criterias.keywords}`)
    }

    return result.join('')
  },
  suggestReferential: state => {
    return state.suggestReferential
  }
}

export default getters
