import {test, expect, Locator  } from "@playwright/test";

test('Verify the Drag & Drop Test cases', async({page}) =>{

    await page.goto("https://app.thetestingacademy.com/playwright/widgets/dnd");

  //  const inProgress = page.locator('["data-status="in-progress"]');
  //  const toDo = page.locator('["data-testid="count-todo"]');
  // await page.locator('#card-review-pr-21');
 //   const h4_card_review_pr = page.getByRole('//h4[text()="Review PR #21 — flaky test fix"]');
    let source:Locator = page.locator('#card-write-spec');
    const sBox = (await source.boundingBox())!;

    let target: Locator =  page.locator('["data-status="in-progress"]');
    const tBox = (await target.boundingBox())!;

    await page.mouse.move(sBox.x + sBox.width /2, sBox.y + sBox.height /2);
    await page.mouse.down();
    await page.mouse.move(tBox.x + tBox.width /2, tBox.y + tBox.height /2);
    await page.mouse.up();

    await page.pause();
    
});