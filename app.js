
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
const dateReference = document.querySelector('[data-js="date"]')
let table = document.querySelector('[data-js="table"]')
let info = document.querySelector('[data-js="infor"]')
let number = [5,10,15,20,25,30,35,40,45,50,90,120]
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
    let arrayForCalc = array.filter(item => item < dateReference.value)
    console.log(arrayForCalc)


if(dateReference.value){

    for (i = arrayForCalc.length;i > (arrayForCalc.length - selectedNumbers); i--) {
        let high = Number(datas['Time Series FX (Daily)'][`${arrayForCalc[i-1]}`]['2. high'])
        let low = Number(datas['Time Series FX (Daily)'][`${arrayForCalc[i-1]}`]['3. low'])
        arrayMedia.push(high-low) 
    }

} else {
    for (i = array.length;i > (array.length - selectedNumbers); i--) {
        let high = Number(datas['Time Series FX (Daily)'][`${array[i-2]}`]['2. high'])
        let low = Number(datas['Time Series FX (Daily)'][`${array[i-2]}`]['3. low'])
        arrayMedia.push(high-low) 
    }
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
        const response = await fetch(`https://alpha-vantage.p.rapidapi.com/query?from_symbol=${coinOne.value}&function=FX_DAILY&to_symbol=${coinTwo.value}&outputsize=full&datatype=json`, options)
        const datas = await response.json()
        const arrayOfDatas = Object.keys(datas['Time Series FX (Daily)']).reverse()
        const open = arrayOfDatas.map(open => datas['Time Series FX (Daily)'][`${open}`]['1. open'])
                        .map(item => item.replace('.',','))
        const low = arrayOfDatas.map(low => datas['Time Series FX (Daily)'][`${low}`]['3. low'])
                        .map(item => item.replace('.',','))
        const high = arrayOfDatas.map(high => datas['Time Series FX (Daily)'][`${high}`]['2. high'])
                        .map(item => item.replace('.',','))
        const close = arrayOfDatas.map(close => datas['Time Series FX (Daily)'][`${close}`]['4. close'])
                        .map(item => item.replace('.',','))


        let html = ''
        
        mediaSelect(arrayOfDatas,number,datas)

        arrayOfDatas.map((item,index) => {   
            html += `<tr>
            <td>${item}</td>
            <td>${open[index]}</td>
            <td>${low[index]}</td>
            <td>${high[index]}</td>
            <td>${close[index]}</td>
            </tr>`
              
        })
        
        table.innerHTML += html
        console.log(table)
    }

button.addEventListener('click', ()=> {
  let numberOfDays = numberSelect.value
        
  getDatas(numberOfDays)
  info.classList.toggle('off')     
})

setSelectersIntoInputs(coins,coinOne)
setSelectersIntoInputs(coins,coinTwo)
setSelectersIntoInputs(number,numberSelect)
 


 function exportTableToExcel(tableID, filename = ''){
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableID);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
    
  
    filename = filename?filename+'.xls':`${coinOne.value+"_"+coinTwo.value}.xls`;
    
   
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
