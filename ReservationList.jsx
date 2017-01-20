class ReservationList extends React.Component {

	constructor(props) {
		super(props);
		const DEFAULT_NUMBER_ROOMS = 2;

		this.state = {
			currentDate:{
				date: new Date(),
				reservations: []
			},
			days:[{
				date: new Date(),
				reservations: []
			}]
		};
	}

	changeDate(forward){
		let oneDayOffset = 1000 * 3600 * 24; // Remember, JS doesn't account for leap seconds
		if (!forward){
			oneDayOffset = -oneDayOffset;
		}

		let newState = {
			currentDate:{
				date: new Date(Date.now() + oneDayOffset),
				reservations: []
			},
			days:this.state.days
		};

		// Copy old rooms
		for (var i = 0; i < this.state.roomData.length; i++) {
			newState.roomData.push(this.state.roomData[i]);
		}

		this.setState(newState);
	}

	removeRoom(index){
		if (index > this.state.roomData.length) { throw new Error('Trying to remove a room that does not exist!'); }

		let newState = {
			numberRooms: this.state.numberRooms - 1,
			roomData: this.state.roomData.splice(index, 1);
		};

		this.setState(newState);
	}

	render() {
		return (
			<div>
				TODO!!!
			</div>
		);
	}
}

export default ReservationList;