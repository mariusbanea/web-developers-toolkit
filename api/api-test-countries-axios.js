/*
  Build up a function that receives the name of a country.
  This function is in charge of connecting and GETting information from an API.
  The information to retrieve is of the country or countries with that name.
  Return an array of objects with the following info:
  * Name of country
  * Capital
  * Region
  * Population
  * Currencies
  The api documentation is found here:
  https://restcountries.eu/
*/

//load axios (see documentation here: https://github.com/axios/axios)
const axios = require("axios")

function getACountry(name) {

    //navigate to https://restcountries.eu/#api-endpoints-name for the API endpoint documentation
    let url = `https://restcountries.eu/rest/v2/name/${name}`

    // test if the url is working
    console.log(url)
        //shows https://restcountries.eu/rest/v2/name/united

    axios
        .get(url)
        //if the api response is successful
        .then(responseJson => {

            //check the results before using them
            // console.log(responseJson.data);



            //if there are no results show error
            if (responseJson.data.length == 0) {
                console.log("No results")
            }

            //if there are results, display them by returning an array of objects
            else {

                //define an array to output the data
                let outputArray = [];

                //loop through the responseJson data object
                for (let i = 0; i < responseJson.data.length; i++) {

                    // console.log(responseJson.data[i].name)
                    // console.log(responseJson.data[i].population)
                    // console.log(responseJson.data[i].capital)
                    // console.log(responseJson.data[i].region)
                    // console.log(responseJson.data[i].currencies[0])

                    //create an empty object to store one item
                    let itemObject = {}

                    //populate the empty object with the name, capital, region and capital and currencies
                    itemObject.name = responseJson.data[i].name
                    itemObject.population = responseJson.data[i].population
                    itemObject.capital = responseJson.data[i].capital
                    itemObject.region = responseJson.data[i].region
                    itemObject.currencies = responseJson.data[i].currencies[0]
                        // console.log(itemObject)

                    //push these item object into the outputArray
                    outputArray.push(itemObject)
                }
                //return the output array
                console.log(outputArray)

            }

        })
        //if the api response is NOT successful
        .catch(error => console.log(error))
}


getACountry("united")