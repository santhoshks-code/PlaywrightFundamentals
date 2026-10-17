import { test, expect } from '@playwright/test';

test.describe('Soft Assertions', () => {
  test.beforeEach(async function ({ page }) {
    await page.goto('https://app.thetestingacademy.com/playwright/tables/practice.html');
  });

  test('To verify Assertions', async ({ page }) => {
    let firstName = await page.getByTestId('first-name');

    // Soft : Each line records its own failure, tets continue
    await expect.soft(firstName).toHaveAttribute('id','first-name');
    await expect.soft(firstName).toBeVisible();
    await expect.soft(firstName).toHaveValue('');

    //Hard : Assertion still runs after the soft block, then next line will not executed.
    await expect(firstName).toBeEnabled();

    await page.goto('https://app.thetestingacademy.com/playwright/webtable')
    await expect(page.locator('#error')).not.toBeVisible();


  });

  });