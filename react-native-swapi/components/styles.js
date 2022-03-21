import {Platform} from 'react-native';

export default {
  text: {
    fontSize: 18,
    color: '#000',
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
};
