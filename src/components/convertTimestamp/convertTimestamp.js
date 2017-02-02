export default function ConvertTimestamp(timestamp) {
  	
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