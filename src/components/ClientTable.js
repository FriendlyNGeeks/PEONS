import React, { useState, useEffect } from 'react'
import io from "socket.io-client"
import "../css/clientTable.css"

const socket = io(process.env.REACT_APP_SERVER_IP + ":" + process.env.REACT_APP_SERVER_PORT)

function ClientTable() {
  
  const [clientTable, setTable] = useState([])
      
  useEffect(() => {
    socket.on("connectionAdmin", (payload) => {
      setTable(payload)
    })
    socket.on("connectionMade",(payload, currentID) => {
      setTable(payload)
    })
    socket.on("connectionLost",(payload, currentID) => {
      setTable(payload)
    })
  })

  return (
    <div id="clientTable">
        <h2>
            Client Table | Active Clients: {clientTable.length}
        </h2>
        <ul>
            {clientTable.map((client, index) => (
                <li key={client.Username}>Client: {client.Username} Section: {client.Section} IPv4: {client.Client_IP}</li>
            ))}
        </ul>
    </div>
  );
}
export default ClientTable