// Return all the palindromes in an array
var a=["kayak","nayak","srini","pip","kaak"];
let ispalindrome=function(x)
{
    let a=x.split("");
    for(let i=0;i<a.length/2;i++)
    {
        if(a[i]!==a[a.length-1-i])
        {
            return 0;
        }
    }
    return 1;

}
let pa=(function(a)
{
    let parr=[];
    for(let i=0;i<a.length;i++)
    {
        if(ispalindrome(a[i]))
        {
            parr.push(a[i]);
        }
    }
    return parr;
})
console.log(pa(a));
