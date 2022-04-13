
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
let number = [5,10,15,20,25,30,35,40,45,50,90,100]
let numberSelect = document.querySelector('[data-js="numbers"]')
let lista = document.querySelector('[data-js="lista"]')
let listatime = document.querySelector('[data-js="listatime"]')

const setSelectersIntoInputs = (arrayOfSelecters,inputContainer) => {
    
    let templateOfOptions = ''
    arrayOfSelecters.forEach(selected => {
        templateOfOptions += `<option>${selected}</option>`
    })

    inputContainer.innerHTML = templateOfOptions
    
}

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com',
            'X-RapidAPI-Key': 'a1ecde7124msh85f66f86f944dbep1451edjsncf510c9ccda1'
        }
    }

const mediaSelect = (array,selectedNumbers,datas)=> {
    let arrayMedia= []
    let liHtml = ``
    
    
    for (i = 0;i < selectedNumbers; i++) {
        let high = Number(datas['Time Series FX (Daily)'][`${array[i]}`]['2. high'])
        let low = Number(datas['Time Series FX (Daily)'][`${array[i]}`]['3. low'])
        arrayMedia.push(high-low)    
    }

    

arrayMedia.map(item => item.toFixed(5))
.forEach(element => {

    liHtml += `<li>${element}</li>`

})

lista.innerHTML = liHtml
media.textContent = (arrayMedia.reduce((acc,item)=>acc+item
)/selectedNumbers).toFixed(5)


}

const getDatas = async (number) => {
        const response = await fetch(`https://alpha-vantage.p.rapidapi.com/query?from_symbol=${coinOne.value}&function=FX_DAILY&to_symbol=${coinTwo.value}&outputsize=compact&datatype=json`, options)
        const datas = await response.json()
        const arrays = Object.keys(datas['Time Series FX (Daily)'])
        let html = ''
        
        
        mediaSelect(arrays,number,datas)

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

setSelectersIntoInputs(coins,coinOne)
setSelectersIntoInputs(coins,coinTwo)
setSelectersIntoInputs(number,numberSelect)
 
const expo = document.querySelector('[data-js="expo"]')    

 expo.addEventListener('click',()=>{
   const tds = document.querySelectorAll('tr')
 
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
    
  
    filename = filename?filename+'.xls':'excel_data.xls';
    
   
    downloadLink = document.createElement("a");
    
    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob){
        var blob = new Blob(['\ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    }else{
        
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
    
       
        downloadLink.download = filename;
        
        
        downloadLink.click();
    }
}
