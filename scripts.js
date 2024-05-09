
const convertButton = document.querySelector(".convert-button")
const convertButtonA = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencyName = document.getElementById("currency-name")
const currency = document.querySelector(".currency")
const currencyImage = document.querySelector(".currency-img")
const currencyImageA = document.querySelector(".currency-img-a")
const currencySelectA = document.querySelector(".currency-select-a")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor do real a ser convertido//
    const currencyConverted = document.querySelector(".currency-value") // Valor convertido em dolar //
    
    console.log(currencySelect.value)

    const realToday = 1
    const dolarToday = 5.2
    const euroToday = 5.49
    const libraToday = 6.36
    const bitcoinToday = 312661.11

    const dolarToEuro = dolarToday/euroToday
    const dolarToLibra = dolarToday/libraToday
    const dolarToBtc = dolarToday/bitcoinToday
    const dolarToReal = realToday/dolarToday
    
    const euroToLibra = euroToday/libraToday
    const euroToBtc = euroToday/bitcoinToday
    const euroToReal = realToday/euroToday
    const euroToDolar = euroToday/dolarToday

    const libraToEuro = libraToday/euroToday
    const libraToBtc = libraToday/bitcoinToday
    const libraToReal = realToday/libraToday
    const libraToDolar = libraToday/dolarToday

    const btcToEuro = bitcoinToday/euroToday
    const btcToLibra = bitcoinToday/libraToday
    const btcToReal = realToday/bitcoinToday
    const btcToDolar = bitcoinToday/dolarToday

    const realToEuro = realToday*euroToday
    const realToLibra = realToday*libraToday
    const realToBtc = realToday*bitcoinToday
    const realToDolar = realToday*dolarToday
    

    if (currencySelect.value == "dolar") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: 'currency',
            currency: 'USD'
        })
            .format(inputCurrencyValue / dolarToday)
    }

    if (currencySelectA.value == "dolar" & currencySelect.value == "dolar") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: 'currency',
            currency: 'USD'
        })
            .format(inputCurrencyValue)
    }
    
    if (currencySelectA.value == "dolar" & currencySelect.value == "euro") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: 'currency',
            currency: 'EUR'
        })
            .format(inputCurrencyValue / dolarToEuro)
    }

    if (currencySelectA.value == "dolar" & currencySelect.value == "libra") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: 'currency',
            currency: 'GBP'
        })
            .format(inputCurrencyValue / dolarToLibra)
    }   

    if (currencySelectA.value == "dolar" & currencySelect.value == "bitcoin") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: 'currency',
            currency: 'BTC'
        })
            .format(inputCurrencyValue / dolarToBtc)
    }   

    if (currencySelectA.value == "dolar" & currencySelect.value == "real") {
        currencyConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: 'currency',
            currency: 'BRL'
        })
            .format(inputCurrencyValue / dolarToReal)
    }   

    if (currencySelectA.value == "euro" & currencySelect.value == "euro") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: 'currency',
            currency: 'EUR'
        })
            .format(inputCurrencyValue)
    } 
    
    if (currencySelectA.value == "euro" & currencySelect.value == "dolar") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: 'currency',
            currency: 'USD'
        })
            .format(inputCurrencyValue / euroToDolar)
    } 
    
    if (currencySelectA.value == "euro" & currencySelect.value == "libra") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: 'currency',
            currency: 'GBP'
        })
            .format(inputCurrencyValue / euroToLibra)
    }

    if (currencySelectA.value == "euro" & currencySelect.value == "bitcoin") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: 'currency',
            currency: 'BTC'
        })
            .format(inputCurrencyValue / euroToBtc)
    }

    if (currencySelectA.value == "euro" & currencySelect.value == "real") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: 'currency',
            currency: 'BRL'
        })
            .format(inputCurrencyValue / euroToReal)
    }

    if (currencySelectA.value == "libra" & currencySelect.value == "libra") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: 'currency',
            currency: 'GBP'
        })
            .format(inputCurrencyValue)
    }
    
    if (currencySelectA.value == "libra" & currencySelect.value == "dolar") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: 'currency',
            currency: 'USD'
        })
            .format(inputCurrencyValue / libraToDolar)
    }

    if (currencySelectA.value == "libra" & currencySelect.value == "euro") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: 'currency',
            currency: 'EUR'
        })
            .format(inputCurrencyValue / libraToEuro)
    }

    if (currencySelectA.value == "libra" & currencySelect.value == "bitcoin") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: 'currency',
            currency: 'BTC'
        })
            .format(inputCurrencyValue / libraToBtc)
    }

    if (currencySelectA.value == "libra" & currencySelect.value == "real") {
        currencyConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: 'currency',
            currency: 'BRL'
        })
            .format(inputCurrencyValue / libraToReal)
    }

    if (currencySelectA.value == "bitcoin" & currencySelect.value == "bitcoin") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: 'currency',
            currency: 'BTC'
        })
            .format(inputCurrencyValue)
    }
    
    if (currencySelectA.value == "bitcoin" & currencySelect.value == "dolar") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: 'currency',
            currency: 'USD'
        })
            .format(inputCurrencyValue / btcToDolar)
    }

    if (currencySelectA.value == "bitcoin" & currencySelect.value == "euro") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: 'currency',
            currency: 'EUR'
        })
            .format(inputCurrencyValue / btcToEuro)
    }

    if (currencySelectA.value == "bitcoin" & currencySelect.value == "libra") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: 'currency',
            currency: 'GBP'
        })
            .format(inputCurrencyValue / btcToLibra)
    }

    if (currencySelectA.value == "bitcoin" & currencySelect.value == "real") {
        currencyConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: 'currency',
            currency: 'BRL'
        })
            .format(inputCurrencyValue / btcToReal)
    }

    if (currencySelectA.value == "real" & currencySelect.value == "real") {
        currencyConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: 'currency',
            currency: 'BRL'
        })
            .format(inputCurrencyValue)
    }

    if (currencySelectA.value == "real" & currencySelect.value == "dolar") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: 'currency',
            currency: 'USD'
        })
            .format(inputCurrencyValue / realToDolar)
    }

    if (currencySelectA.value == "real" & currencySelect.value == "euro") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: 'currency',
            currency: 'EUR'
        })
            .format(inputCurrencyValue / realToEuro)
    }

    if (currencySelectA.value == "real" & currencySelect.value == "libra") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: 'currency',
            currency: 'GBP'
        })
            .format(inputCurrencyValue / realToDolar)
    }

    if (currencySelectA.value == "real" & currencySelect.value == "bitcoin") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: 'currency',
            currency: 'BTC'
        })
            .format(inputCurrencyValue / realToBtc)
    }

    if (currencySelectA.value == "real"){
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: 'currency',
        currency: 'BRL'})
        .format(inputCurrencyValue)
    }

    if (currencySelectA.value == "euro"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: 'currency',
            currency: 'EUR'})
            .format(inputCurrencyValue)
    }

    if (currencySelectA.value == "libra"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: 'currency',
            currency: 'GBP'})
            .format(inputCurrencyValue)
    }

    if (currencySelectA.value == "bitcoin"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: 'currency',
            currency: 'BTC'})
            .format(inputCurrencyValue)
    }

    if (currencySelectA.value == "dolar"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: 'currency',
            currency: 'USD'})
            .format(inputCurrencyValue)
    }

}

