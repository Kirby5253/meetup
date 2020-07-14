import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { shallow } from 'enzyme';
import { mockEvents } from '../mock-events';
import Event from '../Components/Event';

const feature = loadFeature('./src/features/showHideAnEventDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed by default.', ({
    given,
    when,
    then
  }) => {
    let EventWrapper;
    given('the home page has been loaded', () => {
      EventWrapper = shallow(<Event event={mockEvents.events[1]}/>);
    });

    when('the user sees an event', () => {

    });

    then('the details of the event will be collapsed', () => {
      expect(EventWrapper.state('showDetails')).toBe(false);
    });
  });
  test('User can expand an event to see its details.', ({
    given,
    when,
    then
  }) => {
    let EventWrapper;
    given('the user wanted to view information on an event', () => {
      EventWrapper = shallow(<Event event={mockEvents.events[1]}/>);
    });

    when('the user is clicks on an event', () => {
      EventWrapper.find('.show-detail-button').simulate('click');
    });

    then('the user will be able see its details', () => {
      expect(EventWrapper.state('showDetails')).toBe(true);
    });
  });
  test('User can collapse an event to hide its details.', ({
    given,
    when,
    then
  }) => {
    let EventWrapper;
    given('the user no longer wants to see the details of an event', () => {
      EventWrapper = shallow(<Event event={mockEvents.events[1]}/>);
      EventWrapper.setState({showDetails:true})
    });

    when('the user clicks the less details button on an event', () => {
      EventWrapper.find('.hide-detail-button').simulate('click');
    });

    then('the user will be able to hide the details of an event', () => {
      expect(EventWrapper.state('showDetails')).toBe(false);
    });
  });
});
