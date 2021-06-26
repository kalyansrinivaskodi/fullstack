//        Sum of all numbers in an array
var a=[1,2,3,4,3,2,1,0,4,2,3];
(function()
{
    //iife
let sum=0;
for(let i=0;i<a.length;i++)
{
    sum+=parseInt(a[i]);

}
// document.write(sum);
console.log(sum);
})();
