import React from 'react';
import { Text, View, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './styles';

const SignInComponent = ({ email, password, submit, redirectToSocialReg, globalBgColor }) => {
  const keyboardHide = () => { Keyboard.dismiss() };
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={[styles.container, { backgroundColor: globalBgColor }]}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={'e-mail'}
            underlineColorAndroid={'transparent'}
            autoCapitalize='none'
            keyboardType={'email-address'}
            onChangeText={(text) => email(text)}
          // value={this.state.text}
          />
          <TextInput
            style={styles.input}
            placeholder={'password'}
            secureTextEntry
            underlineColorAndroid={'transparent'}
            onChangeText={(text) => password(text)}
          // value={this.state.text}
          />
          <TouchableOpacity style={styles.button} onPress={submit}>
            <Text>Sign up</Text>
          </TouchableOpacity>
        </View>
        <Text onPress={redirectToSocialReg}>SignIn with social net.</Text>

      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignInComponent;