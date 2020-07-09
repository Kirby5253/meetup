import React, { Component } from 'react';


class NumberOfEvents extends Component {
  state = {
    eventsNumber: '32',
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ eventsNumber:value });
  }

  render() {
    return (
      <div className="numberOfEvents">
        Show <input
          type="number"
          className="showEventsNumber"
          value={this.state.eventsNumber}
          onChange={this.handleInputChanged}
        /> Events
      </div>
    )
  }
}

export default NumberOfEvents;
