var genderType="female"
function printGender()
{
    let colour='brown'
    {
        if(genderType=="female"){
        var age=30
        let colour='pink'
        console.log('print the colour',colour);
}
        console.log('print the colour',age);
    }
}
    printGender()
    console.log('print the gender type',genderType);

For male scenario:

var genderType="male"
function printGender()
{
    let colour='brown'
    var age=30
    {
        if(genderType=="female"){
        let colour='pink'
        console.log('print the colour',colour);
}
      else{
        console.log('print the colour',colour);
      }
        console.log('print the colour',age);
    }
}
    printGender()
    console.log('print the gender type',genderType);
