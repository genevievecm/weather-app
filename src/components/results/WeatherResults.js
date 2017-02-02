import React, { Component } from 'react';

export default class WeatherResults extends Component {

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    const results = this.props.results;
    return (
      <ul>
        <li><h2>{results.city}, {results.country}</h2></li>
        <li>{this.capitalizeFirstLetter(results.currentWeather)}</li>
        <li>Currently {results.currentTemp} &deg;C</li>
        <li>Sunrise at {results.sunrise}</li>
        <li>Sunset at {results.sunset}</li>
      </ul>
    );
  }
}