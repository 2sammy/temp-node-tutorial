const os = require('os')

// info about current user
//const user = os.userInfo()
//const user2 = os.userInfo()
console.log(user)
// method returns thhe system uptime in seconds
console.log("the system uptime is ${os.uptime()} seconds")

const currentOS= {
    release: os.release(),
    name:os.type(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}
console.log(currentOS)