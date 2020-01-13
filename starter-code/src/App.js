import React, { Component } from 'react'
import CardsList from "./CardsList.js";
import Navbar from "./Navbar.js";
import IntroSection from './IntroSection.js';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <IntroSection />
        <CardsList />
      </div>
    )}
}

export default App