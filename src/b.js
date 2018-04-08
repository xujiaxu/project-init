const url = require('url');
const str = 'http://www.baidu.com:80/index.html?name=jack&age=7#bbs';
console.log(url.parse(str, true)); 