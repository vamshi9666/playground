import React, { Component } from 'react';
import logo from './logo.svg';
import io from "socket.io-client";
import './App.css';

var isSocketConnected = false
class App extends Component {

  restartSocket = async  ( ) => {
    try {
      this.socket = null;
      this.initSocket()
    }
    catch (err){
      console.log( " error in Restarting socket ", err) 
    }
  }
  initSocket = async (  ) => {
    try {
      if ( !this.socket){
        this.socket = io.connect("https://apis.fruitstone.in/", {
            path: '/naz/sockets/',
            transports: ['websocket'],
            upgrade: false
        })
        isSocketConnected = true
        this.socket.on('connect', () => {
            console.log("Connected to ", this.socket.id)
            this.socket.emit("join-post-updates")

        });
        this.socket.on("POST_UPDATE", (k) => {
          console.log("recieving -->",k);
      })
        this.socket.on("info", (data) => {
          console.log( "data from Info ", data)
        })
      }
      this.socket.on("disconnect", (data) => {
        isSocketConnected = false;
        setTimeout(this.restartSocket() , 20000);
        console.log( "Socket disconnected ", data)
      })
    }
    catch (err){
      console.log("err in init Socket ", err)
    }
  }
  componentDidMount( ) {
        this.initSocket()
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
