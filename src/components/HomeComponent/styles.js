import { StyleSheet, Dimensions } from 'react-native';
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonsContainer : {
    height: height / 3,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#F5FCFF',
  },
  button: {
    height: 45,
    width: width - 120,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc'
  },
  text: {
    color: '#000'
  }
});

export default styles;