import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  public state = {
    position: {
      lat: 0,
      long: 0,
    },
    address: '',
  }

  public render() {
    const { position, address } = this.state
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            latitude: {position.lat} <br/>
            longitude: {position.long} <br/>
            address: {address}<br/>
          </p>
        </header>
      </div>
    )
  }
}

export default App
