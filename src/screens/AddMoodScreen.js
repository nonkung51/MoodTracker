import React, { useState } from 'react';
import {View, TextInput} from 'react-native';

export default () => {
	const [value, onChangeText] = useState('Useless Placeholder');
  return (
		<View style={{ paddingTop: 50 }}>
    <TextInput
      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      onChangeText={(text) => onChangeText(text)}
      value={value}
    />
		</View>
  );
};
