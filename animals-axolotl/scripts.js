console.log("kalyan");
var i=3,n=13,j=0,m=26;

function report(){
    alert("your problem has been reported!!");
}
function previousPic(){
    if(i%n===0)
    {
        alert("this is the first photo");
    }
    let k=document.querySelector(".image");
    k.src="images/"+Math.abs((i-1)%n)+".jpg";
    i=i-1;

    k.alt="axolotl"
}
function nextPic(){
    if(i%n===n-1)
    {
        alert("End of the photos ,looping again ")
    }
    let k=document.querySelector(".image");
    k.src="images/"+Math.abs((i+1)%(n))+".jpg";
    i=i+1;

    k.alt="axolotl"
}

function previousAbout(){
    if(j%m===0)
    {
        alert("this is the first text");
    }
    let k=document.getElementById("textfile");
    k.src="texts/"+Math.abs((j-1)%m)+".txt";
    j=j-1;
    
}
function nextAbout(){
    if(j%m===m-1)
    {
        alert("we have read 30 texts about axolotl")
    }
    let k=document.getElementById("textfile");
    k.src="texts/"+Math.abs((j+1)%(m))+".txt";
    j=j+1;

    k.alt="pawan kalyan"
}
function about(){
    let k=document.getElementById("featuresDescription");
    k.innerHTML=`
    <h4>About Us</h4>

    <iframe id="textfile" src="texts/0.txt"></iframe>
    <div class="row " id="previousNext">
                    
        <!-- <div class="col-sm-3"></div> -->
        <div id="previous" class="col-sm-6 d-flex justify-content-center text-center">
            <button type="button" onclick="previousAbout()">previous</button>
        </div>
        <!-- <div class="col-sm-3"></div> -->
        
        <div class="col-sm-6  d-flex justify-content-center ">
            
            <button type="button" id="next" onclick="nextAbout()">next</button>
        </div>
    </div>
    
    `
    
    

}
function habitat(){
    let k=document.getElementById("featuresDescription");
    k.innerHTML=`
    <h3>Habitat and Ecology</h3>
    <p>The axolotl is only native to the freshwater of Lake Xochimilco and Lake Chalco in the Valley of Mexico. Lake Chalco no longer exists, having been drained as a flood control measure, and Lake Xochimilco remains a remnant of its former self, existing mainly as canals. The water temperature in Xochimilco rarely rises above 20 °C (68 °F), though it may fall between 6 and 7 °C in the winter, and perhaps lower. [17]

    Surveys in 1998, 2003, and 2008 found 6,000, 1,000, and 100 axolotls per square kilometer in its Lake Xochimilco habitat, respectively.[18] A four-month-long search in 2013, however, turned up no surviving individuals in the wild. Just a month later, two wild ones were spotted in a network of canals leading from Xochimilco.[19]
    
    The wild population has been put under heavy pressure by the growth of Mexico City.
     The axolotl is currently on the International Union for Conservation of Nature's annual 
     Red List of threatened species. Non-native fish, such as African tilapia and Asian carp, 
     have also recently been introduced to the waters. 
    These new fish have been eating the axolotls' young, as well as their primary source of food.
    Axolotls are members of the tiger salamander, or Ambystoma tigrinum, species complex, along with all other Mexican species of Ambystoma. Their habitat is like that of most neotenic species—a high-altitude body of water surrounded by a risky terrestrial environment. These conditions are thought to favor neoteny. However, a terrestrial population of Mexican tiger salamanders occupies and breeds in the axolotl's habitat.[citation needed]
</p>
<p>
The axolotl is carnivorous, consuming small prey such as molluscs,[21] worms, insects, 
other arthropods,[22] and small fish in the wild. Axolotls locate food by smell, and wil
l "snap" at any potential meal, 
sucking the food into their stomachs with vacuum force.[23]
      </p>`
    ;

}

function captiveCare(){
    let k=document.getElementById("featuresDescription");
    k.innerHTML=`
    <h3>Captive Care</h3>
    <p>
    The axolotl is a popular exotic pet like its relative,
     the tiger salamander (Ambystoma tigrinum). As for all poikilothermic organisms,
      lower temperatures result in slower metabolism and a very unhealthily reduced appetite. 
      Temperatures at approximately 16 °C (61 °F) to 18 °C (64 °F) are suggested for captive axolotls
       to ensure sufficient food intake; stress resulting from more than a day's exposure to lower
        temperatures may quickly lead to disease and death, and temperatures higher than 24 °C (75 °F)
         may lead to metabolic rate increase, also causing stress and eventually death.[36][37] Chlorine, 
         commonly added to tapwater, is harmful to axolotls. A single axolotl typically requires a 40-US-gallon
          (150-litre) tank. 
    Axolotls spend the majority of the time at the bottom of the tank.[38]</p>
<p>
Salts, such as Holtfreter's solution, are usually added to the water to prevent infection.
In captivity, axolotls eat a variety of readily available foods, including trout and salmon pellets,
 frozen or live bloodworms, earthworms, and waxworms. 
Axolotls can also eat feeder fish, but care should be taken as fish may contain parasites.
      </p>`
    ;

}
