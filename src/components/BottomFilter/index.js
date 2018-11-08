import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const FilterComponent = ({ filterHandler, isFilterOn }) => {
  const iconList = '../../../assets/images/list.png';
  const iconCart = '../../../assets/images/car_active.png';
  const leftTextColor = !isFilterOn ? 'transparent' : 'transparent'   // '\ue800' : '\ue801' ;
  const rightTextColor = isFilterOn ? 'transparent' : 'transparent'   // '\ue804' : '\ue805';
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => filterHandler(false)} style={[styles.button, { backgroundColor: leftTextColor }]}>
        <Image
          style={styles.imageLeft}
          source={require(iconList)}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => filterHandler(true)} style={[styles.button, { backgroundColor: rightTextColor }]}>
        <Image
          style={styles.imageRight}
          source={require(iconCart)}
        />
      </TouchableOpacity>
    </View>
  );
};

export default FilterComponent;