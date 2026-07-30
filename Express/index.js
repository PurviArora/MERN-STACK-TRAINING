import http from 'http'
http.createServer((req, res) => {
    if(req.url == "/") {
        res.writeHead(200,{
            "content-type":"text/html"
        })
        res.end(`<h1> Welcome to the Home Page</h1>`);
    }
    else if(req.url == "/about") {
        res.writeHead(200,{
            "content-type":"text/html"
        })
        res.end(`<h1> Welcome to the About Page </h1>`);
    }
    else if(req.url == "/contact") {
        res.writeHead(200,{
            "content-type":"application/json"
        })
        res.end(JSON.stringify({
            fname:"Purvi",
            lname:"Arora",
            email:"pa@gmail.com",
            contact:36856749384
        }));
    }
}).listen(9000, ()=> {
    console.log('Working...');
})