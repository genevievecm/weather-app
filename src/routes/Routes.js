import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import App from '../containers/App/App';
import WeatherDetails from '../containers/WeatherDetails/WeatherDetails';

const Routes = () =>
	(<Router history={browserHistory}>
			<Route path='/weather' component={App} />
			<Route path='/weather/details' component={WeatherDetails} />
	 </Router>)

export default Routes;