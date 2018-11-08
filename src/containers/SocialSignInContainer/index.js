
import React, { Component } from 'react';
import SocialSignInComponent from '../../components/SocialSignInComponent';
import { connect } from 'react-redux';
import { socialSignInSaga } from '../../store/actions';

class SocialSignInContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  googleLogin = () => {
    this.props.socialSignInSaga({ nav: this.props.navigation.navigate });
  }

  render() {
    const { isSignInInProgress } = this.state;
    const { googleLogin } = this;
    return (
      <React.Fragment>
        <SocialSignInComponent
          googleLogin={googleLogin}
          isSignInInProgress={isSignInInProgress}
        />
      </React.Fragment>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  socialSignInSaga: (a) => dispatch(socialSignInSaga(a)),
});
export default connect(null, mapDispatchToProps)(SocialSignInContainer);
