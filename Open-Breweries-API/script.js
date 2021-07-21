async function getBreweries() {
    try {
        const response = await fetch("https://api.openbrewerydb.org/breweries", { method: "GET" });
        // console.log(response);
        const breweries = await response.json();
        loadBreweries(breweries);
    }
    catch (err) {
        console.log("error is this---->", err);
    }


}
function loadBreweries(breweries) {
    // console.log(countries.length);
    const breweryDetails = document.createElement("div");
    breweryDetails.className = ("brewery-details");

    breweries
        .sort((a, b) => {
            if (a.name.toUpperCase() > b.name.toUpperCase()) {
                return 1;
            } else {
                return -1;
            }
        })
    let id = 1;
    breweries.forEach((brewery) => {
        const breweryContainer = document.createElement("div");
        breweryContainer.className = ("brewery-container");



        breweryContainer.innerHTML += ` 
      <div>
        
        <h3 class="brewery-name">Brewery Name ${id++}:<br>${brewery.name}</h3>
        <p><strong>Type</strong>: ${brewery.brewery_type}</p>
        <p><strong>Address</strong>: <br>Street:${brewery.street}<br>City:${brewery.city} <br>State:${brewery.state}<br>County:${brewery.country}<br>Postal Code:${brewery.postal_code}</p>
        <p><strong>website url</strong>: ${brewery.website_url}</p>
        <p><strong>Phone No.</strong>:${brewery.phone}
      </div>
      `;
        breweryDetails.append(breweryContainer)
    });
    document.body.append(breweryDetails);
}
getBreweries();
