import React, { Component } from 'react';
import './App.css';
import EventList from './Components/EventList';
import CitySearch from './Components/CitySearch';
import NumberOfEvents from './Components/NumberOfEvents';
import { getEvents } from './api';

class App extends Component {
	state = {
		events: [],
		eventsNumber: '32'
	};

	updateEvents = (lat, lon) => {
		let page = this.state.eventsNumber;
		getEvents(lat, lon, page).then((events) => this.setState({ events }));
	};

	componentDidMount() {
		this.updateEvents();
	}

	updateEventsNumber = (number) => {
		this.setState({ eventsNumber: number });
	};

	render() {
		return (
			<div className="App">
				<CitySearch updateEvents={this.updateEvents} />
				<NumberOfEvents eventsNumber={this.state.eventsNumber} updateEventsNumber={this.updateEventsNumber} />
				<EventList events={this.state.events.slice(0, this.state.eventsNumber)} />
			</div>
		);
	}
}

export default App;
