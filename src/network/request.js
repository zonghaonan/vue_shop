import axios from 'axios'
export default {
  request1(config){
    const instance = axios.create({
      baseURL: 'http://47.115.124.102:8888/api/private/v1/'
    })
    return instance(config)
  },
  request2(params) {
    
  }
}
