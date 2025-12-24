import  test  from "@playwright/test";
import  {parse} from "csv-parse/sync";
import fs from "fs" // fs --> file system to read data from your system


test.describe.serial(`Test executed in serial mode`,async () => {
    
let records:any[]


/* ************************************************************************************* */
//test.beforAll() --> beforeAll annotation is executed first before the execution of any annotation.


test.beforeAll(`Read data from CSV`,async () => {
console.log(`Before all data connectivity`);


 records  = parse(fs.readFileSync('./Datas/login1.csv'),{columns:true,skip_empty_lines:true})


})


/* ************************************************************************************* */
//test.beforEach() --> beforeEach() annotation is executed for each module at the time of test exection


test.beforeEach(`Before Each test exection of lead and account module `,async ({page}) => {   


    console.log(`Before Each test execution of lead and account module`);
    
    await page.goto(`http://leaftaps.com/opentaps/control/login`);
    await page.locator(`//input[@id="username"]`).fill(records[0].username); //demosalesmanager , democsr
    await page.locator(`//input[@id="password"]`).fill(records[0].password);//crmsfa . crmsfa
    await page.locator(`//input[@class="decorativeSubmit"]`).click();
    await page.locator(`//a[contains(text(),"CRM")]`).click();
})


/* ************************************************************************************* */
//test script which will hold each module example lead, account , contact,....


/* Testcase 1 : Lead Creation */


test(`Lead Module`,async ({page}) => {
    
    console.log(`Executing the Lead Module`);
    await page.locator(`//a[text()="Create Lead"]`).click()
    
})
/* Testcase 2 : Account Creation */


test(`Account Module`,async ({page}) => {
    
    console.log(`Executing the Account Module`);
    await page.locator(`//a[text()="Create Account"]`).click()    
})


/* ************************************************************************************* */
//test.afterEach() --> afterEach() annotation is executed for each module after test execution to capture the test report


test.afterEach(`Fetch the test status of each test`,async ({},testinfo) => {
    console.log(`Executing after each test`);
    console.log(testinfo.status);
    console.log(testinfo.title);   
})


/* ************************************************************************************* */
//test.afterAll() --> afterAll() annotation is executed after the complete execution of each module and report the entire result / attach the report to a test management tool/(Jira)


test.afterAll(`Upload all the attachments`,async () => {
    console.log(`Executed after completion of all the tests`);
    console.log(`The report and screenshot are uploaded in test management tool`);
        
})


})
