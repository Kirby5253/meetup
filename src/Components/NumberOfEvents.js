import React, { Component } from 'react';

class NumberOfEvents extends Component {
	handleInputChanged = (event) => {
		const value = event.target.value;
		this.props.updateEventsNumber(value);
	};

	render() {
		return (
			<div className="numberOfEvents">
				Show{' '}
				<input
					type="number"
					min="1"
					className="showEventsNumber"
					value={this.props.eventsNumber}
					onChange={this.handleInputChanged}
				/>{' '}
				Events
			</div>
		);
	}
}

export default NumberOfEvents;
