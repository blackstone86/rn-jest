import React from 'react';
import {create, act} from 'react-test-renderer';
import MyScreen from '../src/MyScreen';

const tree = create(<MyScreen />);

test('snapshot[component]: MyScreen', () => {
  expect(tree).toMatchSnapshot();
});

test('button press', () => {
  // press button
  const button = tree.root.findByProps({testID: 'myButton'}).props;
  act(() => button.onPress());
  // text children equal "button pressed"
  const text = tree.root.findByProps({testID: 'myText'}).props;
  expect(text.children).toBe('button pressed');
});
