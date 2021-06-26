// Return all the prime numbers in an array
var a=[3,5,7,8,9,6,11,15,19];
let isprime=(x)=>
{
    if(x===2)
    {
        return 1;
    }
    else if(x>2)
    {
        for(let i=2;i<x/2;i++)
        {
            if(x%i===0)
            {
                return 0;
            }
        }
        return 1;
    }
    else
    {
        return 0;
    }
}
let pa=((a)=>
{
    let parr=[];
    for(let i=0;i<a.length;i++)
    {
        if(isprime(a[i]))
        {
            parr.push(a[i]);
        }
    }
    return parr;
})
console.log(pa(a));
