///////////////////////////////////////////////////////////////////////
//------------------- SOCKET IO CLIENT SIDE-----------
///////////////////////////////////////////////////////////////////////
//**** GENERATE UNICODE ART (http://patorjk.com/software/taag/) with ANSI Shadow */
//**** UNICODE CONVERT TO JS/JAVA/C (https://r12a.github.io/app-conversion/) with options [(X)C-style][(X)\n etc] */
console.log("%c\n\n\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2557   \u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\n\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\n\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2554\u2588\u2588\u2557 \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\n\u2588\u2588\u2554\u2550\u2550\u2550\u255D \u2588\u2588\u2554\u2550\u2550\u255D  \u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551\u255A\u2588\u2588\u2557\u2588\u2588\u2551\u255A\u2550\u2550\u2550\u2550\u2588\u2588\u2551\n\u2588\u2588\u2551     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2551 \u255A\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\n\u255A\u2550\u255D     \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D \u255A\u2550\u2550\u2550\u2550\u2550\u255D \u255A\u2550\u255D  \u255A\u2550\u2550\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\n\nTip: you can access the documentation `theme` object directly in the console.\n","font-family:monospace;color:#1976d2;font-size:12px;")

// Declare socket for client side connection/listen events
var socket = io()

// Get value from html
var output = document.getElementById('output')
console.log("socket.js => settings => ", settings)// settings is loaded into window var from App.js

///////////////////////////////////////////////////////////////////////
//------------------- MAKE CONNECTION TO SEVER
///////////////////////////////////////////////////////////////////////

function makeConnection() {
  socket = io(window.location.hostname + ':' + settings.SERVER_PORT, {query: clientData} ) // change with your RPi IP address
}

///////////////////////////////////////////////////////////////////////
//----------- PAYLOAD PARAMS TO SEND SEVER && CALL FOR CONNECTION
///////////////////////////////////////////////////////////////////////


/**
 * Get the user IP throught the webkitRTCPeerConnection
 * @param onNewIP {Function} listener function to expose the IP locally
 * 
 * navigator.mediaDevices.getUserMedia({ video: true })
 * @return undefined
 */
 function getUserIP(onNewIP) { //  onNewIp - your listener function for new IPs
  //compatibility for firefox and chrome
  var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
  var pc = new myPeerConnection({
      iceServers: []
  }),
  noop = function() {},
  localIPs = {},
  ipRegex = /(\d{1,3}(\.\d{1,3}){3})/g,
  key;

  function iterateIP(ip) {
      if (!localIPs[ip]) onNewIP(ip);
      localIPs[ip] = true;
  }

   //create a bogus data channel
  pc.createDataChannel("");

  // create offer and set local description
  pc.createOffer().then(function(sdp) {
      sdp.sdp.split('\n').forEach(function(line) {
          if (line.indexOf('candidate') < 0) return;
          line.match(ipRegex).forEach(iterateIP);
      });
      
      pc.setLocalDescription(sdp, noop, noop);
  }).catch(function(reason) {
      // An error occurred, so handle the failure to connect
  });

  //listen for candidate events
  pc.onicecandidate = function(ice) {
      if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
      ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
  };
}

// Usage

// getUserIP(function(ip){
//   alert("Got IP! :" + ip);
// });


///////////////////////////////////////////////////////////////////////
//-------------- FUNCTION LOGIC TO GRAB URL PARAMS
///////////////////////////////////////////////////////////////////////
function getAllUrlParams(url) {

    // get query string from url (optional) or window
    var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
  
    // we'll store the parameters here
    var obj = {};
  
    // if query string exists
    if (queryString) {
  
      // stuff after # is not part of query string, so get rid of it
      queryString = queryString.split('#')[0];
  
      // split our query string into its component parts
      var arr = queryString.split('&');
  
      for (var i = 0; i < arr.length; i++) {
        // separate the keys and the values
        var a = arr[i].split('=');
  
        // set parameter name and value (use 'true' if empty)
        var paramName = a[0];
        var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];
  
        // (optional) keep case consistent
        paramName = paramName.toLowerCase();
        if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();
  
        // if the paramName ends with square brackets, e.g. colors[] or colors[2]
        if (paramName.match(/\[(\d+)?\]$/)) {
  
          // create key if it doesn't exist
          var key = paramName.replace(/\[(\d+)?\]/, '');
          if (!obj[key]) obj[key] = [];
  
          // if it's an indexed array e.g. colors[2]
          if (paramName.match(/\[\d+\]$/)) {
            // get the index value and add the entry at the appropriate position
            var index = /\[(\d+)\]/.exec(paramName)[1];
            obj[key][index] = paramValue;
          } else {
            // otherwise add the value to the end of the array
            obj[key].push(paramValue);
          }
        } else {
          // we're dealing with a string
          if (!obj[paramName]) {
            // if it doesn't exist, create property
            obj[paramName] = paramValue;
          } else if (obj[paramName] && typeof obj[paramName] === 'string'){
            // if property does exist and it's a string, convert it to an array
            obj[paramName] = [obj[paramName]];
            obj[paramName].push(paramValue);
          } else {
            // otherwise add the property
            obj[paramName].push(paramValue);
          }
        }
      }
    }
  
    return obj;
  }
  const clientData = getAllUrlParams()

  //------------------- CALL FOR CONNECTION -----------
  getUserIP(function(ip){
    if (ip != null || ip != undefined) {
      clientData['clientip'] = ip
      makeConnection()
    }else {
      clientData['clientip'] = "webrtc-flag"
      makeConnection()
    }
    
  })
  console.log("socket.js => " , clientData)


///////////////////////////////////////////////////////////////////////
//------------------ START FRONT END SOCKET IO LOGIC -------------
///////////////////////////////////////////////////////////////////////

// socket.emit('client connected', settings.USER)

//--------------------- EMIT BUTTON CLICK EVENTS


// send.addEventListener('click', () => {
//     socket.emit('chat', {
//         message: message.value,
//         speed: speed.value,
//         txtcolor: txtcolor.value,
//         bgcolor: bgcolor.value,
//         font: font.value,
//     })
// })

// emit keypress input events: "Lintang is typing..."
// message.addEventListener('input', (messageValue) => {
//     console.log('watching for typing '+ messageValue.target.value)
//     socket.emit('typing', messageValue.target.value)
// })


//-------------------- EXECUTE ON TRIGGERED LISTEN EVENT
socket.on('connectionMade', (data) => {
  // console.log("connectionmade")
})
socket.on('resetAll',() => {
  console.log("dont reset us")
  window.location.reload();
})

// socket.on('typing', (data) => {
//     feedback.innerHTML = '<i>User is typing...</i>'
// })

// socket.on('typingStopped', (data) => {
//     feedback.innerHTML = ''
// })

// function typingStop(){
//     console.log('typing has stopped')
//     socket.emit('typingStopped')
    
// }