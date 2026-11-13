import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
//import type BrowserContext = require('@playwright/test');
import { webkit, chromium, firefox } from 'playwright'




test('login test', async() =>{
  const broswer:Browser = await chromium.launch({headless: false, channel: 'chrome'});
  const page:Page= await broswer.newPage();
  // await page.goto("https://www.spicejet.com/");

  // //mouse hover and click 

  // page.getByText('Add-ons').first().hover();
  // page.getByText('FlyEarly').first().click();


  //test done with 2 times hove back to back 

   await page.goto("https://www.bigbasket.com/");

   await page.locator('//button[@id="headlessui-menu-button-:Rld956:"]').click();
   await page.locator('(//li//a[text()= "Beverages"])[2]').hover();
   await page.locator('//li//a[text()= "Tea"]').hover();
   await page.locator('//li//a[text()= "Green Tea"]').click();
   



 // await page.locator('.relative h-full').click();



await page.waitForTimeout(4000);
});



























