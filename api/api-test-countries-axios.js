/*
  Build up a function that receives the name of a country. 
  This function is in charge of connecting and GETting information from an API. 
  The information to retrieve is of the country or countries with that name. 
  Console log, using a high order function, the following:
  * Name of country
  * Capital
  * Region
  * Population
  The api documentation is found here: 
  https://restcountries.eu/
*/
const axios = require("axios");
const link = "https://restcountries.eu/rest/v2";

function getACountry(name) {
    let url = `${link}/name/${name}`
    console.log(url)
    axios
        .get(url)
        .then(data => {
            console.log(data);
        })
        .catch(error => console.log(error));
}
getACountry("united");