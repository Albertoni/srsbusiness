import React from 'react';
import ReservationList from './ReservationList.jsx';

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			numberRooms: this.state.numberRooms + 1,
			roomOrder: [],
			newRoomName: ""
		}

		this.nameChange = this.nameChange.bind(this);
		this.addRoom = this.addRoom.bind(this);
	}

	nameChange(event){
		let newState = Object.assign({}, this.state); // Not the cleanest way, but there's no need for a deep copy
		newstate.newRoomName = event.target.value;
		this.setState(newState);
	}

	addRoom(event){
		let newState = Object.assign({}, this.state);
		newState.numberRooms = newState.numberRooms + 1;

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
			return(<ReservationList name={line.name} key={index} />);
		});

		return (
			<div>
				{rooms}
				<form onsubmit={this.addRoom}>
					<h2>Create new room</h2>
					<label>
						Room name:
						<input type="text" name="name" onchange={this.nameChange} />
					</label>
					<input type="submit" value="Create" />
				</form>
			</div>
		);
	}
}

export default App;