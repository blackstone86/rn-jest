import React from 'react';
import {View} from 'react-native';
import {create} from 'react-test-renderer';

const ViewBox = () => <View style={{backgroundColor: 'white'}} />;

const tree = create(<ViewBox />);

test('snapshot[component]: ViewBox', () => {
  expect(tree).toMatchSnapshot();
});
