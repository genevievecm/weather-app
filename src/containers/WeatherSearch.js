import React, { Component } from 'react';
import $ from 'jquery';
import WeatherResults from '../components/results/WeatherResults';
//import { ConvertTimestamp } from '../components/convertTime/convertTimestamp';

function ConvertTimestamp(timestamp) {
  	
  	let d = new Date(timestamp * 1000),	// Convert timestamp to milliseconds
		hour = d.getHours(),
		h = hour,
		min = ('0' + d.getMinutes()).slice(-2),
		ampm = 'AM',
		time;

		if (hour > 12) {
			h = hour - 12;
			ampm = 'PM';
		} else if (hour === 12) {
			h = 12;
			ampm = 'PM';
		} else if (hour === 0) {
			h = 12;
		}

		time = h + ':' + min + ' ' + ampm;

		return time;
}


export default class WeatherSearch extends Component {

	OPEN_WEATHER_SEARCH_URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
	OPEN_WEATHER_API_KEY = '&appid=32c5ffb87028a14d9034601ba5f9da63';
	METRIC_UNIT = '&units=metric';

	constructor(){
    super();
    this.state = {
			data: [],
			search: '',
		}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

	componentDidMount(){
		this.getWeather();
	}

	//handles user input
	handleChange(event) {
    this.setState({search: event.target.value});
  }

  //handles search button click
  handleSubmit(event) {
    this.getWeather(this.state.search);
    event.preventDefault();
  }

  //api request
  getWeather(location) {
  	if(location) {
			$.get(this.OPEN_WEATHER_SEARCH_URL + location + this.OPEN_WEATHER_API_KEY + this.METRIC_UNIT)
	  	.then(res => {
	  		//console.log(res);
	      this.setState({
	        data: {
	        	city: res.name,
	        	country: res.sys.country,
	        	currentWeather: res.weather[0].description,
	        	currentTemp: res.main.temp,
	        	sunrise: ConvertTimestamp(res.sys.sunrise),
	        	sunset: ConvertTimestamp(res.sys.sunset),
	        },
	        search: '',
	      });
	  	});
  	}
  }

	render() {
   return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.search} onChange={this.handleChange} />
          <input type='submit' value='Search' />
        </form>
        <WeatherResults results={this.state.data} />
      </div>
    );
  }
}