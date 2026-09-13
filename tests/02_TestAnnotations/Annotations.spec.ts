import { test, expect } from '@playwright/test';

test.skip('checkout with paypal', async ({ page }) =>{
    // never executes - skip
});

test.only('login as newuser', async ({ page}) => {
    // only this test runs, everthing else in the file is ignored
});

test.fixme('upload 2GB file', async ({ page }) => {
    //skipped, but flagged as 'needs fixing'.
});

test.fail('Cart total is wrong', async ({ page}) => {

});

test('full regression report', async ({ page}) =>{
test.slow();
console.log(test.info().timeout); // 90000 instead of 30000
});

test('mobile layout', async ({ page, browserName }) => {
    test.fixme(browserName === 'webkit', 'Safari renders menu wrong');
});