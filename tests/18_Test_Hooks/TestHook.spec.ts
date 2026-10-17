import {test, expect} from '@playwright/test';

const URL = 'https://app.thetestingacademy.com/playwright/multiple_element_filter';

test('Test hook', async ({page, browserName}) => {

    test.skip(browserName === 'firefox', 'feature not yet supported');
    await page.goto(URL);
    await expect(page).toHaveTitle('Multiple Element Filter', {timeout: 15000});

   
})