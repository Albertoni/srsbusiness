import React from 'react';
import ReservationList from './ReservationList.jsx';

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			numberRooms: 0,
			roomOrder: [],
			newRoomName: ""
		}

		this.nameChange = this.nameChange.bind(this);
		this.addRoom = this.addRoom.bind(this);
	}

	nameChange(event){
		let newState = Object.assign({}, this.state); // Not the cleanest way, but there's no need for a deep copy
		newState.newRoomName = event.target.value;
		this.setState(newState);
	}

	addRoom(event){
		event.preventDefault();
		let newState = Object.assign({}, this.state);
		newState.numberRooms = newState.numberRooms + 1;

		newState.roomOrder.push({
			roomName: this.state.newRoomName
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
			console.log(line);
			return(<ReservationList name={line.roomName} key={index} />);
		});

		return (
			<div>
				{rooms}
				<form onSubmit={this.addRoom}>
					<h2>Create new room</h2>
					<label>
						Room name:
						<input type="text" name="name" onChange={this.nameChange} />
					</label>
					<input type="submit" value="Create" />
				</form>
			</div>
		);
	}
}

export default App;