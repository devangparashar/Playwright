import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
//import type BrowserContext = require('@playwright/test');
import { webkit, chromium, firefox } from 'playwright'




test('login test', async() =>{
   const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});

   const browserContext_1: BrowserContext = await browser.newContext();
   const page1:Page = await browserContext_1.newPage();

     const browserContext_2: BrowserContext = await browser.newContext();
   const page2:Page = await browserContext_2.newPage();
   

//browser1
   await page1.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

   const email_ID1:Locator = await page1.locator('#input-email');
   const password_id1:Locator = await page1.locator('#input-password');
   const login_id1:Locator = await page1.locator("[value='Login']");

    await email_ID1.fill('dev_p88@rediffmail.com');
    await password_id1.fill('Test1234!@#$');
     await login_id1.click();

      const title1= await page1.title();
      console.log("home page title", title1);

      await page1.screenshot({path: 'screenshot/homepage.png'});
     //  expect(title1).toEqual('My Account');


       //browser2
 await page2.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
   const email_ID:Locator = await page2.locator('#input-email');
   const password_id:Locator = await page2.locator('#input-password');
   const login_id:Locator = await page2.locator("[value='Login']");

    await email_ID.fill('dev_p88@rediffmail.com');
    await password_id.fill('Test1234!@#$');
     await login_id.click();

      const title= await page2.title();
      console.log("home page title", title);

      await page2.screenshot({path: 'screenshot/homepage.png'});
     //  expect(title).toEqual('My Account');

    await browserContext_1.close();
    await browserContext_2.close();
     await browser.close();
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
