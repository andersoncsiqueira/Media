
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
        //let coinTwoSelected = coinTwo.value
        let url = `https://api.exchangerate.host/timeseries?start_date=2020-01-01&end_date=2020-02-04&base=${coinOneSelected}`
        
fetch(url)
    .then((resp)=> {
       return resp.json()
    }).then(cotacoes =>  {
     //priceClosed(cotacoes)
     // const {bid} = cotacoes[0]
     // console.log(bid)
     console.log(cotacoes)
    })
    .catch((err)=> {
        console.log(err)  
    })
    
    },2000) 

    /*var requestURL = 'https://api.exchangerate.host/timeseriesstart_date=2020-01-01&end_date=2020-02-04?base=GBP';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response;
  console.log(response);
}
*/
    