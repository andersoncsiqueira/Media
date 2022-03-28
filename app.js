
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
const interval = document.querySelector('[data-js="interval"]')
let table = document.querySelector('[data-js="table"]')
let info = document.querySelector('[data-js="infor"]')
let number = [5,10,15,20,25,30,35,40,45,50,100]
let numberSelect = document.querySelector('[data-js="numbers"]')
let lista = document.querySelector('[data-js="lista"]')
let listatime = document.querySelector('[data-js="listatime"]')




const setSelecters = (array,element) => {
    let allDatas = ''
    array.forEach(coin => {
        allDatas += `<option>${coin}</option>`
    })
    element.innerHTML = allDatas
    
}

/*const makeMedia = (array)=> {

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


   } */

  /* const getDatas = async (url,coin) => {
       const response = await fetch(url)
       const datas = await response.json()
       const amauntDays = datas.rates
      
       insertHtml(Object.keys(amauntDays),amauntDays,coin)
       makeMedia(infoOne.childNodes)
    }
    
    button.addEventListener('click', ()=> {
        let url = `https://api.exchangerate.host/timeseries?start_date=${starDate.value}&end_date=${endDate.value}&base=${coinOne.value}`;
        getDatas(url,coinTwo.value)
        
       
    })*/


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com',
            'X-RapidAPI-Key': 'a1ecde7124msh85f66f86f944dbep1451edjsncf510c9ccda1'
        }
    }

//https://alpha-vantage.p.rapidapi.com/query?from_symbol=USD&function=FX_DAILY&to_symbol=BRL&outputsize=compact&datatype=json

const selctDaraTimes = (array,selectedNumbers,datas)=> {
    let arrayMedia= []
    let liHtml = ``
    
    for (i = 0;i < selectedNumbers; i++) {
        arrayMedia.push(Number(datas['Time Series FX (Daily)'][`${array[i]}`]['2. high'])-Number(datas['Time Series FX (Daily)'][`${array[i]}`]['3. low']))
        
    }

arrayMedia.map(item => item.toFixed(5))
.forEach(element => {

    liHtml += `<li>${element}</li>`

})




lista.innerHTML = liHtml
media.textContent = (arrayMedia.reduce((acc,item)=>acc+item
/selectedNumbers)).toFixed(5)

    console.log(arrayMedia,arrayMedia.reduce((acc,item)=>acc+item
    /selectedNumbers))
}

    const getDatas = async (number) => {
        const response = await fetch(`https://alpha-vantage.p.rapidapi.com/query?from_symbol=${coinOne.value}&function=FX_DAILY&to_symbol=${coinTwo.value}&outputsize=compact&datatype=json`, options)
        const datas = await response.json()
        const arrays = Object.keys(datas['Time Series FX (Daily)'])
        let html = ''
        //console.log(numberSelect.value)
        let num = number
        selctDaraTimes(arrays,num,datas)

        arrays.map(item => {   
            html += `<tr>
            <td>${item}</td>
            <td>${datas['Time Series FX (Daily)'][`${item}`]['1. open']}</td>
            <td>${datas['Time Series FX (Daily)'][`${item}`]['3. low']}</td>
            <td>${datas['Time Series FX (Daily)'][`${item}`]['2. high']}</td>
            <td>${datas['Time Series FX (Daily)'][`${item}`]['4. close']}</td>
            </tr>`
              
        })
        
        table.innerHTML += html

    }

    button.addEventListener('click', ()=> {
        let numberOfDays = numberSelect.value
        
       getDatas(numberOfDays)
       info.classList.toggle('off')
        
       
    })



setSelecters(coins,coinOne)
setSelecters(coins,coinTwo)
setSelecters(number,numberSelect)

 
const expo = document.querySelector('[data-js="expo"]')
        

 expo.addEventListener('click',()=>{
   const tds = document.querySelectorAll('tr')
  /*const CSGV =  [...infoOne.childNodes].map(li => li.textContent).join('\n')

  console.log(CSGV)

  expo.setAttribute('href', `data:text/csvcharset=utf-8,${encodeURIComponent(CSGV)}`)
  expo.setAttribute('download','table.csv') */

//const csgv = table.childNodes.forEach(tr => console.log(tr))


const CSGV = Array.from(tds)
    .map(row => Array.from(row.cells)
     .map(cell => cell.textContent)
      .join(',')
     )
     .join('\n')
     
console.log(CSGV)
     expo.setAttribute('href', `data:text/csvcharset=utf-8,${encodeURIComponent(CSGV)}`)
     expo.setAttribute('download','table.csv')
    

 })


 function exportTableToExcel(tableID, filename = ''){
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableID);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
    
    // Specify file name
    filename = filename?filename+'.xls':'excel_data.xls';
    
    // Create download link element
    downloadLink = document.createElement("a");
    
    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob){
        var blob = new Blob(['\ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
    
        // Setting the file name
        downloadLink.download = filename;
        
        //triggering the function
        downloadLink.click();
    }
}
