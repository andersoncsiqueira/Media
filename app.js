
const coinOne = document.querySelector('[data-js="coinOne"]')
const coinTwo = document.querySelector('[data-js="coinTwo"]')
const coins = ['USD','EUR','GBP','JPY','CAD','NZD','CHF','AUD']

let url = 'https://economia.awesomeapi.com.br/json/daily/AUD-USD/30'

const putCoins = () => {
    let allCoins = ''
    coins.forEach(coin => {
        allCoins += `<option>${coin}</option>`
    })

    coinOne.innerHTML = allCoins
    coinTwo.innerHTML = allCoins
}





/*fetch('https://economia.awesomeapi.com.br/json/daily/AUD-USD/30')
    .then((resp)=> {
       return resp.json()
    }).then(cotacoes =>  {
        console.log(cotacoes)
    })
    .catch((err)=> {
        console.log(err)
    }) */

    putCoins()

    setInterval(()=>{console.log(coinOne.value)},1000) 