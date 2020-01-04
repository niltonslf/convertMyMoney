const {
  getExchangeRateAPI,
  extractExchangeRate,
  getExchangeRate
} = require('./exchange-api')
const axios = require('axios')

jest.mock('axios')

test('getExchangeRateAPI ', () => {
  const res = {
    data: [
      {
        high: 1.59
      }
    ]
  }

  axios.get.mockResolvedValue(res)

  getExchangeRateAPI('url').then(response => {
    expect(response).toEqual(res)
    expect(axios.get.mock.calls[0][0]).toBe('url')
  })
})

test('extractExchangeRate', () => {
  const exchangeRate = extractExchangeRate({
    data: [
      {
        high: 1.59
      }
    ]
  })

  expect(exchangeRate).toBe(1.59)
})

test('getExchangeRate', async () => {
  const res = {
    data: [
      {
        high: 1.59
      }
    ]
  }
  axios.get.mockResolvedValue(res)

  const price = await getExchangeRate()
  expect(price).toBe(1.59)
})
