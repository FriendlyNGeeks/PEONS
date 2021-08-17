import React, { Component } from 'react'
import Modal from '../components/Modal';
import ClientTable from '../components/ClientTable';
import { appendScript } from '../utils/appendScript'

export default class Admin extends Component {

  componentDidMount() {
    console.log('Admin.js => Admin Route mounted');
    console.log('Admin.js => server @ ' + process.env.REACT_APP_SERVER_IP);
    window.settings = {
      SERVER_IP : process.env.REACT_APP_SERVER_IP,
      SERVER_PORT : process.env.REACT_APP_SERVER_PORT,
      adminCalls : 0
    }
    document.title = "PEONS | Admin Dashboard";
    appendScript("/backend/js/socket-admin.js");
  }
  render() {
    return (
      <div>
        <h1 className="mt-4">
            <i className="iconify" data-icon="logos-raspberry-pi" data-inline="true"></i>
            Notify | Admin Dashboard
        </h1>
        <b>Raspberry Pi + Express.js + Socket.io</b>

        {/* <!-- Button trigger modal --> */}
        <br></br>
        <button type="button" className="mt-3 btn-sm btn btn-success" data-toggle="modal" data-target="#exampleModalCenter">
            <i className="fas fa-cog"></i>&nbsp;
            Settings
        </button>
        <button type="button" id="resetAll" className="mt-3 btn-sm btn btn-success">
          RESET ALL
        </button>
        <Modal />
        <ClientTable />
        {/* <!-- scrollamount = 5 slow, 13 medium, 20 fast --> */}
        <div id="output">
            <marquee id="text" scrollamount="13" style={{fontSize: 250}}>
                Raspberry Pi Running Text {process.env.REACT_APP_SERVER_IP}
            </marquee>
        </div>
      </div>
    )
  };
}