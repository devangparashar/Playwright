import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
//import type BrowserContext = require('@playwright/test');
import { webkit, chromium, firefox } from 'playwright'




test('login test', async() =>{
  //const broswer:Browser = await chromium.launch({headless: false, channel: 'chrome'});
  //open broser in without incongnito mode 

    const browser:BrowserContext =  await webkit.launchPersistentContext('',{headless: false});
 // const browser:BrowserContext =  await firefox.launchPersistentContext('.session',{headless: false});

    //const browser:BrowserContext =  await chromium.launchPersistentContext('',{headless: false, channel: 'chrome'});
  const pages = browser.pages(); //2- 0 to 1 
  const page:Page = pages[0];
  //const page:Page= await browser.newPage();
  await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

   await new Promise(() => {}); //prevents your script from exisitng 

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
