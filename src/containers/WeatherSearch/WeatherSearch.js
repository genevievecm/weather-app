import React, { Component } from 'react';
import $ from 'jquery';

//components
import SearchInput from '../../components/Inputs/SearchInput';
import SearchButton from '../../components/Buttons/SearchButton';
import WeatherResults from '../../components/WeatherResults/WeatherResults';

//helper functions
import ConvertTimestamp from '../../components/ConvertTimestamp/ConvertTimestamp';

export default class WeatherSearch extends Component {

	API_BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
	API_KEY = '&appid=32c5ffb87028a14d9034601ba5f9da63';
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
			$.get(this.API_BASE_URL + location + this.API_KEY + this.METRIC_UNIT)
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
        	<SearchInput
            search={this.state.search}
            onChange={this.handleChange.bind(this)} />
        	<SearchButton />
        </form>
        <div className="results">
        	{ this.state.data.city ? <WeatherResults results={this.state.data} /> : '' }
        </div>
      </div>
    );
  }
}