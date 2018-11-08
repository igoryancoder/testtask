import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const HeaderComponent = ({ isRedactingData, modalOpen, changeRedactDataWether, isModalOpen, isLogin, settings }) => {
  // const rightText = isRedactingData ? 'Done' : '\ue80B';
  const headerText = isModalOpen ? 'Add new item' : 'Groceries';
  const renderAddButton = () => {
    const leftText = isModalOpen ? 'Cancel' : '+';
    return (
      <TouchableOpacity onPress={modalOpen} style={styles.button}>
        <Text style={styles.textLeft}>{leftText}</Text>
      </TouchableOpacity>
    )
  }

  const renderLogout = () => {
    if (isLogin) {
      return (<TouchableOpacity onPress={settings} style={styles.button}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/settings.png')}
        />
      </TouchableOpacity>)
    } else {
      return <View style={styles.button} />
    }
  }

  return (
    <View style={styles.container}>
      {isRedactingData ? renderAddButton() : renderLogout()}
      <Text style={styles.main}>{headerText}</Text>
      <TouchableOpacity onPress={changeRedactDataWether} style={styles.button}>
        {isRedactingData ?
          <Text style={styles.textRight}>Done</Text> :
          <Image
            style={styles.image}
            source={require('../../../assets/images/edit.png')}
          />
        }

      </TouchableOpacity>
    </View>
  );
};

export default HeaderComponent;