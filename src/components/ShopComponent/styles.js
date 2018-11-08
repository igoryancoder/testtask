import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  itemName: {
    height: 50,
    width: width,
    // alignItems: 'center',
    borderBottomWidth: 1,
  },
  nameText: {
    paddingVertical: 15,
    alignSelf: 'center',
  },
  swipeItem: {
    height: 49,
    backgroundColor: '#ccc'
  },
  redactItem: {
    height: 50,
    width: width,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteBtn: {
    left: 15,
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameRedactText: {
    alignSelf: 'center',
  },
  delText: {
    color: '#fff'
  },
  textLeft: {
    padding: 15,
    fontSize: 22,
    fontFamily: 'fontello',
    textAlign: 'right'
  },
  textRight: {
    padding: 15,
    fontSize: 22,
    fontFamily: 'fontello',
    textAlign: 'left'
  }
});

export default styles;