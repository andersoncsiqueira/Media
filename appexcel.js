



let html = ""
const tablecoin = document.querySelector('[data-js="tablecoin"]')
const coinOne = document.querySelector('[data-js="coinOne"]')
const coinTwo = document.querySelector('[data-js="coinTwo"]')
const coins = ['','USD','EUR','GBP','JPY','CAD','NZD','CHF','AUD','BRL']
const buttonExpo = document.querySelector('[data-js="expor"]')
const buttonOk = document.querySelector('[data-js="buttonFirstSearch"]')



const setSelectersIntoInputs = (arrayOfSelecters,inputContainer) => {
    
    let templateOfOptions = ''
    arrayOfSelecters.forEach(selected => {
        templateOfOptions += `<option>${selected}</option>`
    })

    inputContainer.innerHTML = templateOfOptions
    
}

setSelectersIntoInputs(coins,coinOne)
setSelectersIntoInputs(coins,coinTwo)




const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com',
        'X-RapidAPI-Key': 'a1ecde7124msh85f66f86f944dbep1451edjsncf510c9ccda1'
    }
}


const getDatas = async () => {
    const response = await fetch(`https://alpha-vantage.p.rapidapi.com/query?from_symbol=${coinOne.value}&function=FX_DAILY&to_symbol=${coinTwo.value}&outputsize=full&datatype=json`, options)
    const datas = await response.json()
    const times = Object.keys(datas['Time Series FX (Daily)'])
   // const open = times.map(item =>  datas[`Time Series FX (Daily)`][`${item}`]['1. open'])
   // const close = times.map(item =>  datas[`Time Series FX (Daily)`][`${item}`]['4. close'])
    console.log(coinOne.value,coinTwo.value)
    
  let template =  times.map(item => {   
    html += `<tr>
    <td>${item}</td>
    <td>${datas['Time Series FX (Daily)'][`${item}`]['1. open']}</td>
    <td>${datas['Time Series FX (Daily)'][`${item}`]['4. close']}</td>
    </tr>`
      
})

tablecoin.innerHTML = html
}

function exportTableToExcel(tableID='tablecoin', filename = ''){
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

buttonOk.addEventListener('click', getDatas)
buttonExpo.addEventListener('click', exportTableToExcel)
