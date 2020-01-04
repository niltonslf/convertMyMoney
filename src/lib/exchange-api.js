const axios = require('axios')
const apiUrl = 'http://economia.awesomeapi.com.br/USD-BRL/1?format=json'

const getExchangeRateAPI = axios.get(apiUrl)
const extractExchangeRate = res => res.data[0].high
const getExchangeRate = async () => {
  try {
    const res = await getExchangeRateAPI
    const exchangeRate = extractExchangeRate(res)
    return exchangeRate
  } catch (error) {
    return ''
  }
}

module.exports = {
  getExchangeRateAPI,
  extractExchangeRate,
  getExchangeRate
}
