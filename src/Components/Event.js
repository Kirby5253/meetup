import React, { Component } from 'react';
import RSVPChart from './RSVPChart';


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

	getDataForPie = (event) => {
		const data = [];
		data.push({ name: "Reservations" ,  value: event.yes_rsvp_count}, {name: "Free Slots Available", value: event.rsvp_limit - event.yes_rsvp_count})
		console.log(data);
	}
	

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
							<li className="event-rsvp">{event.yes_rsvp_count} are going
							{event.rsvp_limit ? <p className="event-rsvp">Limited space, click details for availability!</p>: null}
							</li>
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
							{event.rsvp_limit? 
								<li><RSVPChart event={this.props.event} /></li>
								:<li className="event-rsvp">{event.yes_rsvp_count} are going</li>
							}
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
