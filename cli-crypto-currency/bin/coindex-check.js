const program = require ('commander');
const check = require ('../commands/check')

program
    .command('price')
    .description('Check price of coins')
    .option('--cur < currency>',
    'Change the currency','USD')
    .option('--coin <type>',
    'Add specific coin types in CSV format',
    'BTC,ETH XRP' )

    .action((cmd) => check.price(cmd));

program.parse(process.argv);