import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {ListItem} from 'react-native-elements';

const list = [
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
];

export default () => {
  const mood = useSelector((state) => state.mood);

  useEffect(() => {
    console.log(mood);
  }, [mood]);

  const keyExtractor = (item, index) => index.toString();
  const renderItem = ({ item }, index) => {
    console.log('item', item);
    return (
      <ListItem leftAvatar={<Text>😊</Text>} title={item.reason} bottomDivider />
    );
  };

  return (
    <View>
      <FlatList
        keyExtractor={keyExtractor}
        data={mood.moods}
        renderItem={renderItem}
      />
    </View>
  );
};
