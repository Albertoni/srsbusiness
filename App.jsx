import React from 'react';
import ReservationList from './ReservationList.jsx';

class App extends React.Component {

	constructor(props) {
		super(props);
	}

	addRoom(name){
		let newState = {
			numberRooms: this.state.numberRooms + 1,
			roomOrder: []
		};

		// Copy old rooms
		for (var i = 0; i < this.state.roomOrder.length; i++) {
			newState.roomOrder.push(this.state.roomOrder[i]);
		}

		newState.roomOrder.push({
			roomName: name,
			roomTimes: new ReservationList()
		});

		this.setState(newState);
	}

	removeRoom(index){
		if (index >= this.state.roomOrder.length) { throw new Error('Trying to remove a room that does not exist!'); }

		let newState = {
			numberRooms: this.state.numberRooms - 1,
			roomOrder: this.state.roomOrder.splice(index, 1)
		};

		this.setState(newState);
	}

	render() {
		let rooms = this.state.roomOrder.map(function(line, index){
			return(<ReservationList name={line.name}>);
		});

		return (
			<div>
				{rooms}
			</div>
		);
	}
}

export default App;