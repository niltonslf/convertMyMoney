const { getExchangeRate } = require('./exchange-api')

test('Exchage rate returned a value', async () => {
  const price = await getExchangeRate()

  expect(price).toBeGreaterThan(0)
})
