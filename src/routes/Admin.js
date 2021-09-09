import React, { Component } from 'react'
import { HeaderAdmin, ClientTable, Marquee, Modal } from '../components/index';
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
      <>
      <HeaderAdmin />
      <Modal />
      <ClientTable />
      <Marquee/>
      </>
    )
  };
}