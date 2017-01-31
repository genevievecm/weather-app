import React, { Component } from 'react';

export default class WeatherResults extends Component {
  render() { 
    return (
      <ul>
        <li><h1>{this.props.results.city} {this.props.results.country}</h1></li>
        <li>{this.props.results.currentWeather}</li>
        <li>{this.props.results.currentTemp}</li>
        <li>{this.props.results.sunrise}</li>
        <li>{this.props.results.sunset}</li>
      </ul>
    );
  }
}