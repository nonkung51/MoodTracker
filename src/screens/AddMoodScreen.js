import React, {useState, useEffect} from 'react';
import {View, TextInput, Text, Button} from 'react-native';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';

import {useDispatch} from 'react-redux';

import { moodAdd, moodDelete } from '../actions/moodActions';

export default () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [reason, setReason] = useState('Useless Placeholder');
	const [happiness, setHappiness] = useState(0.5);
	
	const buttonHandler = () => {
		dispatch(moodAdd({ reason, happiness }));
	}

  return (
    <View style={{paddingTop: 50}}>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={setReason}
        value={reason}
      />
      <Slider
        style={{width: 200, height: 40}}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        onValueChange={setHappiness}
        value={happiness}
      />
      <Text>{happiness}</Text>
      <Button
        onPress={buttonHandler}
        title="OK"
      />
      <Button
        onPress={() => {
          dispatch(moodDelete(reason));
        }}
        title="Delete"
      />
      <Button
        onPress={() => {
          navigation.navigate('List');
        }}
        title="List"
      />
    </View>
  );
};
