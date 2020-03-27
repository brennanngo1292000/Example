import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StoreApp from './storeApp';
import BottomButton from './component/BottomListButton';
import ViewInfomation from './component/ViewInfo';
import SingletonClient from './mqttClient';
import onSub from './mqttClient/sub';
import onPub from './mqttClient/pub';

export default () => {
  //color app
  const [bgAppColor, setBgAppColor] = useState(['#2193b0', '#6dd5ed']);
  //power
  const [power, setPower] = useState(JSON.stringify({power: 0}));
  //Mode
  const [mode, setMode] = useState(JSON.stringify({mode: 0}));
  //Speed
  const [speed, setSpeed] = useState(JSON.stringify({speed: 1}));
  //status of device
  const [status, setStatus] = useState(JSON.stringify({LWT: 'online'}));
  //AQI
  const [AQI, setAQI] = useState(
    JSON.stringify({pm25: 'Đang cập nhật...', quality: 'Đang cập nhật...'}),
  );
  const [temp, setTemp] = useState(
    JSON.stringify({temperature: 'Đang cập nhật...'}),
  );
  //connect mqtt
  const [isConnect, setConnect] = useState(true);

  //Mqtt
  useEffect(() => {
    client = SingletonClient.getClient();
    client.connect({
      onSuccess: () => {
        console.log('Client is connected');
        onSub();
        client.onMessageArrived = message => {
          switch (message.destinationName) {
            case 'stat/92/air_purifier/power':
              //do something
              setPower(message.payloadString);
              console.log(message.payloadString);
              break;
            case 'stat/92/air_purifier/mode':
              //do something
              setMode(message.payloadString);
              console.log(message.payloadString);
              break;
            case 'stat/92/air_purifier/speed':
              //do something
              setSpeed(message.payloadString);
              console.log(message.payloadString);
              break;
            case 'tele/92/air_purifier/LWT':
              //do somthing
              setStatus(message.payloadString);
              console.log(message.payloadString);
              break;
            case 'tele/92/air_purifier/pm2_5':
              //do something
              setAQI(message.payloadString);
              console.log(message.payloadString);
              break;
            case 'tele/92/air_purifier/temperature':
              //do something
              setTemp(message.payloadString);
              console.log(message.payloadString);
              break;
            default:
              return;
          }
        };
      },
      useSSL: false,
      onFailure: () => {
        console.log('client is disconnected');
      },
    });
  }, []);

  const randomBgColor = () => {
    const listBgColor = [
      {name: 'roseanna', value: ['#ffafbd', '#ffc3a0']},
      {name: 'Blue', value: ['#2193b0', '#6dd5ed']},
      {name: 'Purple', value: ['#cc2b5e', '#753a88']},
      {name: 'Piglet', value: ['#ee9ca7', '#ffdde1']},
      {name: 'Mauve', value: ['#42275a', '#734b6d']},
      {name: 'Mauve', value: ['#bdc3c7', '#2c3e50']},
    ];
    setBgAppColor(
      listBgColor[Math.floor(Math.random() * listBgColor.length)].value,
    );
  };
  const changePower = value => {
    onPub('stat/92/air_purifier/power', JSON.stringify({power: value}));
  };
  const changeSpeed = value => {
    onPub('stat/92/air_purifier/speed', JSON.stringify({speed: value}));
  };
  const changeMode = value => {
    onSub('stat/92/air_purifier/mode', JSON.stringify({mode: value}));
  };

  const initApp = {
    //color of background app
    bgAppColor: bgAppColor,
    randomBgColor: randomBgColor,
    //power
    power: power,
    changePower: changePower,
    //mode
    mode: mode,
    changeMode: changeMode,
    //speed
    speed: speed,
    changeSpeed: changeSpeed,
    //status
    status: status,
    //aqi
    AQI: AQI,
    //temperature
    temp:temp,
  };

  return (
    <StoreApp.Provider store={StoreApp} value={initApp}>
      <LinearGradient
        colors={bgAppColor}
        style={{flex: 1, justifyContent: 'center'}}>
        <View style={{flex: 10}}>
          <ViewInfomation />
        </View>
        <BottomButton />
      </LinearGradient>
    </StoreApp.Provider>
  );
};
