import React from 'react';
import { Text, View, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';

import styles from './styles';

const SettingsComponent = ({ isModalOpen, close, theme, themeItemsArr, globalFontSize, globalFont }) => {
    const renderButtons = () => {
      return themeItemsArr.map((val, kay) => {
        return (<TouchableOpacity key={kay} style={styles.changeColorBtn} onPress={() => close(val.data, val.item, theme)}>
                  <Text style={{fontSize: globalFontSize, fontFamily: globalFont}}>{val.item}</Text>
                </TouchableOpacity>);
      });
    }

    return (
      <Modal
        animationType="slide"
        transparent
        visible={isModalOpen}>
        <TouchableHighlight style={styles.modal} onPress={() => close(null, null)}>
          <View style={styles.main}>
            {renderButtons()}
            <TouchableOpacity style={styles.changeColorBtn} onPress={() => close(null, null)}>
              <Text style={{fontSize: globalFontSize, fontFamily: globalFont}}>close</Text>
            </TouchableOpacity>
          </View>
        </TouchableHighlight>
      </Modal>
    );
};


export default SettingsComponent;