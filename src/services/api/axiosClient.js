import axios from 'axios'
import config from '~/config'

export default {
  get: async () => {
    return await axios.create({
      baseURL: config.meetApiUrl
    })
  }
}

