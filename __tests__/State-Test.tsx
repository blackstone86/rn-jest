import React from 'react';
import {create, act} from 'react-test-renderer';
import StateScreen from '../src/StateScreen';

const tree = create(<StateScreen />);

test('[State-Test]: render StateScreen correctly', () => {
  expect(tree).toMatchSnapshot();
});

test('[State-Test]: text equal button pressed after button press', () => {
  // press button
  const button = tree.root.findByProps({testID: 'myButton'}).props;
  act(() => button.onPress());
  // text children equal "button pressed"
  const text = tree.root.findByProps({testID: 'myText'}).props;
  expect(text.children).toBe('button pressed');
});

test('[State-Test]: text equal effect is called after call timeout', () => {
  // wait for useEffect
  act(() => {
    jest.runAllTimers();
  });

  const text = tree.root.findByProps({testID: 'myText'}).props;
  expect(text.children).toBe('effect is called');
});
