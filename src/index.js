import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/Routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
	<MuiThemeProvider>
  	<Routes />
  </MuiThemeProvider>,
  document.getElementById('root')
);