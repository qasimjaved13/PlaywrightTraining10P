import { test, expect } from '@playwright/test';

const { LoginPage } = require('../pages/loginPage')
const data = require('../TestData/testData.json')


test('Login Test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/')
  await page.locator('#user-name').fill('standard_user')
  await page.locator('#password').fill('secret_sauce')
  await page.locator('#login-button').click()
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
})

test('Login Test with POM', async ({ page }) => {
  const login = new LoginPage(page)
  await login.goto()
  await login.login(data.username, data.password)
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
})