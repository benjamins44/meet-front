import constants from '~/services/constants'
import { isEmpty, get } from 'lodash'
import referentialApi from './api/referentialApi'

const DEFAULT_SIZE = '20'
const DEFAULT_AGE_MIN = 18
const DEFAULT_AGE_MAX = 99
const DEFAULT_SEXE = 'M'
const DEFAULT_SEXE_SEARCH = 'F'

const defaultQuery = query => {
  return {
    ...query,
    sexe: query.sexe || DEFAULT_SEXE,
    sexeSearch: query.sexeSearch || DEFAULT_SEXE_SEARCH,
    rangeAgeMin: query.rangeAgeMin || DEFAULT_AGE_MIN,
    rangeAgeMax: query.rangeAgeMax || DEFAULT_AGE_MAX,
    page: '1',
    size: DEFAULT_SIZE
  }
}

const getQueries = async (formcriteria, page, size) => {
  const queries = {
    keywords: formcriteria.keywords,
    sexe: formcriteria.sexe || DEFAULT_SEXE,
    age: formcriteria.age,
    sexeSearch: formcriteria.sexeSearch || DEFAULT_SEXE_SEARCH,
    rangeAgeMin: `${formcriteria.rangeAge.min}` || DEFAULT_AGE_MIN,
    rangeAgeMax: `${formcriteria.rangeAge.max}` || DEFAULT_AGE_MAX,
    page: isEmpty(page) ? '1' : `${page}`,
    size: isEmpty(page) ? DEFAULT_SIZE : `${size}`
  }
  const localisationType = get(formcriteria, 'localisation.referentialType')
  switch (localisationType) {
    case constants.TYPE_TOWN:
      queries.town = formcriteria.localisation.code
      break
    case constants.TYPE_DEPARTMENT:
      queries.department = formcriteria.localisation.code
      break
    case constants.TYPE_REGION:
      queries.region = formcriteria.localisation.code
      break
    case constants.TYPE_COUNTRY:
      queries.country = formcriteria.localisation.code
      break
  }

  let allQueries = null
  if (!isEmpty(queries)) {
    const listQuery = []
    Object.keys(queries).forEach(query => {
      if (!isEmpty(queries[query])) {
        listQuery.push(`${query}=${queries[query]}`)
      }
    })
    allQueries = listQuery.join('&')
  }
  console.log(`query:${allQueries}`)
  return allQueries
}

const getCriterias = async queries => {
  const criterias = {
    keywords: queries.keywords,
    sexe: queries.sexe || DEFAULT_SEXE,
    age: queries.age,
    sexeSearch: queries.sexeSearch || DEFAULT_SEXE_SEARCH,
    rangeAge: { min: queries.rangeAgeMin || DEFAULT_AGE_MIN, max: queries.rangeAgeMax || DEFAULT_AGE_MAX }
  }
  const codeLocalisation = get(queries, 'town', null) || get(queries, 'department', null) || get(queries, 'region', null) || get(queries, 'country', null)

  console.log(`if ${codeLocalisation}`)
  if (!isEmpty(codeLocalisation)) {
    console.log(`search ${codeLocalisation}`)
    const localisation = await referentialApi.findByCode(codeLocalisation)
    console.log(`find ${JSON.stringify(localisation)}`)
    criterias.localisation = localisation
  } else {
    criterias.localisation = {}
  }
  console.log(`criterias:${JSON.stringify(criterias)}`)
  return criterias
}

export default {
  getQueries,
  getCriterias,
  defaultQuery
}
