import React, { Component } from 'react';

class Event extends Component {
	state = {
		showDetails: false
	};

	handleShowDetails = () => {
		this.setState({ showDetails: true });
	};

	handleHideDetails = () => {
		this.setState({ showDetails: false });
	};

	render() {
		const { event } = this.props;

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
						<button className="show-detail-button details-btn" onClick={() => this.handleShowDetails()}>
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
							{event.venue ? (
								<li className="event-address__details">
									{event.venue.name && event.venue.name !== event.venue.address_1 ? (
										<span>{event.venue.name}</span>
									) : null}
									<br />
									{event.venue.address_1 ? <span>{event.venue.address_1}</span> : null}
									<br />
									{event.venue.city ? <span>{event.venue.city}</span> : null}
									{event.venue.city && event.venue.state ? <span>, </span> : null}
									{event.venue.state ? <span>{event.venue.state} </span> : null}
									{event.venue.zip ? <span>{event.venue.zip}</span> : null}
								</li>
							) : null}
							<li
								className="event-description__details"
								dangerouslySetInnerHTML={{ __html: event.description }}
							/>
							<li className="event-link__details">
								<a href={event.link} target="_blank" rel="noopener noreferrer">Event Link</a>
							</li>
						</ul>
						<button className="hide-detail-button details-btn" onClick={() => this.handleHideDetails()}>
							Less Details
						</button>
					</div>
				</div>
			);
		}
	}
}

export default Event;
