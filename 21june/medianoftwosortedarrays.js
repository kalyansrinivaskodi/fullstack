// Return median of two sorted arrays of same size
var a=[1,3,5,7];
var b=[2,4,6,8];
let merge=function(a,b)
{
let i=0,j=0;
let m=[];    
while(i<a.length&&j<b.length)
{
    if(a[i]<b[j])
    {
        m.push(a[i]);
        i++;
    }
    else
    {
        m.push(b[j]);
        j++;
    }
}
if(i===a.length)
{
    while(j<b.length)
    {
        m.push(b[j]);
        j++;
    }
}
else if(j===b.length)
{
    while(i<a.length)
    {
        m.push(a[i]);
        i++;
    }
}
return m;
}
let med=function(a,b)
{
    let m=merge(a,b);
    if(m.length%2===1)
    {
        return m[m.length/2];
    }
    else
    {
        return m[m.length/2-1]+" "+m[m.length/2];
    }
}
// let m=merge(a,b);
console.log(med(a,b));
