import React, { Component } from 'react';
import './App.css';
import EventList from './Components/EventList';
import CitySearch from './Components/CitySearch';
import NumberOfEvents from './Components/NumberOfEvents';
import { getEvents } from './api';
import moment from 'moment';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

class App extends Component {
	state = {
		events: [],
		eventsNumber: '32',
		infoText: ''
	};

	updateEvents = (lat, lon) => {
		let page = this.state.eventsNumber;
		getEvents(lat, lon, page).then((events) => this.setState({ events }));
	};	

	updateEventsNumber = (number) => {
		this.setState({ eventsNumber: number });
	};

	countEventsOnADate = (date) => {
		let count = 0;
		for (let i = 0; i < this.state.events.length; i += 1) {
			if (this.state.events[i].local_date === date) {
				count += 1;
			}
		}
		return count;
	};

	getData = () => {
		const next7Days = []; //Create empty array for the next week
		const currentDate = moment();
		for (let i = 0; i < 7; i += 1) {
			currentDate.add(1, 'days');
			const dateString = currentDate.format('YYYY-MM-DD'); // Format the date

			// Call our function to count number of events on each day 
			const count = this.countEventsOnADate(dateString); 
			next7Days.push({ date: dateString, number: count });
		}
		return next7Days;
	}

	componentDidMount() {
		this.updateEvents();
		if (!navigator.onLine) {
			this.setState({
				infoText:
					'You appear to be offline. Be aware that current events may not be up to date. Search will be available again once connection is established.'
			});
		}
	}

	render() {
		return (
			<div className="App">
				<h1 className="app-title">TimeKiller Events</h1>
				<h2 className="app-subtitle">Look for events to kill the time!</h2>
				<CitySearch updateEvents={this.updateEvents} />
				<NumberOfEvents eventsNumber={this.state.eventsNumber} updateEventsNumber={this.updateEventsNumber} />
				{this.state.infoText.length > 1 ? <div id="alert-offline">{this.state.infoText}</div> : null}
				<div className="data-event">
					<h4 className="data-event__title">Number of Events Over the Next Week</h4>
					<ResponsiveContainer title="Event Activity over the next week"  height={300}>
						<ScatterChart
							margin={{
								top: 20, right: 50, bottom: 20, left: 0,
							}}
						>
							<CartesianGrid />
							<XAxis type="category" dataKey="date" name="date"  />
							<YAxis type="number" dataKey="number" name="number of events" allowDecimals={false}/>
							<Tooltip cursor={{ strokeDasharray: '3 3' }} />
							<Scatter data={this.getData()} fill="#2b7a78" />
						</ScatterChart>
					</ResponsiveContainer>
				</div>
				<EventList events={this.state.events.slice(0, this.state.eventsNumber)} />
			</div>
		);
	}
}

export default App;
