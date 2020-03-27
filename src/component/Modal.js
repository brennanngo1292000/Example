import React from 'react';
import {View, Modal, TouchableHighlight} from 'react-native';

export default ({visible, onPress, children}) => {
  return (
    <Modal visible={visible} presentationStyle={'overFullScreen'} transparent={true}>
      <TouchableHighlight style={{flex: 1}} onPress={onPress}>
        <View
          style={{
            width: '100%',
            backgroundColor: 'white',
            position: 'absolute',
            bottom: 100,
            borderRadius: 20,
          }}>{children}</View>
      </TouchableHighlight>
    </Modal>
  );
};
