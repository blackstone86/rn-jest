/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {addNumbers} from '../src/utils/mathUtils';
import {track} from '../src/utils/analyticsUtils';

jest.mock('../src/utils/analyticsUtils');

it('[App-Test]: renders correctly', () => {
  renderer.create(<App />);
});

it('[App-Test]: add numbers', () => {
  expect(addNumbers(1, 2)).toEqual(3);
  expect(track).toBeCalledWith('addNumbers');
});
