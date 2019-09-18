import http from '~/services/api/axiosClient'
import { isEmpty } from 'lodash'

const findByCriteria = async queries => {
  const httpClient = await http.get()
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
  return (await httpClient.get(`/meets?${allQueries}`)).data
}

const findById = async id => {
  const httpClient = await http.get()
  return await httpClient.get(`/meets/${id}`).data
}

export default {
  findByCriteria,
  findById
}
