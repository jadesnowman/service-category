const axios = require('axios')

const billing = async () => {
    const result = await axios.get('https://gist.githubusercontent.com/Loetfi/fe38a350deeebeb6a92526f6762bd719/raw/9899cf13cc58adac0a65de91642f87c63979960d/filter-data.json')
    const denom = result.data.data.response.billdetails.map(val => val.body);

    const fixDenom = denom.map(val => {
        return val.map(item => {
            const amount = parseInt(item.split(": ")[1])
            if (amount >= 100000) return amount;
        })
    })

    return fixDenom.filter(Number)
}

billing().then(res => {
    console.log(res)
})