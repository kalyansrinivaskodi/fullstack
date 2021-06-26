var str="Hi guys iam kalyan srinivas from IIT Madras mtech cse";
Titlecaps=function (string)
{
    //anonymous function
    var sentences=string.toLowerCase().split(" ");
    for(let i=0;i<sentences.length;i++)
    {
        sentences[i]=sentences[i][0].toUpperCase()+sentences[i].slice(1);
    }
    return sentences;
};
console.log(Titlecaps(str).join(" "));
