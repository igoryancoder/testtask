import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Switch from 'react-native-switchbutton';

import styles from './styles';

const SettingsComponent = ({ change, changeTheme, changeFont, changeSize, globalBgColor, colorName, globalFontSize, globalFont, logOut, fontName }) => {
    return (
      <View style={[styles.container, {backgroundColor: globalBgColor}]}>
        <TouchableOpacity onPress={changeTheme} style={styles.button}>
          <Text style={{ fontSize: globalFontSize, fontFamily: globalFont }}>Theme</Text>
          <View style={styles.themeName}>
            <Text style={[styles.themeText, { fontSize: globalFontSize, fontFamily: globalFont }]}>
              {colorName} <Text style={styles.arrow}>{'\ue80C'}</Text>
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={changeFont} style={styles.button}>
          <Text style={{ fontSize: globalFontSize, fontFamily: globalFont }}>Font</Text>
          <View style={styles.themeName}>
            <Text style={[styles.themeText, { fontSize: globalFontSize, fontFamily: globalFont }]}>
              {fontName} <Text style={styles.arrow}>{'\ue80C'}</Text>
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.button}>
          <Text style={{ fontSize: globalFontSize, fontFamily: globalFont }}>Font Size</Text>
          <View style={styles.sizeContainer}>
            <TouchableOpacity onPress={() => changeSize(-1)} style={styles.leftBtn}>
              <Text style={[styles.fontSizeChangeText, { fontSize: globalFontSize, fontFamily: globalFont }]}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeSize(1)} style={styles.rightBtn}>
              <Text style={[styles.fontSizeChangeText, { fontSize: globalFontSize, fontFamily: globalFont }]}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.button}>
          <Text style={{ fontSize: globalFontSize, fontFamily: globalFont }}>Alphabetical Short</Text>
          <Switch
            onValueChange={(b) => change(b)}
          />
        </View>
        <TouchableOpacity style={[styles.button, {marginTop: 30, height: 40}]} onPress={logOut}>
          <Text style={{ fontSize: globalFontSize, fontFamily: globalFont }}>Log out</Text>
        </TouchableOpacity>
      </View>
    );
};

export default SettingsComponent;