
import React from 'react';
import { Provider } from 'react-redux';
import firebase from 'react-native-firebase';
import TestApp from './src/navigation';
import store from './src/store/store';

const config = {
  databaseURL: 'https://testfirebase-5ce5b.firebaseio.com/',
  projectId: 'testfirebase-5ce5b',
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default class extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TestApp />
      </Provider>
    );
  }
}
