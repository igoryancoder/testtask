import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    width: width,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    backgroundColor: '#ccc',
  },
  main: {
    width: 150,
    textAlign: 'center',
    fontWeight: '600'
  },
  button: {
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLeft: {
    fontSize: 17,
    alignSelf: 'center',
    fontWeight: '600'
  },
  textRight: {
    fontSize: 17,
    fontFamily: 'fontello'
  },
  image: {
    marginTop: 5,
    width: 25,
    height: 25,
  }
});

export default styles;