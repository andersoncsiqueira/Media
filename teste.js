/*const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com',
		'X-RapidAPI-Key': 'a1ecde7124msh85f66f86f944dbep1451edjsncf510c9ccda1'
	}
};

fetch('https://alpha-vantage.p.rapidapi.com/query?from_symbol=USD&function=FX_DAILY&to_symbol=BRL&outputsize=compact&datatype=json', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));*/


    

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com',
            'X-RapidAPI-Key': 'a1ecde7124msh85f66f86f944dbep1451edjsncf510c9ccda1'
        }
    }

    const getDatas = async () => {
        const response = await fetch('https://alpha-vantage.p.rapidapi.com/query?from_symbol=USD&function=FX_DAILY&to_symbol=BRL&outputsize=compact&datatype=json', options)
        const datas = await response.json()

        console.log(datas['Time Series FX (Daily)']['2022-03-25']['2. high'])
        const arrays = Object.keys(datas['Time Series FX (Daily)'])

        arrays.map(item => {
            console.log(datas['Time Series FX (Daily)'][`${item}`])
        })
    
    }

    getDatas()