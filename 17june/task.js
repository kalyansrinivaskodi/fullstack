var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () 
{var data = JSON.parse(this.response);
console.log(data);
for(let i in data)
{
    console.log(data[i].region+" "+data[i].name+" "+data[i].subregion+" "+data[i].population);
}
};
xhr.send();
