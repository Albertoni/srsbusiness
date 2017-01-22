import React from 'react';
import ReservationList from './ReservationList.jsx';

class App extends React.Component {

	constructor(props) {
		super(props);
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
				<ReservationList name="Test 1" />
				<ReservationList name="Test 2" />
			</div>
		);
	}
}

export default App;