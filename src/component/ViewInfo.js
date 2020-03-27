import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import Pulse from 'react-native-pulse';
import StoreApp from '../storeApp';

export default ({widthPulse = 200, heightPulse = 200}) => {
  const contextApp = useContext(StoreApp);
  const {bgAppColor, power, speed, AQI, temp} = contextApp;

  return (
    <>
      <View style={{flexDirection: 'row', padding: 30, alignSelf: 'center'}}>
        <Text style={{color: 'white'}}>Nhiệt độ hiện tại: </Text>
        <Text style={{color: 'white'}}>{JSON.parse(temp).temperature}</Text>
        {JSON.parse(temp).temperature == 'Đang cập nhật...' ?? (
          <Text
            style={{
              lineHeight: 10,
              fontSize: 10,
              color: 'white',
              paddingRight: 5,
            }}>
            o
          </Text>
        )}
      </View>
      <View style={{paddingVertical: 10, alignItems: 'center'}}>
        {JSON.parse(power).power == 1 ? (
          <Pulse
            color={'white'}
            numPulses={3}
            diameter={400}
            speed={1}
            duration={2000}
          />
        ) : null}
        <View
          style={{
            width: widthPulse,
            height: heightPulse,
            borderRadius: widthPulse / 2,
            overflow: 'hidden',
            backgroundColor: bgAppColor[0],
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', alignSelf: 'center', fontSize: 16}}>
            Chất lượng không khí
          </Text>
          <Text
            style={{
              color: 'white',
              alignSelf: 'center',
              fontSize: 25,
              paddingTop: 10,
              fontWeight: '400',
              textAlign: 'center',
            }}>
            {JSON.parse(AQI).quality}
          </Text>
          <Text style={{color: 'white'}}>Chỉ số {JSON.parse(AQI).pm25}</Text>
        </View>
      </View>
      <Text
        style={{
          color: 'white',
          padding: 20,
          textAlign: 'center',
          alignSelf: 'center',
        }}>
        Tốc độ gió {JSON.parse(speed).speed}
      </Text>
    </>
  );
};
