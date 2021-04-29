const http = require("http")
const {default: axios} = require('../src/index')

let server

server = http.createServer(function (req, res) {
  setTimeout(function () {
    res.end('1');
  }, 100);
}).listen(4444, 'localhost', function () {
  var success = false
  axios.get('http://localhost:4444/').then(function (res) {
    success = true;
    console.log(111, res.data)
    
  })

  axios.get('http://localhost:4444/').then(function (res) {
    success = true;
    console.log(222, res.data)
  })

  axios.get('http://localhost:4444/').then(function (res) {
    success = true;
    console.log(333, res.data)
  })

  axios.get('http://localhost:4444/').then(function (res) {
    success = true;
    console.log(444, res.data)
  })
});

