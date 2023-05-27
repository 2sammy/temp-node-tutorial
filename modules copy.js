//commonjs, every  file is a module by default
//modules - encapsulated code (only share minimum)
const names = require('./names')
const sayHi= require('./utilis')
const data =require('./alternative')
require('./granade-mind')


sayHi('susan')
sayHi(names.peter)
sayHi(names.john)

