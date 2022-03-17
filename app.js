
const coinOne = document.querySelector('[data-js="coinOne"]')
const coinTwo = document.querySelector('[data-js="coinTwo"]')
const coins = ['USD','EUR','GBP','JPY','CAD','NZD','CHF','AUD']




const putCoins = () => {
    let allCoins = ''
    coins.forEach(coin => {
        allCoins += `<option>${coin}</option>`
    })
    coinOne.innerHTML = allCoins
    coinTwo.innerHTML = allCoins
}

const priceClosed = (cotacoes) => {
    

    console.log(Array.from(cotacoes).map((price, index) => {
        console.log(price[index]['bid'])
    }))

}
    putCoins()
    



    setInterval(()=>{
        let coinOneSelected = coinOne.value
        let coinTwoSelected = coinTwo.value
        let url = `https://economia.awesomeapi.com.br/json/daily/${coinOneSelected}-${coinTwoSelected}/30`
        
fetch(url)
    .then((resp)=> {
       return resp.json()
    }).then(cotacoes =>  {
       priceClosed(cotacoes)
    })
    .catch((err)=> {
        console.log(err)  
    })
    
    },1000) 

    