//import React from 'react';
const ConvertTimestamp = (props) => {
  	let d = new Date(props.timestamp * 1000),	// Convert timestamp to milliseconds
		hour = d.getHours(),
		h = hour,
		min = d.getMinutes(),
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

		//return time;
		//console.log(time);
}

export default ConvertTimestamp;