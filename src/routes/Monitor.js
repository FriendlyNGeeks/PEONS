import React, { Component } from 'react'
import { HeaderMonitor, Marquee } from '../components/index';
import { appendScript } from '../utils/appendScript'

export default class Home extends Component {
  // constructor(props){
  //   super(props)
  //   //----- initialize state here
  //   this.state = {
  //     settings: passBall,
  //   }
  // }
  componentDidMount() {
    console.log('Monitor.js => Monitor Route mounted');
    console.log('Monitor.js => ', process.env.REACT_APP_SERVER_IP);
    window.settings = {
      SERVER_IP : process.env.REACT_APP_SERVER_IP,
      SERVER_PORT : process.env.REACT_APP_SERVER_PORT
    }
    appendScript("/frontend/js/socket.js");
  }
  render() {
    return (
    <>
    <HeaderMonitor />
    <Marquee />
    </>
    )
  };
}