
const coinOne = document.querySelector('[data-js="coinOne"]')
const coinTwo = document.querySelector('[data-js="coinTwo"]')
const numbersDay = document.querySelector('[data-js="days"]')
const button = document.querySelector('[data-js="buttonFirstSearch"]')
const infoOne = document.querySelector('[data-js="tableInfo"]')
const coins = ['','USD','EUR','GBP','JPY','CAD','NZD','CHF','AUD','BRL']
const starDate = document.querySelector('[data-js="start"]')
const endDate = document.querySelector('[data-js="end"]')
//const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,
  //  23,24,25,26,27,28,29,30]



const setSelecters = (array,element) => {
    let allDatas = ''
    array.forEach(coin => {
        allDatas += `<option>${coin}</option>`
    })
    element.innerHTML = allDatas
    
}

// não está com a contagem de tempo dinâmica e com erro para mais de dez dias
/*const setStringdays = (numbersDay) => {
    let stringDays = []
    for(i = 0; i < numbersDay ; i += 1) {
        stringDays.push(`2022-02-${(28-i<10?`0${28-i}`:28-i)}`)
    }

    return stringDays

}*/

const insertHtml = (array,coin) => {
    let string = ''
    let arrayData = []





    /*switch (coin) {
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
                    
    } */
    
   }

   const getDatas = async (url,coin) => {
       const response = await fetch(url)
       const datas = await response.json()
       const amauntDays = datas.rates
       
      // const stringDays = setStringdays(numberDay).map(string=> amauntDays[`${string}`])
       
      // insertHtml(stringDays,coin)
       console.log(amauntDays['2022-03-01'].BRL,amauntDays)
    }
    
    button.addEventListener('click', ()=> {
        
        let url = `https://api.exchangerate.host/timeseries?start_date=${starDate.value}&end_date=${endDate.value}&base=${coinOne.value}`;
        getDatas(url,coinTwo.value)
      //  console.log(infoOne.children.item(0).innerHTML,(Number(starDate.value)-Number(endDate.value)))
        
    })



    
setSelecters(coins,coinOne)
setSelecters(coins,coinTwo)

 

    

        
  

 
        