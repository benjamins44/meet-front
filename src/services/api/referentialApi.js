import axios from 'axios'
import config from '~/config'

const http = axios.create({
  baseURL: config.meetApiUrl || 'http://localhost:8081'
})

const findByKeyword = async (keyword, size, types) => {
  return (await http.get(`/referentials?keyword=${keyword}&size=${size}&types=${types}`)).data
}

const findByCode = async code => {
  return await http.get(`/referentials?${code}`).data
}

export default {
  findByKeyword,
  findByCode
}
