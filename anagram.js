function isAnagram(string1,string2)
{
   const normalize= string =>
   string.replace(/\s+/g,'')
   .tolowercase()
   .split('')
   .sort()
   .join('');
   return normalize.string1===normalize.string2;

}
console.log(isAnagram("listen","silent"));
