import React from 'react';
import { Text, View, TextInput } from 'react-native';
import styles from './styles';

const ModalComponent = ({ changeInputValue, valueLength, globalFontSize, globalFont, globalBgColor }) => {
  const colorText = globalBgColor !== '#e6e7e8' ? '#fff' : '#000';
  return (
    <View style={[styles.container, { backgroundColor: globalBgColor }]}>
      <Text style={[styles.text, { color: colorText, marginTop: 30, fontSize: globalFontSize, fontFamily: globalFont }]}>Add new item</Text>
      <TextInput
        style={[styles.input, { fontSize: globalFontSize, fontFamily: globalFont }]}
        maxLength={27}
        underlineColorAndroid={'transparent'}
        onChangeText={(text) => changeInputValue(text)}
      // value={this.state.text}
      />
      <Text style={[styles.text, { marginTop: 10, color: colorText, fontSize: globalFontSize, fontFamily: globalFont }]}>{`Characters left ${valueLength}`}</Text>
    </View>
  );
};

export default ModalComponent;