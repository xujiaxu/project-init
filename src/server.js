const http = require('http');
const fs = require('fs');
const url = require('url');

let server = http.createServer(function(request, response) {
    let urlObj = url.parse(request.url, true);
    let pathname = urlObj.pathname;
    let query = urlObj.query;

    if (pathname === '/test.html') {
        let con = fs.readFileSync('./test.html', 'utf-8');
        response.write(con);
        response.end();
    }
});
server.listen(8019, function() {
    console.log('server is creat success !');
});