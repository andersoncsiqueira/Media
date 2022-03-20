
const coinOne = document.querySelector('[data-js="coinOne"]')
const coinTwo = document.querySelector('[data-js="coinTwo"]')
const numbersDay = document.querySelector('[data-js="days"]')
const button = document.querySelector('[data-js="buttonFirstSearch"]')
const infoOne = document.querySelector('[data-js="tableInfo"]')
const coins = ['','USD','EUR','GBP','JPY','CAD','NZD','CHF','AUD','BRL']
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,
    23,24,25,26,27,28,29,30]



const setSelecters = (array,element) => {
    let allDatas = ''
    array.forEach(coin => {
        allDatas += `<option>${coin}</option>`
    })
    element.innerHTML = allDatas
    
}

// não está com a contagem de tempo dinâmica e com erro para mais de dez dias
const setStringdays = (numbersDay) => {
    let stringDays = []
    for(i = 0; i < numbersDay ; i += 1) {
        stringDays.push(`2022-01-${(31-i<10?`0${31-i}`:31-i)}`)
    }

    return stringDays

}

const insertHtml = (array,coin) => {
    let string = ''
    let arrayData = []
    switch (coin) {
        case 'USD' :
            for(i = 0; i < array.length; i += 1) {
                string += `<li>${array[i].USD}</li>`
                arrayData.push(array[i].USD) }
                infoOne.innerHTML = string 
                break;
        case 'EUR' :
            for(i = 0; i < array.length; i += 1) {
                string += `<li>${array[i].EUR}</li>` }
                infoOne.innerHTML = string 
                arrayData.push(array[i].EUR)
                break;
        case 'CAD' :
            for(i = 0; i < array.length; i += 1) {
                string += `<li>${array[i].CAD}</li>` }
                infoOne.innerHTML = string 
                arrayData.push(array[i].CAD)
                break;   
        case 'GBP' :
            for(i = 0; i < array.length; i += 1) {
                string += `<li>${array[i].GBP}</li>` }
                infoOne.innerHTML = string
                arrayData.push(array[i].GBP)
                break;
        case 'CHF' :
            for(i = 0; i < array.length; i += 1) {
                string += `<li>${array[i].CHF}</li>` }
                infoOne.innerHTML = string 
                arrayData.push(array[i].CHF)
                break;
        case 'JPY' :
            for(i = 0; i < array.length; i += 1) {
                string += `<li>${array[i].JPY}</li>` }
                infoOne.innerHTML = string 
                arrayData.push(array[i].JPY)
                break;
        case 'BRL' :
            for(i = 0; i < array.length; i += 1) {
                string += `<li>${array[i].BRL}</li>` }
                infoOne.innerHTML = string
                arrayData.push(array[i].BRL)
                break;
        case 'NZD' :
            for(i = 0; i < array.length; i += 1) {
                string += `<li>${array[i].NZD}</li>` }
                infoOne.innerHTML = string
                arrayData.push(array[i].NZD) 
                break;
        case 'AUD' :
            for(i = 0; i < array.length; i += 1) {
                string += `<li>${array[i].AUD}</li>` }
                infoOne.innerHTML = string
                arrayData.push(array[i].AUD) 
                break;

    } 
    
   }

   
   const getDatas = async (url,numberDay,coin) => {
       const response = await fetch(url)
       const datas = await response.json()
       const amauntDays = datas.rates
       
       const stringDays = setStringdays(numberDay).map(string=> amauntDays[`${string}`])
       
       insertHtml(stringDays,coin)
       
       console.log(setStringdays(numberDay))
       
    }
    
    button.addEventListener('click', ()=> {
        console.log(coinOne.value,coinTwo.value,numbersDay.value)
        let url = `https://api.exchangerate.host/timeseries?start_date=2022-01-01&end_date=2022-03-10&base=${coinOne.value}`;
        getDatas(url,numbersDay.value,coinTwo.value)
    })



    
setSelecters(coins,coinOne)
setSelecters(coins,coinTwo)
setSelecters(numbers,numbersDay)
 

    

        
  

 
        