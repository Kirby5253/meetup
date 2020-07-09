import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../Components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => { 
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />)
  })

  test('render number of events element', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
  });

  test('render text input', () => {
    expect(NumberOfEventsWrapper.find('.showEventsNumber')).toHaveLength(1);
  });

  test('event numbers state defaults to 32', () => {
    expect(NumberOfEventsWrapper.state('eventsNumber')).toBe('32')
  })

  test('change state when text input changes', () => {
    const eventObject = { target: { value: '12' }};
    NumberOfEventsWrapper.find('.showEventsNumber').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('eventsNumber')).toBe('12');
  })

});