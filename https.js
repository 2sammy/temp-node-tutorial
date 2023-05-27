const http = require('http')
const server = http.createServer((req,res)=> {
   // res.write('hello there? welcome to our home page. ')
    if(req.url === '/') {
        res.end( 'welcome to our home page')
    }
    if (req.url === '/about') {
        res.end('here is our short story')
    }
    res.end(`
        <h1> oops!!</h1>
        <p>we seems to not find what you are looking for</p>
        <a href="/"> back home </a>

        `)

// first argument represnt incoming request
// and response back
})

server.listen(5000)
    