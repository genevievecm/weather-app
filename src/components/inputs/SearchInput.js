import React, { Component } from 'react';
import TextField from 'material-ui/TextField'

export default class SearchInput extends Component {
  render() {
    return <TextField
    	name={this.props.search ? this.props.search : 'search'}
    	type='text' value={this.props.search}
    	hintText="Your city name"
    	className="search-input"
    	onChange={this.props.onChange}
    	/>
  }
}