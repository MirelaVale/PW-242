const http = require('http')
const server = http.createServer((req, res) => {
    const headers = req.headers;
    const method = req.method;
    const url = req.url;
    console.log("Headers");
    console.log(headers);
    console.log("Method: " + method);
    console.log("URL: " + url);
});
server.listen(3000);