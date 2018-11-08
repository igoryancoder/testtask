import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

const HomeComponent = ({shop, signIn, logIn}) => {
    return (
      <View style={styles.container}>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={signIn}>
            <Text>SignIn</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={logIn}>
            <Text>LogIn</Text>
          </TouchableOpacity>
          <Text style={styles.text} onPress={shop}>Continue</Text>
        </View>
      </View>
    );
};

export default HomeComponent;