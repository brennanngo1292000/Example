import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export default ({title, onPress}) => {
  return (
    <TouchableOpacity onPress = {onPress}>
    <Text
      style={{
        padding: 15,
        textAlign:'center',
        width:'100%',
      }}>
      {title}
    </Text>
  </TouchableOpacity>
  );
};
