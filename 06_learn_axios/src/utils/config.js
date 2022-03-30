const devBaseUrl = 'https://httpbin.org'
const proBaseUrl = 'https://tao.cn'
export const BASE_URl = process.env.NODE_ENV === 'development' ? devBaseUrl : proBaseUrl
export const TIMEOUT = 5000
