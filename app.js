
const coinOne = document.querySelector('[data-js="coinOne"]')
const coinTwo = document.querySelector('[data-js="coinTwo"]')
const numbersDay = document.querySelector('[data-js="days"]')
const button = document.querySelector('[data-js="buttonFirstSearch"]')
const infoOne = document.querySelector('[data-js="tableInfo"]')
const coins = ['','USD','EUR','GBP','JPY','CAD','NZD','CHF','AUD','BRL']
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,
    23,24,25,26,27,28,29,30]

const setSelecters = (array,element) => {
    let allCoins = ''
    array.forEach(coin => {
        allCoins += `<option>${coin}</option>`
    })
    element.innerHTML = allCoins
    
}

button.addEventListener('click', ()=> {
    console.log(coinOne.value,coinTwo.value,numbersDay.value)
})




setSelecters(coins,coinOne)
setSelecters(coins,coinTwo)
setSelecters(numbers,numbersDay)
 

    

  