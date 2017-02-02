import React, { Component } from 'react';

export default class WeatherResults extends Component {
  render() { 
    const results = this.props.results;
    return (
      <ul>
        <li><h1>{results.city} {results.country}</h1></li>
        <li>{results.currentWeather}</li>
        <li>{results.currentTemp} &deg;C</li>
        <li>Sunrise: {results.sunrise}</li>
        <li>Sunset: {results.sunset}</li>
      </ul>
    );
  }
}