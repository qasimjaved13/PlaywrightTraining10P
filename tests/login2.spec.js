import { test, expect } from '@playwright/test';
const { LoginPage } = require('../pages/loginPage')

test('Login Test with POM', async ({ page }) => {
  const login = new LoginPage(page)
  await login.goto()
  await login.login('standard_user', 'secret_sauce')
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
})