//Rotate an array for k times
let a=[1,2,3,4,3,4,5,6,3,7]
let k=2;
let rotate=function(a,k)
{
    let b=[]
    for(let i=0;i<a.length;i++)
    {
        b.push(a[(i+k)%a.length]);

    }
    return b;
}
console.log(rotate(a,k));
