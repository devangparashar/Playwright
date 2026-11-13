import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
//import type BrowserContext = require('@playwright/test');
import { webkit, chromium, firefox } from 'playwright'




test('login test', async() =>{
  const broswer:Browser = await chromium.launch({headless: false, channel: 'chrome'});
  const page:Page= await broswer.newPage();
  await page.goto("https://www.magupdate.co.uk/magazine-subscription/phrr");


  const selectcountry = 'select#Contact_CountryCode';

  //select by value 
  await page.selectOption(selectcountry, { value: 'AD'});

  //select by value text 
  await page.selectOption(selectcountry, { label: 'Canada'});

  //select by index 
  await page.selectOption(selectcountry, { index: 100});

  //print all value 

  const alloptions = await page.$$(selectcountry + '> option');
  console.log(alloptions.length);

  //print all countries name 
  for(const e of alloptions)
{
  const text = await e.textContent();
  console.log(text);
//if you want to select any specific country and print before all countires name 
  if (text == 'India'){
    await page.selectOption(selectcountry, { label: 'India'});
    break;
  }
}

await page.waitForTimeout(4000);
})





























// import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
