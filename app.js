
const coinOne = document.querySelector('[data-js="coinOne"]')
const coinTwo = document.querySelector('[data-js="coinTwo"]')
const numbersDay = document.querySelector('[data-js="days"]')
const button = document.querySelector('[data-js="buttonFirstSearch"]')
const infoOne = document.querySelector('[data-js="tableInfo"]')
const infodata = document.querySelector('[data-js="tableInfodatas"]')
const coins = ['','USD','EUR','GBP','JPY','CAD','NZD','CHF','AUD','BRL']
const starDate = document.querySelector('[data-js="start"]')
const endDate = document.querySelector('[data-js="end"]')
const media = document.querySelector('[data-js="media"]')




const setSelecters = (array,element) => {
    let allDatas = ''
    array.forEach(coin => {
        allDatas += `<option>${coin}</option>`
    })
    element.innerHTML = allDatas
    
}

const makeMedia = (array)=> {

    let allLis = Array.from(array).map(li => Number(li.textContent)).reduce((acc,item)=> acc+item,0)

    media.textContent = (allLis/array.length).toFixed(4)
}


const insertHtml = (dataKeys,amauntDays,coin) => {
    let string = []
    let arrayData = ''
    let arraDatasinfo = ''

    
    dataKeys.forEach(element => {
        string.push(`${element}`)
        arraDatasinfo += `<li>${element}</li>`
    })
    
    infodata.innerHTML = arraDatasinfo
    
    switch (coin) {
        case 'USD':
            
            string.forEach(data => {
                arrayData += `<li>${amauntDays[`${data}`].USD}</li>`
                infoOne.innerHTML = arrayData
            })
            break;
        
        case 'EUR':
            string.forEach(data => {
                arrayData += `<li>${amauntDays[`${data}`].EUR}</li>`
                infoOne.innerHTML = arrayData
            })
            break;
        case 'CAD':
                string.forEach(data => {
                    arrayData += `<li>${amauntDays[`${data}`].CAD}</li>`
                    infoOne.innerHTML = arrayData
                })
                break;
        case 'CHF':
                string.forEach(data => {
                arrayData += `<li>${amauntDays[`${data}`].CHF}</li>`
                infoOne.innerHTML = arrayData
                })
                break;
        case 'GBP':
                    string.forEach(data => {
                    arrayData += `<li>${amauntDays[`${data}`].GBP}</li>`
                    infoOne.innerHTML = arrayData
                    })
                    break;
        case 'AUD':
                string.forEach(data => {
                arrayData += `<li>${amauntDays[`${data}`].AUD}</li>`
                infoOne.innerHTML = arrayData
                })
                break;
        case 'JPY':
                string.forEach(data => {
                arrayData += `<li>${amauntDays[`${data}`].JPY}</li>`
                infoOne.innerHTML = arrayData
                })
                break;
        case 'BRL':
                string.forEach(data => {
                arrayData += `<li>${amauntDays[`${data}`].BRL}</li>`
                infoOne.innerHTML = arrayData
                })
                break;
            case 'NZD':
                string.forEach(data => {
                arrayData += `<li>${amauntDays[`${data}`].NZD}</li>`
                infoOne.innerHTML = arrayData
                })
                break;
        default:
            console.log('Moeda não encontrada')
                break;
        }
    



   }

   const getDatas = async (url,coin) => {
       const response = await fetch(url)
       const datas = await response.json()
       const amauntDays = datas.rates
      
       insertHtml(Object.keys(amauntDays),amauntDays,coin)
       makeMedia(infoOne.childNodes)
    }
    
    button.addEventListener('click', ()=> {
        let url = `https://api.exchangerate.host/timeseries?start_date=${starDate.value}&end_date=${endDate.value}&base=${coinOne.value}`;
        getDatas(url,coinTwo.value)
        
       
    })





setSelecters(coins,coinOne)
setSelecters(coins,coinTwo)

 

    

        
  

 
        