import http from '~/services/api/axiosClient'

const findByKeyword = async (keyword, size, types) => {
  const httpClient = await http.get()
  return (await httpClient.get(`/referentials?keyword=${keyword}&size=${size}&types=${types}`)).data
}

const findByCode = async code => {
  const httpClient = await http.get()
  return await httpClient.get(`/referentials/${code}`).data
}

export default {
  findByKeyword,
  findByCode
}
