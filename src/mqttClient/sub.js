import SingletonClient from './index';

const client = SingletonClient.getClient();

//subscribe topic
export default onsub = () => {
  //power
  client.subscribe('stat/92/air_purifier/power');
  //mode
  client.subscribe('stat/92/air_purifier/mode');
  //speed
  client.subscribe('stat/92/air_purifier/speed');
  //status
  client.subscribe('tele/92/air_purifier/LWT');
  //AQI
  client.subscribe('tele/92/air_purifier/pm2_5');
  //temperature
  client.subscribe('tele/92/air_purifier/temperature');

};