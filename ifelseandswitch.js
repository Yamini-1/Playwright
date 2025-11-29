function launchBrowser(browserName)
{
   if(browserName=='chrome')
   {
   console.log('the browser name is chrome');
   }
   else{
    console.log('the browser name is firefox');
   }
}
launchBrowser('google')

function runtests(testtype)
{
    switch(testtype)
    {
    case "smoke":
        console.log('the testtype is smoke testing');
        break
    case "sanity":
        console.log('the testype is sanity');
        break
    case "regression":
        console.log('the testtype is regression');
        break
    default:
        console.log('the testtype is smoke');
        break            
    }
}
runtests("sanity")