function changeCurrency(){
    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "US$ Dolar Americano"
        currencyImage.src = "./assets/dollar.png"
    }

    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "€ Euro"
        currencyImage.src = "./assets/euro.png"
    }
    
    if(currencySelect.value == "libra"){
        currencyName.innerHTML = "£ libra Esterlina"
        currencyImage.src = "./assets/libra.png"
    }

    if(currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "BTC Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    if(currencySelect.value == "real"){
        currencyName.innerHTML = "R$ Real"
        currencyImage.src = "./assets/real.png"
    }

    convertValues()
}

function changeCurrencyA(){
   
    console.log('mudei')

    if(currencySelectA.value == "dolar"){
        currency.innerHTML = "US$ Dolar Americano"
        currencyImageA.src = "./assets/dollar.png"
    }

    if(currencySelectA.value == "euro"){
        currency.innerHTML = "€ Euro"
        currencyImageA.src = "./assets/euro.png"
    }
    
    if(currencySelectA.value == "libra"){
        currency.innerHTML = "£ libra Esterlina"
        currencyImageA.src = "./assets/libra.png"
    }

    if(currencySelectA.value == "bitcoin"){
        currency.innerHTML = "BTC Bitcoin"
        currencyImageA.src = "./assets/bitcoin.png"
    }

    if(currencySelectA.value == "real"){
        currency.innerHTML = "R$ Real"
        currencyImageA.src = "./assets/real.png"
    }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
currencySelectA.addEventListener("change", changeCurrencyA)



