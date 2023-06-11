const program = require('commander');
const key = require('../commands')

program
    .command('set')  
    .description('Set API Key --Get at https://nomics.com')
    .action(key.set)

    
program
.command('show')  
.description('show API Key --Get at https://nomics')
.action(key.show)


program
    .command('remove')  
    .description('remove API Key --Get at https://nomics')
    .action(key.remove)

program.parse(process.argv)