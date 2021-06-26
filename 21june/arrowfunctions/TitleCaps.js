//Title Caps
let b="Hi guys iam kalyan srinivas from IIT Madras Mtech cse"
hel=
(string)=>{
    //anonymous function
    var sentences=string.toLowerCase().split(" ");
    for(let i=0;i<sentences.length;i++)
    {
        sentences[i]=sentences[i][0].toUpperCase()+sentences[i].slice(1);
    }
    return sentences;
}
console.log(hel(b));
