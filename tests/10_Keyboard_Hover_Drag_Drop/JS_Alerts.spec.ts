import { test, expect } from '@playwright/test';

test.describe('JavaScript Alerts', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  });

  test('JS Alert accept 1', async ({ page }) => {
    page.once('dialog', async dialog => {
      await dialog.accept();
    });

    await page.getByRole('button', { name: 'Click for JS Alert' }).click();
    await expect(page.getByText('You successfuly clicked an alert')).toBeVisible();
  });

  test('JS Alert accept 2', async ({ page }) => {
    page.once('dialog', async dialog => {
      expect(dialog.type()).toBe('confirm');
      await dialog.accept();
    });

    await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
    await expect(page.getByText('You clicked: Ok')).toBeVisible();
  });
});