import SingletonClient from './index';
// const SingletonMessage = (function() {
//   var instance;

//   function createMessage(message) {
//     const message = new Paho.MQTT.Message(message);
//     return client;
//   }

//   return {
//     getClient: function(message) {
//       if (!instance) {
//         instance = createClient(message);
//       }
//       return instance;
//     },
//   };
// })();
const client = SingletonClient.getClient();

export default onPub = (topic, message) => {
  try {
    // var message = new Paho.MQTT.Message('Hello');
    // message.destinationName = topic;
    // client.send(message);
    //nother
    client.publish(topic, message);
  } catch (error) {
    console.log(error);
  }
};
