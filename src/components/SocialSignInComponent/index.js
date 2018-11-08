import React from 'react';
import { GoogleSigninButton } from 'react-native-google-signin';
import { View } from 'react-native';
import styles from './styles';

const SocialSignInComponent = ({ googleLogin, isSignInInProgress }) => {

    return (
      <View style={styles.container}>
        <GoogleSigninButton
          style={{ width: 48, height: 48 }}
          size={GoogleSigninButton.Size.Icon}
          color={GoogleSigninButton.Color.Dark}
          onPress={googleLogin}
          disabled={isSignInInProgress}
        />
      </View>
    );
};

export default SocialSignInComponent;