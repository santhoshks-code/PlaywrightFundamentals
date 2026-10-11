# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07_WebTables\AwesomeQA_Webtable.spec.ts >> Verify the Webtable Example 1
- Location: tests\07_WebTables\AwesomeQA_Webtable.spec.ts:3:5

# Error details

```
Error: locator.innerText: Unsupported token "@id" while parsing css selector "/table[@id=customer]/tbody/tr[2{secondPart}]". Did you mean to CSS.escape it?
Call log:
  - waiting for /table[@id=customer]/tbody/tr[2{secondPart}]

```

# Page snapshot

```yaml
- table [ref=e2]:
  - rowgroup [ref=e3]:
    - row [ref=e4]:
      - columnheader "Company" [ref=e5]
      - columnheader "Contact" [ref=e6]
      - columnheader "Country" [ref=e7]
    - row [ref=e8]:
      - cell "Google" [ref=e9]
      - cell "Maria Anders" [ref=e10]
      - cell "Germany" [ref=e11]
    - row [ref=e12]:
      - cell "Meta" [ref=e13]
      - cell "Francisco Chang" [ref=e14]
      - cell "Mexico" [ref=e15]
    - row [ref=e16]:
      - cell "Microsoft" [ref=e17]
      - cell "Roland Mendel" [ref=e18]
      - cell "Austria" [ref=e19]
    - row [ref=e20]:
      - cell "Island Trading" [ref=e21]
      - cell "Helen Bennett" [ref=e22]
      - cell "UK" [ref=e23]
    - row [ref=e24]:
      - cell "Adobe" [ref=e25]
      - cell "Yoshi Tannamuri" [ref=e26]
      - cell "Canada" [ref=e27]
    - row [ref=e28]:
      - cell "Amazon" [ref=e29]
      - cell "Giovanni Rovelli" [ref=e30]
      - cell "Italy" [ref=e31]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test("Verify the Webtable Example 1", async ({ page }) => {
  4  | 
  5  |     // start code here
  6  |     await page.goto('https://awesomeqa.com/webtable.html');
  7  | 
  8  |     // your test steps go here
  9  |     const firstPart = "/table[@id=customer]/tbody/tr[";
  10 |     const secondPart = "]/td[";
  11 |     const thirdPart = "]";
  12 | 
  13 |     const rows = await page.locator("//table[@id='customers']/tbody/tr").count();
  14 |     const columns = await page.locator("//table[@id='customers']/tbody/tr/td").count();
  15 | 
  16 |     for (let i = 2; i <= rows; i++) {
  17 | 
  18 |         for (let j = 1; j <= columns; j++) {
  19 | 
  20 |         const dynamicXpath = `${firstPart}${i}{secondPart}${thirdPart}`;
  21 |         console.log(dynamicXpath);
> 22 |         const data = await page.locator(dynamicXpath).innerText();
     |                                                       ^ Error: locator.innerText: Unsupported token "@id" while parsing css selector "/table[@id=customer]/tbody/tr[2{secondPart}]". Did you mean to CSS.escape it?
  23 |         console.log(data);
  24 | 
  25 |         }
  26 |     }
  27 | 
  28 |     await page.pause();
  29 | 
  30 | });
```