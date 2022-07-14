// importaciones.
const express = require('express');
const server = require('http').server(app);
const io = require('socket,io')(server);

//
const app = express();

let messages = [];

app.use(express.static('./public'));

io.on('connection', function(socket) {
  console.log('Usuario conectado');
  socket.emit('meesages', messages); //emitir todos los mensajes a un cliente nuevo

  socket.on('new-mensaje', function(data) {
    messages.push(data); // agregar mensajes al array
    io.sockets.emit('messages', messages); //emitir a todos los clientes.
  });
});

// puerto
const PORT = process.env.PORT || 8080;

// conexion.
const srv = app.listen(PORT, () => {
  console.log(`The server listening on port ${srv.address().port}`)
});

// Manejo de errores de conexión
srv.on('error', error => console.log(`Error on the server ${error}`));