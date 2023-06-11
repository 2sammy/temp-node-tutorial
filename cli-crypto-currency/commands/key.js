const inquirer = require('inquirer');
const colors = require('colors');
const keyManager = require('../bin/keyManager');
const keyManager = require('../lib/keyManager');
const {isRequired} = require('../utils/validation');
const keyManager = require('../lib/keyManager');


const key = {
   async set() {
       // console.log('hello from set')
       const keyManager = new keyManager();
       const input = await inquirer.prompt([
        {
            type: "input",
            name: "key",
          //  validate: isRequired,
            message : "Enter API Key ".green + 'https://nomics.com',
            validate: isRequired
        }

       ]);

       const key = keyManager.setKey(input.key);

       if(key) {
        console.log('API Key Set'.blue);
       }
    },

    show() {
        try{
            const keyManager = new keyManager();
            const key = keyManager.getKey();

            console.log('current API key: ',key.yellow);
            return key;
        } catch(err){
            console.error(err.message.red)
        }
    
    },

    remove() {
        try{
            const keyManager = new keyManager();
            keyManager.deleteKey()
            console.log('Key removed'.blue)
            return;
        } catch(err){
            console.error(err.message.red)
        }
    }

}

module.exports = key;