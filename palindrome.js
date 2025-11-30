function palindrome(name)
{
    
    const name2 = name.split("").reverse().join("")
    

    if(name===name2)
    {

        console.log("the given word is palindrome");
    }
    else{

        console.log("the given word is not a palindrome");
    }
}
palindrome("madam");
