import React, { Component } from 'react';
import { getSuggestions } from '../api';
import { InfoAlert } from './Alert';

class CitySearch extends Component {
	state = {
		query: '',
		suggestions: [],
		infoText: ''
	};

	handleInputChanged = (event) => {
		const value = event.target.value;
		this.setState({ query: value });
		getSuggestions(value).then((suggestions) => this.setState({ suggestions }));

		if (value.length > 3 && this.state.suggestions.length === 0) {
			
			this.setState({
				infoText: 'We can not find the city you are looking for. Please try another city',
			});
		} else {
			this.setState({
				infoText: ''
			})
		}
	};

	handleItemClicked = (value, lat, lon) => {
		this.setState({ query: value, suggestions: [], infoText: '' });
		this.props.updateEvents(lat, lon);
	};

	render() {
		return (
			<div className="CitySearch">
				<label htmlFor="city-search" >Search for Events by City Name</label>
				<input 
					placeholder="Search by City" 
					type="text" 
					className="city" 
					id="city-search"
					value={this.state.query} 
					onChange={this.handleInputChanged} />

					
				{this.state.infoText ? (<ul className="city-alert">
					<li>
					<InfoAlert text = {this.state.infoText} />
						</li>
				</ul>) : null}
					
				<ul className="suggestions">
					{this.state.suggestions.map((item) => (
						<li
							key={item.name_string}
							onClick={() => this.handleItemClicked(item.name_string, item.lat, item.lon)}
						>
							{item.name_string}
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default CitySearch;
