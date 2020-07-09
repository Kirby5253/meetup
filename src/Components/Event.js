import React, { Component } from 'react';

class Event extends Component {
  state = {
    showDetails: false,
    event: {
      "created": 1586656475000,
      "duration": 7200000,
      "id": "270001366",
      "name": "16 Week Challenge - Landscape and Cityscape ",
      "date_in_series_pattern": false,
      "status": "upcoming",
      "time": 1598227200000,
      "local_date": "2020-08-23",
      "local_time": "19:00",
      "updated": 1586656475000,
      "utc_offset": -18000000,
      "waitlist_count": 0,
      "yes_rsvp_count": 9,
      "venue": {
        "id": 501101,
        "name": "Rowlett Community Centre",
        "lat": 32.90361785888672,
        "lon": -96.55412292480469,
        "repinned": false,
        "address_1": "5300 Main St",
        "city": "Rowlett",
        "country": "us",
        "localized_country_name": "USA",
        "phone": "9724639196",
        "zip": "75088",
        "state": "TX"
      },
      "is_online_event": false,
      "group": {
        "created": 1417296968000,
        "name": "Rowlett, Texas Photography Club Meetup",
        "id": 18221588,
        "join_mode": "open",
        "lat": 32.93000030517578,
        "lon": -96.55999755859375,
        "urlname": "Rowlett-Texas-Photography-Club-Meetup",
        "who": "Photographers",
        "localized_location": "Rowlett, TX",
        "state": "TX",
        "country": "us",
        "region": "en_US",
        "timezone": "US/Central"
      },
      "link": "https://www.meetup.com/Rowlett-Texas-Photography-Club-Meetup/events/270001366/",
      "description": "<p>Note: This is a Facebook group activity. We do not meet for this event.</p> ",
      "visibility": "public",
      "member_pay_fee": false
      },
  }

  handleShowDetails = () => {
    this.setState({ showDetails: true})
  }

  handleHideDetails = () => {
    this.setState({ showDetails: false})
  }

  render() {
    if (!this.state.showDetails) { return (
      <div className="eventCard">
        <ul>
          <li className="event-time event-date">
            {this.state.event.local_time} - {this.state.event.local_date}
          </li>
          <li className="event-name">
            {this.state.event.name}
          </li>
          <li className="event-group">
            {this.state.event.group.name}
          </li>
          <li className="event-rsvp">
            {this.state.event.yes_rsvp_count} are going
          </li>
        </ul>
        <button 
          className="show-detail-button"
          onClick={() => this.handleShowDetails()}
          >
            Details
        </button>
      </div>)}
    else { return (

    <div className="eventCard__details">
      <ul>
        <li className="event-time__details event-date">
          {this.state.event.local_time} - {this.state.event.local_date}
        </li>
        <li className="event-name__details">
          {this.state.event.name}
        </li>
        <li className="event-group__details">
          {this.state.event.group.name}
        </li>
        <li className="event-rsvp__details">
          {this.state.event.yes_rsvp_count} are going
        </li>
        <li className="event-address__details">
          {this.state.event.address_1}<br/>
          {this.state.event.city}, {this.state.event.state} {this.state.event.zip}
        </li>
        <li className="event-description__details">
          {this.state.event.description}
        </li>
        <li className="event-link__details">
          <a href={this.state.event.link}> Event Link
          </a>
        </li>
      </ul>
      <button 
          className="hide-detail-button"
          onClick={() => this.handleHideDetails()}
          >
            Less Details
        </button>
    </div>
    )}
  }
}


export default Event;
