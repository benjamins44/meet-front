import http from '~/services/api/axiosClient'
import NodeCache from 'node-cache'
import { isEmpty } from 'lodash'
const refCache = new NodeCache({ stdTTL: 100, checkperiod: 3600 })

const findByKeyword = async (keyword, size, types) => {
  const httpClient = await http.get()
  const results = (await httpClient.get(`/referentials?keyword=${keyword}&size=${size}&types=${types}`)).data

  return results.map(result => {
    result = formatReferential(result)
    refCache.set(result.code, result)
    return result
  })
}

const findByCode = async code => {
  const elementCache = await refCache.get(code)
  if (elementCache) {
    console.log(`use cache for${code}`)
    return elementCache
  }
  const httpClient = await http.get()
  let result = (await httpClient.get(`/referentials/${code}`)).data
  result = formatReferential(result)
  refCache.set(code, result)
  return result
}

const formatReferential = result => {
  const searchCode = result.searchCode
  if (searchCode !== null && typeof searchCode !== 'string' && searchCode.length > 1) {
    result.searchCode = ['Tous codes postaux']
  }
  result.labelFormatted = isEmpty(result.searchCode) ? result.label : `${result.label} (${result.searchCode})`
  return result
}

export default {
  findByKeyword,
  findByCode,
  formatReferential
}
