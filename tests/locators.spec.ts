import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
//import type BrowserContext = require('@playwright/test');
import { webkit, chromium, firefox } from 'playwright'




test('login test', async() =>{
  const broswer:Browser = await chromium.launch({headless: false, channel: 'chrome'});
  const page:Page= await broswer.newPage();
  await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

  //1. ID: unique
  const firstname:Locator= page.locator("id=input-firstname");
  const lastname:Locator = page.locator('id=input-lastname');

 await firstname.fill("dev");
 await lastname.fill("sharma");

 //2. class name 
 const logo:Locator=page.locator('.img-responsive');
  const logoexist=await logo.isEnabled();
  console.log(logoexist);

  //3. text selector 
  const header:Locator = await page.locator('text=Register Account');
  const headeexit=await header.isEnabled();
  console.log(headeexit);

  const button:Locator = await page.locator('text=Continue');
  const buttonexit=await header.isEnabled();
  console.log(headeexit)

  const forgotpassword:Locator = await page.locator('text=Forgotten Password');
  const forgotpasdexit=await header.isEnabled();
  console.log(forgotpasdexit)

  //4. CSS selector
  const email:Locator=await page.locator('input#input-email');
  // or   const email:Locator=await page.locator('css=input#input-email'); you can write either above or this 
  const phone:Locator=await page.locator('css=input[name=telephone]');
  const checkbox:Locator=await page.locator('css=input[type="checkbox"]');
  await email.fill("devang@gmail.com");
  await phone.fill("888888888");
  await checkbox.click();

  //5. xpath
  const password:Locator = await page.locator('//input[@id="input-password"]');
  // const password:Locator = await page.locator('xpath=//input[@id="input-password"]'); any one can use above or this one 
  const passwordconfirm:Locator = await page.locator('xpath=//input[@id="input-confirm"]');
  const search:Locator = await page.locator('xpath=//input[@name="search" and @type="text"]');

  await password.fill("test@123");
  await passwordconfirm.fill("test@123");
  await search.fill('mac book');


  //6. Data-test-id
  
  

   await new Promise(() => {}); //prevents your script from exisitng 

   //



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
