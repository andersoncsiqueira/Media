

fetch('https://economia.awesomeapi.com.br/json/daily/AUD-USD/30')
    .then((resp)=> {
       return resp.json()
    }).then(cotacoes =>  {
        console.log(cotacoes)
    })
    .catch((err)=> {
        console.log(err)
    })
