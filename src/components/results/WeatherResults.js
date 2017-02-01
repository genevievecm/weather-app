import React, { Component } from 'react';

export default class WeatherResults extends Component {
  render() { 
    console.log(this.props.results);
    if(this.props.results !== []){
      return (
        <ul>
          <li><h1>{this.props.results.city} {this.props.results.country}</h1></li>
          <li>{this.props.results.currentWeather}</li>
          <li>{this.props.results.currentTemp} &deg;C</li>
          <li>Sunrise: {this.props.results.sunrise}</li>
          <li>Sunset: {this.props.results.sunset}</li>
        </ul>
      );
    }
  }
}