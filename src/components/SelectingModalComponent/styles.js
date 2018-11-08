import { StyleSheet, Dimensions } from 'react-native';
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  modal: {
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  main: {
    alignItems: 'center',
    justifyContent: 'space-around',
    width: width - 100,
    // height: 250,
    backgroundColor: '#fff'
  },
  changeColorBtn: {
    width: '100%',
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default styles;