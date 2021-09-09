///////////////////////////////////////////////////////////////////////
//------------------- SOCKET IO ADMIN SIDE-----------
///////////////////////////////////////////////////////////////////////
//**** GENERATE UNICODE ART (http://patorjk.com/software/taag/) with ANSI Shadow */
//**** UNICODE CONVERT TO JS/JAVA/C (https://r12a.github.io/app-conversion/) with options [(X)C-style][(X)\n etc] */
console.log("%c\n\n\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2557   \u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\n\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\n\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2554\u2588\u2588\u2557 \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\n\u2588\u2588\u2554\u2550\u2550\u2550\u255D \u2588\u2588\u2554\u2550\u2550\u255D  \u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551\u255A\u2588\u2588\u2557\u2588\u2588\u2551\u255A\u2550\u2550\u2550\u2550\u2588\u2588\u2551\n\u2588\u2588\u2551     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2551 \u255A\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\n\u255A\u2550\u255D     \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D \u255A\u2550\u2550\u2550\u2550\u2550\u255D \u255A\u2550\u255D  \u255A\u2550\u2550\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\n\nTip: you can access the documentation `theme` object directly in the console.\n","font-family:monospace;color:#1976d2;font-size:12px;")
// Get value from html
var message = document.getElementById('message')
var speed = document.getElementById('speed')
var txtcolor = document.getElementById('txtcolor')
var bgcolor = document.getElementById('bgcolor')
var font = document.getElementById('font')
var send = document.getElementById('send')
var output = document.getElementById('output')
var feedback = document.getElementById('feedback')
var clientList = document.getElementById('clientTable')
var resetAll = document.getElementById('resetAll')
var socket = io()
// console.log("socket-admin.js => settings => ", settings)// settings is loaded into window var from App.js


///////////////////////////////////////////////////////////////////////
//------------------- MAKE CONNECTION TO SEVER
///////////////////////////////////////////////////////////////////////

function makeConnection(payload) {
    // socket = io.connect('http://localhost:1234/')
    socket = io(window.location.hostname + ':' + settings.SERVER_PORT, {query: payload} ) // change with your RPi IP address                
}

if(settings.adminCalls != 1) {
    settings.adminCalls ++
    makeConnection({adminid : "pi", hangup : settings.adminCalls})
}

///////////////////////////////////////////////////////////////////////
//------------------ START FRONT END SOCKET IO LOGIC-------------
///////////////////////////////////////////////////////////////////////
function additup() {
    let hh = parseInt(document.getElementById('durationHR').value, 10) * 60 * 60
    let mm = parseInt(document.getElementById('durationMIN').value, 10) * 60
    let ss = parseInt(document.getElementById('durationSEC').value, 10)
    let convert_ms = (hh + mm + ss) * 1000
    let duration = convert_ms
    return duration
}

function rgbConvert(hex) {
    const color = hex
    const r = parseInt(color.substr(1,2), 16)
    const g = parseInt(color.substr(3,2), 16)
    const b = parseInt(color.substr(5,2), 16)
    return [r,g,b]
}

function socketSendPayload() {
    socket.emit('chat', {
        message: message.value,
        speed: speed.value,
        txtcolor: rgbConvert(txtcolor.value),
        bgcolor: rgbConvert(bgcolor.value),
        font: font.value,
        duration: additup()
    })
}

// socket.emit('client connected', settings.USER);

// emit button click events
send.addEventListener('click', () => {
    socketSendPayload()
})

// emit keypress input events: "Admin is typing..."
message.addEventListener('input', (messageValue) => {
    console.log('watching for typing '+ messageValue.target.value)
    socket.emit('typing', messageValue.target.value)
})

message.addEventListener('keyup', (e) => {
    // Number 13 is the "Enter" key on the keyboard
  if (e.keyCode === 13) {
    // Cancel the default action, if needed
    e.preventDefault();
    // Trigger the button element with a click
    socketSendPayload()
  }
})

resetAll.addEventListener('click', () => {
    socket.emit('resetAll')
})

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////
//------------------------- listen for events
///////////////////////////////////////////////////////////////////////
socket.on('chat', (data) => {
    // output.innerHTML = `
    // <marquee scrollamount=${data.speed} 
    // style="font-size:250px; font-family:${data.font}; color:${data.txtcolor}; background-color:${data.bgcolor}">
    //     ${data.duration}${data.message}
    // </marquee>
    // `
    feedback.innerHTML = ''
})

socket.on('typing', (data) => {
    feedback.innerHTML = '<i>User is typing...</i>'
})

socket.on('connectionMade',(payload, currentID) => {
    console.log("socket-admin.js => ", payload)
    console.log("socket-admin.js => CLIENT CONNECTED: " + currentID)
})

socket.on('connectionLost',(payload, currentID) => {
    console.log("socket-admin.js => CLIENT TABLE => ", payload)
    console.log("socket-admin.js => CLIENT DISCONNECTED: " + currentID)
})

socket.on('typingStopped', (data) => {
    feedback.innerHTML = ''
})


function typingStop(){
    console.log('typing has stopped')
    socket.emit('typingStopped')
    
}
