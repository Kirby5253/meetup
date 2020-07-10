import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Components/Event';
import { mockEvents } from '../mock-events';

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockEvents.events[0]} />);
  });


  test('event card hides details by default', () => {
    expect(EventWrapper.state('showDetails')).toBe(false);
  });

  test('render event element with hidden details', () => {
    expect(EventWrapper.find('.Event')).toHaveLength(1);
  });

  test('render event card with hidden details', () => {
    expect(EventWrapper.find('.eventCard')).toHaveLength(1);
  });

  test('render time of event when details are hidden', () => {
    expect(EventWrapper.find('.event-time')).toHaveLength(1);
  });

  test('render date of event when details are hidden', () => {
    expect(EventWrapper.find('.event-date')).toHaveLength(1);
  });

  test('render name of event when details are hidden', () => {
    expect(EventWrapper.find('.event-name')).toHaveLength(1);
  });

  test('render name of group hosting event when details are hidden', () => {
    expect(EventWrapper.find('.event-group')).toHaveLength(1);
  });

  test('render number of people attending when details are hidden', () => {
    expect(EventWrapper.find('.event-rsvp')).toHaveLength(1);
  });

  test('render button to show details', () => {
    expect(EventWrapper.find('.show-detail-button')).toHaveLength(1);
  });

  test('click on button should change details state', () => {
    EventWrapper.find('.show-detail-button').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(true);
  });

  test('click on button should hide details state', () => {
    EventWrapper.find('.hide-detail-button').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(false);
  });

  test('render time of event when details are shown', () => {
    EventWrapper.setState({ showDetails: true})
    expect(EventWrapper.find('.event-time__details')).toHaveLength(1);
  });

  test('render event card with shown details', () => {
    expect(EventWrapper.find('.eventCard__details')).toHaveLength(1);
  });

  test('render date of event when details are hidden', () => {
    expect(EventWrapper.find('.event-date')).toHaveLength(1);
  });

  test('render name of event when details are hidden', () => {
    expect(EventWrapper.find('.event-name__details')).toHaveLength(1);
  });

  test('render name of group hosting event when details are hidden', () => {
    expect(EventWrapper.find('.event-group__details')).toHaveLength(1);
  });

  test('render number of people attending when details are shown', () => {
    expect(EventWrapper.find('.event-rsvp__details')).toHaveLength(1);
  });

  test('render address of event when details are shown', () => {
    expect(EventWrapper.find('.event-address__details')).toHaveLength(1);
  });

  test('render description of event when details are shown', () => {
    expect(EventWrapper.find('.event-description__details')).toHaveLength(1);
  });

  test('render link of event when details are shown', () => {
    expect(EventWrapper.find('.event-link__details')).toHaveLength(1);
  });

  test('render button to hide details', () => {
    expect(EventWrapper.find('.hide-detail-button')).toHaveLength(1);
  });
  

});