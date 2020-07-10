import React, { Component } from 'react';

class Event extends Component {
	state = {
		showDetails: false,
	};

	handleShowDetails = () => {
		this.setState({ showDetails: true });
	};

	handleHideDetails = () => {
		this.setState({ showDetails: false });
	};

	render() {
    const {event} = this.props;

		if (!this.state.showDetails) {
			return (
				<div className="Event">
					<div className="eventCard">
						<ul>
							<li className="event-time event-date">
								{event.local_time} - {event.local_date}
							</li>
							<li className="event-name">{event.name}</li>
							<li className="event-group">{event.group.name}</li>
							<li className="event-rsvp">{event.yes_rsvp_count} are going</li>
						</ul>
						<button className="show-detail-button" onClick={() => this.handleShowDetails()}>
							Details
						</button>
					</div>
				</div>
			);
		} else {
			return (
				<div className="Event">
					<div className="eventCard__details">
						<ul>
							<li className="event-time__details event-date">
								{event.local_time} - {event.local_date}
							</li>
							<li className="event-name__details">{event.name}</li>
							<li className="event-group__details">{event.group.name}</li>
							<li className="event-rsvp__details">{event.yes_rsvp_count} are going</li>
							
							{event.venue ? <li className="event-address__details">
								{event.venue.address_1}
								<br />
								{event.venue.city}, {event.venue.state} {event.venue.zip}
							</li>: null}


							<li className="event-description__details">{event.description}</li>
							<li className="event-link__details">
								<a href={event.link}>Event Link</a>
							</li>
						</ul>
						<button className="hide-detail-button" onClick={() => this.handleHideDetails()}>
							Less Details
						</button>
					</div>
				</div>
			);
		}
	}
}

export default Event;
