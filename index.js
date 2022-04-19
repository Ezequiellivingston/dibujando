var express = require('express');
var app = express();
const path = require('path');

let data = 0
//app.use(express.static('public'));

app.get('/test', function (req, res) {

  res.sendFile(path.join(__dirname + '/test.js'));

});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));

});


const server = app.listen(4000, function () {
  console.log('Servidor corriendo');
});
var io = require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: ["GET", "POST"]
  }
});

io.on('connection', function (socket) {
  console.log('se conecto ', socket)
  socket.on('chat_message', (msg) => {
    io.emit('chat_message', msg);
  });

});

