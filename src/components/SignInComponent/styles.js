import { StyleSheet, Dimensions } from 'react-native';
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
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
});

export default styles;