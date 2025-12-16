import {expect,test} from "@playwright/test";


test(`Interact with frame using frame Locators`,async ({page}) => {
    


    //Interact using frameLocator

    await page.goto("https://leafground.com/frame.xhtml")


    const frame_Ref = page.frameLocator(`[src="default.xhtml"]`);

     await frame_Ref.locator("#Click").click()


     await expect (frame_Ref.locator("#Click")).toContainText("Hurray! You Clicked Me.");

    await page.waitForTimeout(3000);

    const pageframe=page.frames();

    const frame_length=pageframe.length;

    console.log("Number of frames:", frame_length);

    const frame_Outerframe = page.frameLocator(`[src="page.xhtml"]`);


    const frame_Innerframe = frame_Outerframe.frameLocator(`[src="framebutton.xhtml"]`);


    await frame_Innerframe.locator("#Click").click()

    await expect (frame_Innerframe.locator("#Click")).toContainText("Hurray! You Clicked Me.");
    
    await page.waitForTimeout(3000) 




     





    
    await page.waitForTimeout(3000) 



})

