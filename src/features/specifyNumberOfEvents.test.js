import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import NumberOfEvents from '../Components/NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('When user hasn’t specified a number, 32 is the default number.', ({
    given,
    when,
    then
  }) => {
    let AppWrapper;
    given('the user hasn’t modified the number of events to display', () => {
      AppWrapper = shallow(<App />);
    });

    when('the user is viewing the events list page', () => {

    });

    then('32 events will be shown to the user', () => {
      expect(AppWrapper.state('eventsNumber')).toBe('32');
    });
  });
  test('User can change the number of events they want to see.', ({
    given,
    when,
    then
  }) => {
    let AppWrapper;
    given('the user wanted to change the number of events shown', () => {
      AppWrapper = mount(<App />);
      
    });

    when('the user selects a desired amount of items to show', () => {
      const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      const eventObject = { target: { value: '12' } };
      NumberOfEventsWrapper.find('.showEventsNumber').simulate('change', eventObject);
    });

    then('the events list will update to the desired amount selected', () => {
      expect(AppWrapper.state('eventsNumber')).toBe('12');
    });
  });
});

