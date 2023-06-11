const axios = require(axios)
const color = require(colors)

class CryptoAPI {
    constructor(apikey){
        this.apikey = apikey
        this.baseUrl ="https://api.nomics.com/v1/currencies/ticker";
    }
   async getPriceData(coinOption,cuOption) {
        try{
            // formatter for currency
            const formatter = new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: cuOption  
            })


            const res = await axios.get(`${this.baseUrl}?
            key=${this.apikey} & ids=${coinOption}&
             convert=${curOption}`);

             let output =""
             res.data.forEach(coin => {
                output += 'coin : ${coin.symbol.yellow} (${coin.name}) | Price: ${formatter.format(coin.price).green} |Rank: {coin.rank.blue}';
             })

             return output;
//module.exports = CryptoAPI

        }catch (err){
            console.err(err);

        }
    }
}
module.exports = CryptoAPI
