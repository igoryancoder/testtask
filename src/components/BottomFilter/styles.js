import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    borderTopWidth: 1,
    backgroundColor: '#ccc',
  },
  button: {
    width: width / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageLeft: {
    width: 50,
    height: 40
  },
  imageRight: {
    width: 55,
    height: 40
  }
  // text: {
  //   fontSize: 25,
  //   fontFamily: 'fontello'
  // }
});

export default styles;