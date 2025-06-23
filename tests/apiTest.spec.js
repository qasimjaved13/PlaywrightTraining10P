import { test, expect, request } from '@playwright/test';


test('Get Single User API Test', async () => {
  const apiContext = await request.newContext()
  const response = await apiContext.get('https://reqres.in/api/users/2')
  expect(response.status()).toBe(200)
  const responseBody = await response.json()
  expect(responseBody.data).toHaveProperty('email')

})

test('Get Multiple Users API Test', async () => {
  const apiContext = await request.newContext()
  const response = await apiContext.get('https://reqres.in/api/users?page=2')
  expect(response.status()).toBe(200)
  const responseBody = await response.json()
  expect(responseBody.data).toBeDefined()
  expect(responseBody.data.length).toBeGreaterThan(0)
  expect(responseBody.data[0]).toHaveProperty('email')
})