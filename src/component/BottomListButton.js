import React, {useContext, useState} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from './Button';
import StoreApp from '../storeApp';
import Modal from './Modal';
import ButtonModal from './ButtonModal';

export default () => {
  const contextApp = useContext(StoreApp);
  const [visible, setVisible] = useState(false);
  const [typeModal, setTypeModal] = useState('speed');

  const {
    bgAppColor,
    randomBgColor,
    power,
    changePower,
    speed,
    changeSpeed,
    mode,
    changeMode,
  } = contextApp;

  const setPower = () => {
    const valueBefore = JSON.parse(power);
    if (valueBefore.power == 1) changePower(0);
    if (valueBefore.power == 0) changePower(1);
  };

  const setSpeed = value => {
    const valueBefore = JSON.parse(speed);
    if (value != valueBefore.speed) changeSpeed(value);
    setVisible(false);
  };

  const setMode = value => {
    const valueBefore = JSON.parse(mode);
    if (value != valueBefore.mode) changeMode(value);
    setVisible(false);
  };
  const closeModal = () => {
    setVisible(false);
  };
  const openModalSpeed = () => {
    setTypeModal('speed');
    setVisible(true);
  };
  const openModalMode = () => {
    setTypeModal('mode');
    setVisible(true);
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: bgAppColor[1],
          alignItems: 'center',
        }}>
        <Button onPress={setPower}>
          <Icon
            name={'ios-power'}
            size={40}
            color={JSON.parse(power).power == 1 ? bgAppColor[0] : 'white'}
          />
        </Button>
        <Button onPress={openModalSpeed}>
          <Icon2 name={'fan'} size={40} color={'white'} />
        </Button>
        <Button onPress={randomBgColor}>
          <Icon name={'ios-color-filter'} size={40} color={bgAppColor[0]} />
        </Button>
        <Button onPress={openModalMode}>
          <Icon name={'ios-menu'} size={40} color={'white'} />
        </Button>
      </View>
      <Modal visible={visible} onPress={closeModal}>
        {typeModal == 'speed' ? (
          <>
            <Text
              style={{
                padding: 10,
                textAlign: 'center',
                fontSize: 20,
                borderBottomColor: 'rgba(200,200,200,0.5)',
                borderBottomWidth: 1,
                width: '100%',
              }}>
              Tốc độ gió
            </Text>
            <ButtonModal title={'Chế độ 1'} onPress={() => setSpeed(1)} />
            <ButtonModal title={'Chế độ 2'} onPress={() => setSpeed(2)} />
            <ButtonModal title={'Chế độ 3'} onPress={() => setSpeed(3)} />
          </>
        ) : (
          <>
            <Text
              style={{
                padding: 10,
                textAlign: 'center',
                fontSize: 20,
                borderBottomColor: 'rgba(200,200,200,0.5)',
                borderBottomWidth: 1,
                width: '100%',
              }}>
              Chế độ chạy
            </Text>
            <ButtonModal
              title={'Chế độ auto'}
              onPress={() => setMode(0)}
            />
            <ButtonModal
              title={'Chế độ manual'}
              onPress={() => setMode(1)}
            />
          </>
        )}
      </Modal>
    </>
  );
};
