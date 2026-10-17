import {test, expect} from '@playwright/test';

test('Login form via steps', async ({page}) => {
    test.step('Open practise page', async () => {
    await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
    });

    await test.step('fields are visible', async () => {
    await expect(page.getByRole('textbox', {name: 'Email Address'})).toBeVisible();
    await expect(page.getByRole('textbox', {name: 'password'})).toBeVisible();

    })

    await test.step('Submit & Assert valitdation', async () => {
    await page.getByRole('button', {name: '/Login/i'}).click();
    await expect(page.getByText(/required|invalid/i)).toBeVisible();


    })


    })