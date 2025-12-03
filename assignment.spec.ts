import {chromium, test, webkit} from "@playwright/test";

test("launch Red bus", async () => 
{
    const browserInstance= await chromium.launch({ headless: false, channel:
"msedge" });
    const context=await browserInstance.newContext();
    const page=await context.newPage();
    await page.goto("https://www.redbus.in");
    const redTitle = await page.title();
    console.log(redTitle)
    const redUrl = await page.url();
    console.log(redUrl);

//     });

// test("launch Flipkart", async () => 
// {
    const browserInstance1= await webkit.launch({ headless: false});
    const context1=await browserInstance1.newContext();
    const page1=await context1.newPage();
    await page1.goto("https://www.flipkart.com");
    const flipTitle =await page1.title();
    console.log(flipTitle)
    const flipUrl = await page1.url();
    console.log(flipUrl);

});
