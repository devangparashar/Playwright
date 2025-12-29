import {test, expect, Browser, Page, Locator} from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'



test('login test', async() =>{
   const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
   const page:Page = await browser.newPage();
   await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

  //  const registerLink: Locator = await page.locator('text=Register');

   //const register_id: Locator = await getByRole('link', { name: 'Register' });

   const registerLink = await page.locator('a.list-group-item', { hasText: 'Register' });
    await registerLink.click();


        const title= await page.title();
      console.log("home page title", title);

      await page.screenshot({path: 'screenshot/homepage.png'});

       expect(title).toEqual('Register Account');
     const fisrtname_ID:Locator = await page.locator('#input-firstname');
     const lastname_ID:Locator = await page.locator('#input-lastname');
     const email_ID:Locator = await page.locator('#input-email');
     const phone:Locator = await page.locator('#input-telephone');
      const password_ID:Locator = await page.locator('#input-email');
           const passwordconfirm:Locator = await page.locator('#input-confirm');
           const pp: Locator = await page.locator('text=agree');
           const continuwbutton:Locator = await page.locator("[value='Continue']");

           await fisrtname_ID.fill('devank');
           await lastname_ID.fill('sharma');     
           await email_ID.fill('dev_p8dddddd8@rediffmail.com');
           await phone.fill('1234567890');
           await password_ID.fill('abcd1234');
           await passwordconfirm.fill('abcd1234')
           await pp.click();
           await continuwbutton.click();

               const title_1= await page.title();
      console.log("home page title", title_1);

      await page.screenshot({path: 'screenshot/homepage.png'});

       await expect(title_1).toEqual('Your Account Has Been Created!');

       await new Promise(() => {});




 
  //  const email_ID:Locator = await page.locator('#input-email');
  //  const password_id:Locator = await page.locator('#input-password');
  //  const login_id:Locator = await page.locator("[value='Login']");

  //   await email_ID.fill('dev_p88@rediffmail.com');
  //   await password_id.fill('Test1234!@#$');
  //    await login_id.click();

  //     const title= await page.title();
  //     console.log("home page title", title);

  //     await page.screenshot({path: 'screenshot/homepage.png'});

  //      expect(title).toEqual('My Account');

  //    await browser.close();

});





























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
