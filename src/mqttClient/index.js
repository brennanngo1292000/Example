import init from 'react_native_mqtt';
import {AsyncStorage} from 'react-native';

init({
  size: 10000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  reconnect: true,
  sync: {},
});

const SingletonClient = (function() {
  var instance;

  function createClient() {
    const client = new Paho.MQTT.Client('broker.hivemq.com', 8000, '');
    return client;
  }

  return {
    getClient: function() {
      if (!instance) {
        instance = createClient();
      }
      return instance;
    },
  };
})();

export default SingletonClient;