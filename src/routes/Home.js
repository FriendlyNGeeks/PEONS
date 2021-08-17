import React, { Component } from 'react'
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
    console.log('Home.js => Home Route mounted');
    console.log('Home.js => ', process.env.REACT_APP_SERVER_IP);
    window.settings = {
      SERVER_IP : process.env.REACT_APP_SERVER_IP,
      SERVER_PORT : process.env.REACT_APP_SERVER_PORT,
      USER : process.env.REACT_APP_USER
    }
    appendScript("/frontend/js/socket.js");
  }
  render() {
    return (
      <div>
        <h1 className="mt-4">
        <i className="iconify" data-icon="logos-raspberry-pi" data-inline="true"></i>
        Controlled Running Text
    </h1>
    <b>Raspberry Pi + Express.js + Socket.io</b>
    {/* <!-- scrollamount = 5 slow, 13 medium, 20 fast --> */}
    <div id="output">
        <marquee id="text" scrollamount="13" style={{fontSize: 250}}>
            Raspberry Pi Running Text
        </marquee>
    </div>
      </div>
    )
  };
}