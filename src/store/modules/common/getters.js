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

    if (state.criteria.localisation) {
      result.push(state.criteria.localisation)
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
  }
}

export default getters
