import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  headerText: {
    fontSize: 29,
  },
  text: {
    width: width - 100,
    fontSize: 22,
  },
  inputContainer: {
    marginBottom: 100,
    height: 160,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  input: {
    backgroundColor: '#fff',
    width: width - 100,
    height: 40,
    paddingLeft: 8,
    borderColor: '#ccc',
  },
  button: {
    height: 40,
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width - 100,
    height: 70,
  },
  btn: {
    height: 70,
    justifyContent: 'space-between'
  }
});

export default styles;