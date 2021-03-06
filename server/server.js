// ENV settings import
require('dotenv-flow').config()

const settings = {
  SERVER_IP: process.env.REACT_APP_SERVER_IP,
  SERVER_PORT: process.env.REACT_APP_SERVER_PORT
}

let clientTable = []
function Queue() {
  this.elements = [];
}


const express = require('express')
const socket = require('socket.io')
const path = require('path')
const app = express() // create express app
let currentPayload = null


///////////////////////////////////////////////////////////////////////
//--------------- GRAB ALL NETWORK ADAPTERS FIND SERVER IP
///////////////////////////////////////////////////////////////////////

function getHostIP(reqAdmin) {

  const { networkInterfaces } = require('os')
  const nets = networkInterfaces()
  let results = [] // Or just '{}', an empty object

  for (const name of Object.keys(nets)) {
      for (const net of nets[name]) {
          // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
          if (net.family === 'IPv4' && !net.internal) {
              if (!results[name]) {
                  results[name] = []
              }
              results[name].push(net.address)
          }
      }
  }
  if (reqAdmin !== true) {
    console.log("server.js =>", results)
  }
  else {
    console.log("server.js => New Host IP: http://"+ Object.values(results)[0][0])
  }
  settings.SERVER_HOST = Object.values(results)[0][0]
}
// CALL TO GET SERVER HOST IP
getHostIP()

// add middlewares
app.use(express.static(path.join(__dirname, ".", "build")))

////////////////////////////////////////////
//-------- USED TO REDIRECT ALL REQUEST TO INDEX FOR REACT ROUTER
////////////////////////////////////////////
// PRODUCTION
app.get('/status', (req, res) => {
  console.log("server.js => http request received /status");
  res.sendStatus(200);
});

app.get('/monitor*', (req, res) => {
  console.log("server.js => http request received /monitor");
  res.sendFile(path.join(__dirname, ".", "build", "index.html"));
});

app.get('/admin*', (req, res) => {
  var reqAdmin = true
  getHostIP(reqAdmin);
  console.log("server.js => http request received /admin");
  res.sendFile(path.join(__dirname, ".", "build", "index.html"));
});

///////////////////////////////////////////////////////////////////////
//---------------------- ACTIVATE SERVER 
///////////////////////////////////////////////////////////////////////

const server = app.listen(settings.SERVER_PORT, () => {
  // console.log("server.js =>", "Server running @ "+ Object.values(results)[0] + " on port: " + settings.SERVER_PORT + '!')
  console.log(`server.js => Server listening @ ${settings.SERVER_IP}:${settings.SERVER_PORT}`)
})

//---------PROTOTYPE SEVER REBOOT
// function severReboot() {
//     server.close()
// }


///////////////////////////////////////////////////////////////////////
//------------------- socket setup
///////////////////////////////////////////////////////////////////////

const io = socket(server, {allowEIO3: true})

io.on('connection', async (socket) => {
    function fetchUserId(socket) {
      return socket.id
    }
    function sendBackFill() {
      if (currentPayload) {
        console.log("server.js => send currentPayLoad to: " + socket.handshake.query.reactComponentName)
        io.to(clientId).emit('chat', currentPayload)
      }
    }

    const clientId = await fetchUserId(socket)

    if (socket.handshake.query.clientid) {
        console.log(`server.js => CLIENT CONNECTED: ${socket.handshake.query.clientid}`)
        const client = {
            'Socket_ID': socket.id,
            'Client_IP': socket.handshake.query.clientip, 
            'Username': socket.handshake.query.clientid,
            'Section' : socket.handshake.query.section
        }
        if (!clientTable.some(e => e.Username === socket.handshake.query.clientid) && socket.handshake.query.adminid != "pi"){
            var currentClient = socket.handshake.query.clientid
            clientTable.push(client)
            console.log("server.js => ", JSON.stringify(clientTable))
        }
        
        io.sockets.emit('connectionMade', clientTable, currentClient)
    }
    else if (socket.handshake.query.adminid == "pi" && socket.handshake.query.hangup == 1) {
        console.log("server.js => CLIENT CONNECTED: Admin")
        io.sockets.emit('connectionAdmin', clientTable, settings.SERVER_HOST)
    }else if (socket.handshake.query.reactComponentName == "marquee") {
      await sendBackFill(socket)
    }

    socket.on("disconnect", (reason) => {
        if(socket.handshake.query.clientid) {
          var currentClient = socket.handshake.query.clientid
          clientTable = clientTable.filter(u => u.Socket_ID !== socket.id)
          console.log(`server.js => CLIENT DISCONNECTED: ${socket.handshake.query.clientid}`)
          io.sockets.emit('connectionLost', clientTable, currentClient)
        }
        else if(socket.handshake.query.adminid == "pi") {
          console.log("server.js => CLIENT DISCONNECTED: Admin")
        }
    })
    // ---------Template queue waiting event box ---------//
    Queue.prototype.enqueue = (e) => {
      this.elements.push(e);
    };

    socket.on('chat', (data) => {
      //Used to backfill new clients
      currentPayload = data
      io.sockets.emit('chat', data)
    })
    // Sync all monitors/clients
    socket.on('resetAll', () => {
      io.sockets.emit('resetAll')
    })
    // broadcast message to another client
    socket.on('typing', (data) => {
      socket.broadcast.emit('typing', data)
      console.log('Messeage input: '+ data)
    })
    // broadcase to other clients to clear USER TYPING
    socket.on('typingStopped', (data) => {
      socket.broadcast.emit('typingStopped', data)
    })
})
