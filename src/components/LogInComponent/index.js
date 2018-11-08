import React from 'react';
import { Text, View, TouchableOpacity, TouchableWithoutFeedback, TextInput, Keyboard } from 'react-native';
import styles from './styles';

const SignInComponent = ({ email, password, submit, signIn, recoverPass, globalBgColor }) => {
  const keyboardHide = () => { Keyboard.dismiss() };
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={[styles.container, { backgroundColor: globalBgColor }]}>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>Repeto List</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Please sign in</Text>
          <TextInput
            style={styles.input}
            placeholder={'Email'}
            underlineColorAndroid={'transparent'}
            autoCapitalize='none'
            keyboardType={'email-address'}
            onChangeText={(text) => email(text)}
          // value={this.state.text}
          />
          <TextInput
            style={styles.input}
            placeholder={'Password'}
            secureTextEntry
            underlineColorAndroid={'transparent'}
            onChangeText={(text) => password(text)}
          // value={this.state.text}
          />
          <TouchableOpacity style={styles.button} onPress={submit}>
            <Text>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.btn}>
            <Text>New user?</Text>
            <TouchableOpacity style={styles.button} onPress={signIn}>
              <Text>Sign up</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btn}>
            <Text>Lost your password?</Text>
            <TouchableOpacity style={styles.button} onPress={recoverPass}>
              <Text>Recover</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignInComponent;