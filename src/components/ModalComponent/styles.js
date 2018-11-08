import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    // justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
  },
  input: {
    marginTop: 30,
    width: width - 100,
    height: 50,
    paddingLeft: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 3,
    backgroundColor: '#fff',
  },
  text: {
    fontWeight: '600'
  }
});

export default styles;