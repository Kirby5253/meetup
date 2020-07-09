import React, { Component } from 'react';
import './App.css';
import EventList from './Components/EventList';
import CitySearch from './Components/CitySearch';
import NumberOfEvents from './Components/NumberOfEvents';

class App extends Component {
	render() {
		return (
		<div className="App">
			<CitySearch />
			<NumberOfEvents />
			<EventList />
		</div>) ;
	}
}

export default App;
