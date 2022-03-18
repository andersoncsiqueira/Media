
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

/*const priceClosed = (cotacoes) => {

    let bids = cotacoes.map(item => console.log(item.bid))



    cotacoes.reduce((acc,item)=> acc + item.bid
        
    ,0)

    /*cotacoes.reduce((acc,price)=> {
         let prices  = Number(price.bid)
         let accs = Number(acc)
         accs += prices
        
         console.log(accs)
    },0)
    return bids
      
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
     console.log(priceClosed(cotacoes))
     // const {bid} = cotacoes[0]
     // console.log(bid)
     
    })
    .catch((err)=> {
        console.log(err)  
    })
    
    },2000) */

    fetch('https://economia.awesomeapi.com.br/json/daily/USD-BRL/30')
    .then((resp)=> {
       return resp.json()
    }).then(cotacoes =>  {
     // const {bid} = cotacoes

     let bids = cotacoes.map(item => Number(item.varBid))
     //.reduce((acc,item)=> acc+item)


      console.log(bids)
     
    })
    .catch((err)=> {
        console.log(err)  
    })