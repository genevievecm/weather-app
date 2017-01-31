import React, { Component } from 'react';
import './App.css';
import SearchWeather from './containers/WeatherSearch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Weather App</h1>
        <SearchWeather />
      </div>
    );
  }
}

export default App;