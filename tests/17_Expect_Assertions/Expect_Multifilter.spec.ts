import { test, expect } from '@playwright/test';

test.describe('Verify Assertion of Multifilter', () => {
  test.beforeEach(async function ({ page }) {
    await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
  });

  test('To verify Assertions', async ({ page }) => {
    const heading = page.getByText('multiple element filters', { exact: true });
    await expect(heading).toBeVisible();
    await expect(heading).toContainText('filter', { timeout: 1000 });

    const email = page.getByRole('textbox', { name: 'Eamil Address' });
    await expect(email).toHaveAttribute('id', 'email');
    await expect(email).toHaveAttribute('type', 'email');
    await expect(email).toHaveAttribute('placeholder', 'student@thetestingacademy.com');

    const footerLinks = page.locator('footer a');
    await expect(footerLinks).toHaveCount(16);
  });
});

