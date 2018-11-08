import { StyleSheet, Dimensions } from 'react-native';
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    height: 60,
    width: width,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff'
  },
  sizeContainer: {
    width: 160,
    height: 37,
    flexDirection: 'row',
  },
  fontSizeChangeText: {
    color: 'blue'
  },
  arrow: {
    fontFamily: 'fontello'
  },
  leftBtn: {
    borderWidth: StyleSheet.hairlineWidth,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'blue',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 0
  },
  rightBtn: {
    borderWidth: StyleSheet.hairlineWidth,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'blue',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 8
  }
});

export default styles;