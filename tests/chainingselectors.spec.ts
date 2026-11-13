import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
//import type BrowserContext = require('@playwright/test');
import { webkit, chromium, firefox } from 'playwright'




test('login test', async() =>{
  const broswer:Browser = await chromium.launch({headless: false, channel: 'chrome'});
  const page:Page= await broswer.newPage();
  await page.goto("https://orangehrm.com/30-day-free-trial");


  // await page.locator('form#Form_getForm >> #Form_getForm_Name').fill('Devang');
  // await page.locator('form#Form_getForm >> text=Get Your Free Trial').click();

  // const form = page.locator('form#Form_getForm');
  // const getYourFreetrbutton= page.getByRole('button', {name: 'Get your Free Trial'});
  //await form.locator(getYourFreetrbutton).click();
   
  //or
   await page.locator('form#Form_getForm').locator('#Form_getForm_Name').fill('devang');
   await page.locator('form#Form_getForm').getByRole('button', {name: 'Get your Free Trial'}).click();


   




//   //1. ID: unique
//   const firstname:Locator= page.locator("id=input-firstname");
//   const lastname:Locator = page.locator('id=input-lastname');
//   const email:Locator =page.locator('id=input-email');

//  await firstname.fill("dev");
//  await lastname.fill("sharma");
//  await email.fill('devang@gmail.com');


//    await new Promise(() => {}); //prevents your script from exisitng 


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
