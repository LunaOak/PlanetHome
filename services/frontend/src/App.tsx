import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  public render() {
    if (this.hasGeo()) { this.getCurrentPosition( ) }
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }

  private hasGeo() {
    return 'geolocation' in navigator
  }

  private getCurrentPosition() {
    navigator.geolocation.getCurrentPosition((position) => {
      alert(`${position.coords.latitude} ${position.coords.longitude}`)
      console.log(position.coords.latitude, position.coords.longitude)
    })
  }
}

export default App
