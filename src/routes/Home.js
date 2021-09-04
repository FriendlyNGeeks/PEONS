import React, { Component } from 'react'
import { HeaderHome } from '../components/index';

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
      SERVER_PORT : process.env.REACT_APP_SERVER_PORT
    }
  }
  render() {
    return (
      <>
      <HeaderHome />
      </>
    )
  };
}