import React from 'react';
import { shallow } from 'enzyme';
import EventList from '../Components/EventList';
import Event from '../Components/Event';
import { mockEvents } from '../mock-events';

describe('<EventList /> component', () => {
	test('render correct number of events', () => {
		const EventListWrapper = shallow(<EventList 
			events={mockEvents.events} />);
		expect(EventListWrapper.find(Event)).toHaveLength(20);
	});
});
