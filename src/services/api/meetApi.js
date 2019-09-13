import http from '~/services/api/axiosClient'
import constants from '~/services/constants'
import { isEmpty } from 'lodash'

const findByCriteria = async (formprofil, formcriteria, page, size) => {
  const httpClient = await http.get()
  const criterias = {
    keywords: formcriteria.keywords,
    sexe: formprofil.sexe,
    // age: formprofil.age,
    sexeSearch: formcriteria.sexe,
    rangeAgeMin: formcriteria.rangeAge.min,
    rangeAgeMax: formcriteria.rangeAge.max
  }
  const localisationType = formcriteria.localisation.type
  switch (localisationType) {
    case constants.TYPE_TOWN: 
      criterias.town=formcriteria.localisation.code
      break
    case constants.TYPE_DEPARTMENT: 
      criterias.department=formcriteria.localisation.code
      break
    case constants.TYPE_REGION: 
      criterias.region=formcriteria.localisation.code
      break
    case constants.TYPE_COUNTRY: 
      criterias.country=formcriteria.localisation.code
      break
  }

  let allCriterias = null;
  if (!isEmpty(criterias)) {
    const listCriteria = []
    Object.keys(criterias).forEach( criteria => {
      if (!isEmpty(criterias[criteria])) {
        listCriteria.push(`${criteria}=${criterias[criteria]}`)
      }
    })
    allCriterias = listCriteria.join('&')
  }
console.log(page)
  return (await httpClient.get(`/meets?${allCriterias}&page=${page}&size=${size}`)).data
}

const findById = async id => {
  const httpClient = await http.get()
  return await httpClient.get(`/meets/${id}`).data
}

export default {
  findByCriteria,
  findById
}
