const path = require('path')
//shows the specifics
console.log(path.sep)

const filepath = path.join('/content','subfolder','text.txt')
console.log(filepath)

//getting base name
const base = path.basename(filepath)
console.log(base)
//getting absolute path
const absolute = path.resolve(__dirname,'content', 'subfolder','text.txt')