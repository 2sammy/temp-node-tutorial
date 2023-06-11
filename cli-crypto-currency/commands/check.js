const keyManager = require('../lib/keyManager')
const CryptoAPI = require('../lib/cryptoAPI')

const check = {
   async price(cmd) {
    try{
        keyManager = new keyManager
        const key =keyManager.getKey();

        const api = new CryptoAPI(key)
        const outPutData = await api.getPriceData(cmd.coin, cmd.cur);

        console.log(err.message.red)

    }catch(err){
        console.error(err.message.red)
    }
    
    }
}
module.exports = check;
 