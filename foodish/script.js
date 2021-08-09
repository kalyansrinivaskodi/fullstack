
var obj={
"biryani":81,
"burger":87,
"butter-chicken":22,
"dessert":36,
"dosa":33,
"idly":77,
"pasta":34,
"pizza":95,
"rice":35,
"samosa":22};

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

function calling(arg){
    document.getElementById("list").style.display = "none";

    let k=document.getElementById("image");
    console.log(obj[arg]);
    console.log(Math.floor(getRandomArbitrary(1,obj[arg])));

    let source="https://foodish-api.herokuapp.com/images/"+arg+ "/"+arg  +Math.floor(getRandomArbitrary(1,obj[arg]))+".jpg";
    k.src=source;
    if(arg==="biryani")
    {
      console.log("kalyan")
    }
    // console.log(k);
    document.getElementById("myText").value=source;
    // console.log("hiii");
    // console.log(k.src);
}
