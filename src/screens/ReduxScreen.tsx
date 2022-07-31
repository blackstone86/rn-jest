import React from 'react';
import {View, Text} from 'react-native';
// import {useSelector, useDispatch} from 'react-redux';
// {useEffect, useState}
const ReduxScreen = () => {
  // const status = useSelector(s => s.status);
  // cosnt dispatch = useDispatch();

  // useEffect(() => {
  //   setTimeout(() => {
  //     useDispatch({
  //       type: 'setStatus',
  //       payload: 'timeout is called'
  //     })
  //   }, 1000)
  // }, [dispatch]);

  return (
    <View>
      <Text testID="myText">111</Text>
    </View>
  );
};

export default ReduxScreen;
