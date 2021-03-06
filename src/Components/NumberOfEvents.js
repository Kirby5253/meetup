import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
	state = {
		infoText: ''
	}

	handleInputChanged = (event) => {
		const value = event.target.value;
		this.props.updateEventsNumber(value);

		if( value < 1) {
			this.setState({
				infoText: 'Please use a number greater than 0 to see results.',
			});
		} else {
			this.setState({
				infoText: ''
			})
		}
	}

	render() {
		return (
			<div className="numberOfEvents">
				<label >Show{' '}
				<input
					type="number"
					min="0"
					className="showEventsNumber"
					value={this.props.eventsNumber}
					onChange={this.handleInputChanged}
				/>{' '}
				Events</label>
				{this.state.infoText ? <ErrorAlert  text = {this.state.infoText} />: null}
			</div>
		);
	}
}

export default NumberOfEvents;
