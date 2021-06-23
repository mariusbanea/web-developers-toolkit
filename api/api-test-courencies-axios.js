// create a function that takes in a string for a base currency as it's parameter
// create a url variable that accesses a base currency
const axios = require("axios");

function getRates(baseCurrency) {
    let url = `https://api.frankfurter.app/latest?from=${baseCurrency}`
    console.log(url)
    return axios
        .put(url, baseCurrency)
        .then((baseCurrencyData) => {
            console.log(baseCurrencyData.data.rates)
            return baseCurrencyData.data.rates
        })
        .catch((err) => {
            return err.message
        })
}

console.log(getRates("USD"))