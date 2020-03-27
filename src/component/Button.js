import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default ({children, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 50,
        height: 50,
        backgroundColor: 'rgba(200,200,200,0.3)',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {children}
    </TouchableOpacity>
  );
};
