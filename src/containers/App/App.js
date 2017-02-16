import React, { Component } from 'react';
import WeatherSearch from '../WeatherSearch/WeatherSearch';
import WeatherDetails from '../WeatherDetails/WeatherDetails';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Find a Weather Forecast</h1>
        <WeatherSearch />
        <WeatherDetails />
      </div>
    );
  }
}

export default App;