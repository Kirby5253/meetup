import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import EventList from '../Components/EventList';
import Event from '../Components/Event';
import CitySearch from '../Components/CitySearch';
import NumberOfEvents from '../Components/NumberOfEvents';
import { mockEvents } from '../mock-events';

// Unit Testing
describe('<App /> component', () => {
	let AppWrapper;
	beforeAll(() => {
		AppWrapper = shallow(<App />);
	});

	test('render list of events', () => {
		expect(AppWrapper.find(EventList)).toHaveLength(1);
	});

	test('render CitySearch', () => {
		expect(AppWrapper.find(CitySearch)).toHaveLength(1);
	});

	test('render number of events', () => {
		expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
	});

	test('event numbers state defaults to 32', () => {
		expect(AppWrapper.state('eventsNumber')).toBe('32');
	});
});

describe('<App /> integration', () => {
	test('get list of events after user selects a city', async () => {
		const AppWrapper = mount(<App />);
		AppWrapper.instance().updateEvents = jest.fn();
		AppWrapper.instance().forceUpdate();
		const CitySearchWrapper = AppWrapper.find(CitySearch);
		CitySearchWrapper.instance().handleItemClicked('value', 1.1, 1.2);
		expect(AppWrapper.instance().updateEvents).toHaveBeenCalledTimes(1);
		expect(AppWrapper.instance().updateEvents).toHaveBeenCalledWith(1.1, 1.2);
		AppWrapper.unmount(<App />);
	});

	test('change state after get list of events', async () => {
		const AppWrapper = shallow(<App />);
		AppWrapper.instance().updateEvents(1.1, 1.2);
		await AppWrapper.update();
		expect(AppWrapper.state('events')).toEqual(mockEvents.events);
	});

	test('render correct list of events', () => {
		const AppWrapper = mount(<App />);
		AppWrapper.setState({ events: mockEvents.events });
		expect(AppWrapper.find('.Event')).toHaveLength(18);
		AppWrapper.unmount(<App />);
	});

	test('change state when text input changes', () => {
		const AppWrapper = mount(<App />);
		AppWrapper.setState({ events: mockEvents.events });
		const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
		const eventObject = { target: { value: '12' } };
		NumberOfEventsWrapper.find('.showEventsNumber').simulate('change', eventObject);
		AppWrapper.instance().updateEventsNumber(12);
		AppWrapper.instance().forceUpdate();
		const EventListWrapper = mount(
			<EventList events={mockEvents.events.slice(0, AppWrapper.state('eventsNumber'))} />
		);
		expect(AppWrapper.state('eventsNumber')).toBe(12);
		expect(EventListWrapper.find('.Event')).toHaveLength(12);
		AppWrapper.unmount(<App />);
		EventListWrapper.unmount(<EventList />);
	});
});
