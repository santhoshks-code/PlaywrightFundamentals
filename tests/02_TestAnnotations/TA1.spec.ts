import { test, expect } from "@playwright/test";

test("Navigating to the TTA Website", async({page})=> {
  await  page.goto("https://app.thetestingacademy.com/playwright/");
  // await always created with Statement
  // async always created with function

});

test("BCP - multiple browser contexts", async ({ browser }) => {
  const adminContext1 = await browser.newContext();
  const userContext = await browser.newContext();
  const guestContext = await browser.newContext();

  const adminPage = await adminContext1.newPage();
  await adminPage.goto("https://example.com", { waitUntil: "domcontentloaded" });

  const userPage = await userContext.newPage();
  await userPage.goto("https://example.com", { waitUntil: "domcontentloaded" });

  const guestPage = await guestContext.newPage();
  await guestPage.goto("https://example.com", { waitUntil: "domcontentloaded" });

  await adminPage.close();
  await userPage.close();
  await guestPage.close();
});
