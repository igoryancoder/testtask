import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Swipeable from 'react-native-swipeable';
import styles from './styles';

const ShopComponent = ({
  data,
  isFilterOn,
  dataCartHandler,
  isRedactingData,
  deleteItem,
  globalBgColor,
  globalFontSize,
  globalFont,
  changeScrollingState,
  isScrollEnabled
}) => {
  // if(data.length===0) return false;
  const colorText = globalBgColor !== '#e6e7e8' ? '#fff' : '#000';
  const renderItem = () => {
    return data.map((val, index) => {
      if (isFilterOn && !val.isInCart) return null;
      return (
        <Swipeable key={index} style={styles.itemName}
          onSwipeStart={() => changeScrollingState(false)}
          onSwipeRelease={() => changeScrollingState(true)}
          leftButtons={[
            <TouchableOpacity onPress={() => dataCartHandler(index, true)} style={styles.swipeItem}>
              <Text style={[styles.textLeft, { color: val.isInCart ? 'red' : "#000" }]}>{'\ue809'}</Text>
            </TouchableOpacity>
          ]}
          rightButtons={[
            <TouchableOpacity onPress={() => dataCartHandler(index, false)} style={styles.swipeItem}>
              <Text style={[styles.textRight, { color: !val.isInCart ? 'red' : "#000" }]}>{'\ue808'}</Text>
            </TouchableOpacity>
          ]}>
          <Text style={[styles.nameText, { color: colorText, fontFamily: globalFont, fontSize: globalFontSize }]}>{val.name}</Text>
        </Swipeable>
      )
    })
  }

  const renderRedactItem = () => {
    return data.map((val, index) => {
      if (isFilterOn && !val.isInCart) return null;
      return (
        <View key={index} style={styles.redactItem}>
          <TouchableOpacity onPress={() => deleteItem(index)} style={styles.deleteBtn}>
            <Text style={styles.delText}>-</Text>
          </TouchableOpacity>
          <Text style={[styles.nameRedactText, { color: colorText, fontFamily: globalFont, fontSize: globalFontSize }]}>{val.name}</Text>
        </View>
      )
    })
  }

  return (
    <View style={[styles.container, { backgroundColor: globalBgColor }]}>
      <ScrollView scrollEnabled={isScrollEnabled}>
        {isRedactingData ? renderRedactItem() : renderItem()}
      </ScrollView>
    </View>
  );
};

export default ShopComponent;