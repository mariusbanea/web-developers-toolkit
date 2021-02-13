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

//load axios (see documentation here: https://github.com/axios/axios)
const axios = require("axios");

function getACountry(name) {
    let url = `https://restcountries.eu/rest/v2/name/${name}`

    // test if the url is working
    console.log(url)

    axios
        .get(url)
        .then(responseJson => {
            //check the results before using them
            console.log(responseJson);

            //if there are no results show error
            if (responseJson.length == 0) {
                console.log("No results");
            }

            //if there are results, display them
            else {
                for (let i = 0; i < responseJson.length; i++) {
                    console.log(responseJson[i].name)
                    console.log(responseJson[i].population)
                    console.log(responseJson[i].capital)
                    console.log(responseJson[i].region)
                }
            }
        })
        .catch(error => console.log(error));
}


getACountry("united");