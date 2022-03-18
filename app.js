
const coinOne = document.querySelector('[data-js="coinOne"]')
const coinTwo = document.querySelector('[data-js="coinTwo"]')
const table = document.querySelector('[data-js="table"]')
const coins = ['USD','EUR','GBP','JPY','CAD','NZD','CHF','AUD','BRL']

const putCoins = () => {
    let allCoins = ''
    coins.forEach(coin => {
        allCoins += `<option>${coin}</option>`
    })
    coinOne.innerHTML = allCoins
    coinTwo.innerHTML = allCoins
}
putCoins()

const priceClosed = (cotacoes) => {
    let tableHTML = ""
    let highs = cotacoes.forEach(item => {

        tableHTML += `<li>${item.high}<li>`
    
    })

        console.log(tableHTML)
    table.innerHTML =  tableHTML

   /* cotacoes.reduce((acc,item)=> acc + item.high
        
    ,0)

    cotacoes.reduce((acc,price)=> {
         let prices  = Number(price.bid)
         let accs = Number(acc)
         accs += prices
        
         console.log(accs)
    },0)*/
   
      
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
     // const {bid} = cotacoes[0]
     // console.log(bid)
     
    })
    .catch((err)=> {
        console.log(err)  
    })
    
    },2000) 

    /*let highs = async () => {

        const response = await fetch('https://economia.awesomeapi.com.br/json/daily/USD-EUR/30')
        return await response.json()
        /*.then((resp)=> {
           return resp.json()
        })
        //.then(cotacoes =>  {
         // const {bid} = cotacoes
    
         //let bids = cotacoes.map(item => Number(item.high))
         //return bids
         //.reduce((acc,item)=> acc+item)
    
         
        //})
      /*  .catch((err)=> {
            console.log(err)  
        })
        
    }
    
    const users = async () => {
        const birds = await highs()
       console.log(birds)
        return birds
    }

    
users()*/
   