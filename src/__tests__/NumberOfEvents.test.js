import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../Components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
	let NumberOfEventsWrapper;
	beforeAll(() => {
		NumberOfEventsWrapper = shallow(<NumberOfEvents />);
	});

	test('render number of events element', () => {
		expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
	});

	test('render text input', () => {
		expect(NumberOfEventsWrapper.find('.showEventsNumber')).toHaveLength(1);
	});
});
