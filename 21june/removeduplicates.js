// Remove duplicates from an array
let a=[1,2,3,4,3,4,5,6,3,7]
let rdup=function(a)
{
    let s=new Set(a);
    let b=Array.from(s);
    return b;
}
console.log(rdup(a));
