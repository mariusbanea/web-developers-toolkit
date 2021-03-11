/*
  Build up a function that receives the name of a country.
  This function is in charge of connecting and GETting information from an API.
  The information to retrieve is of the country or countries with that name.
  Return an array of objects with the following info:
  * Name of country
  * Capital
  * Region
  * Population
  The api documentation is found here:
  https://restcountries.eu/
*/

//load axios (see documentation here: https://github.com/axios/axios)
const axios = require("axios")

function getACountry(name) {

    //example output https://restcountries.eu/rest/v2/name/united
    let url = `https://restcountries.eu/rest/v2/name/${name}`

    // test if the url is working
    console.log(url)

    axios
        .get(url)
        //if the api response is successful
        .then(responseJson => {

            //check the results before using them
            // console.log(responseJson.data.length);

            //if there are no results show error
            if (responseJson.data.length == 0) {
                console.log("No results")
            }

            //if there are results, display them
            //return an array of objects
            else {

                //define an array to output the data
                let outputArray = [];

                //loop through the responseJson data object
                for (let i = 0; i < responseJson.data.length; i++) {

                    //create an empty object to store one item
                    let itemObject = {}

                    // console.log(responseJson.data[i].name)
                    // console.log(responseJson.data[i].population)
                    // console.log(responseJson.data[i].capital)
                    // console.log(responseJson.data[i].region)

                    //populate the empty object with the name, capital, region and capital
                    itemObject.name = responseJson.data[i].name
                    itemObject.population = responseJson.data[i].population
                    itemObject.capital = responseJson.data[i].capital
                    itemObject.region = responseJson.data[i].region
                    // console.log(itemObject, "itemObject")

                    //push these item object into the ouputArray
                    outputArray.push(itemObject)
                }
                //return the output array
                console.log(outputArray, "outputArray")

            }
        })
        //if the api response is NOT successful
        .catch(error => console.log(error))
}


getACountry("united")
