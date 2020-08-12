import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

export default () => {
  const mood = useSelector((state) => state.mood);

  useEffect(() => {
    console.log(mood);
  }, [mood]);

  return (
    <View>
      <Text>Hey!</Text>
    </View>
  );
};
