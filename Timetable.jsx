import ReservationList from './ReservationList.jsx';

class Timetable extends React.Component {

	constructor(props) {
		super(props);
		const DEFAULT_NUMBER_ROOMS = 2;

		this.state = {
			numberRooms: DEFAULT_NUMBER_ROOMS,
			roomData: []
		};

		for (var i = 0; i < DEFAULT_NUMBER_ROOMS; i++) {
			this.addRoom('Room '+(i+1));
		}
	}

	addRoom(name){
		let newState = {
			numberRooms: this.state.numberRooms + 1,
			roomData: []
		};

		// Copy old rooms
		for (var i = 0; i < this.state.roomData.length; i++) {
			newState.roomData.push(this.state.roomData[i]);
		}

		newState.roomData.push({
			roomName: name,
			roomTimes: new ReservationList()
		});

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

export default Timetable;