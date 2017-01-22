import React from 'react';
class ReservationList extends React.Component {

	constructor(props) {
		super(props);
		const DEFAULT_NUMBER_ROOMS = 2;

		console.log(props);

		this.state = {
			name: props.name,
			currentDate: new Date(),
			reservations:[/*{
				startTime: new Date()
				endTime: new Date()
			}*/]
		};
	}

	changeDate(forward){
		let oneDayOffset = 1000 * 3600 * 24; // Remember, JS doesn't account for leap seconds
		if (!forward){
			oneDayOffset = -oneDayOffset; // Inverts the direction
		}

		let newState = {
			currentDate: new Date(Date.now() + oneDayOffset),
			reservations: this.state.reservations
		};

		this.setState(newState);
	}

	addReservation(start, end){
		// Find closest (maybe change to use binary search?)
		let newState = {
			currentDate: this.state.currentDate,
			reservations: this.state.reservations
		}

		for (var i = 0; i < newState.reservations.length; i++) {
			if (newState.reservations[i].startTime > end){ // TODO: double-check and triple-test this logic
				// Assume all reservations are stored in order.
				// if the reservation starts after the one we are adding begins, then the previous one might clash.
			}
		}

		// Check overlap
	}

	render() {
		return (
			<div>
				{this.state.name}
			</div>
		);
	}
}

export default ReservationList;