import { test, expect } from '@playwright/test';

test('Verify the error message on wingify', async ({ page }) => {
  await page.goto('https://app.wingify.com/#/login');

  let username = page.getByRole('textbox', { name: 'username', exact: true }).fill('admin');
  let password = page.getByRole('textbox', { name: 'password', exact: true }).fill('admin');

  await expect(page.getByRole('textbox', { name: 'password' })).toBeVisible();
});
