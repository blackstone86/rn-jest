import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';

const MyScreen = () => {
  const [status, setStatus] = useState('');

  useEffect(() => {
    console.log('effect is called');
  });

  return (
    <View>
      <Text testID="myText">{status}</Text>
      <Button
        testID="myButton"
        onPress={() => setStatus('button pressed')}
        title="PressMe"
      />
    </View>
  );
};

export default MyScreen;
