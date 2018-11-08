
import React, { Component } from 'react';
import { checkLogin } from '../../store/asyncStore';
import HomeComponent from '../../components/HomeComponent';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import { Notification } from 'react-native-firebase';
import { changeLoginStateReducer } from '../../store/actions';
class ShopContainer extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props)
    this.state = {}
  }


  componentDidMount() {
    checkLogin().
      then((data) => {
        // console.log('data', data);
        if (data !== null) {
          this.props.changeLoginStateReducer(true);
          this.shop();
        }
      })
    firebase.messaging().hasPermission()
      .then(enabled => {
        if (enabled) {
          firebase.messaging().getToken().then(token => {
            // console.log("LOG: ", token);
          })
        } else {
          firebase.messaging().requestPermission()
            .then(() => {
              alert("User Now Has Permission")
            })
            .catch(error => {
              alert("Error", error)
            });
        }
      });

    this.notificationListener = firebase.notifications().onNotification((notification) => {
      const {
        body,
        data,
        notificationId,
        sound,
        subtitle,
        title
      } = notification;
      // console.log("LOG: ", title, body, JSON.stringify(data))
    });
  }

  shop = () => { this.props.navigation.navigate('Shop') }
  signIn = () => { this.props.navigation.navigate('SignIn') }
  logIn = () => { this.props.navigation.navigate('LogIn') }

  render() {
    const { shop, signIn, logIn } = this;
    return (
      <React.Fragment>
        <HomeComponent
          shop={shop}
          signIn={signIn}
          logIn={logIn}
        />
      </React.Fragment>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  changeLoginStateReducer: (b) => dispatch(changeLoginStateReducer(b)),
});

export default connect(null, mapDispatchToProps)(ShopContainer);
