import React from 'react';
import Timetable from './Timetable.jsx';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = { count: 5 };

		this.add = this.add.bind(this);
		this.subtract = this.subtract.bind(this);
	}

	add() {
		this.setState({ count: this.state.count + 1 });
	}

	subtract() {
		this.setState({ count: this.state.count - 1 });
	}

	render() {
		return (
			<div>
				count {this.state.count}
				<br />
				<button onClick={this.add} />
				<button onClick={this.subtract} />
			</div>
		);
	}
}

export default App;