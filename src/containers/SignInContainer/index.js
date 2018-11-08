
import React, { Component } from 'react';
import SignInComponent from '../../components/SignInComponent';
import { connect } from 'react-redux';
import { signInSaga } from '../../store/actions';

class SignInContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  email = (email) => {
    this.setState({ email });
  }
  password = (password) => {
    this.setState({ password });
  }
  redirectToSocialReg = () => {
    this.props.navigation.navigate('SocialSignIn');
  }
  submit = () => {
    const { email, password } = this.state;
    if (email.length === 0 || password.length === 0) return;
    this.props.signInSaga({ email, password, nav: this.props.navigation.navigate });
  }

  render() {
    const { email, password, redirectToSocialReg, submit } = this;
    const { globalBgColor } = this.props;
    return (
      <React.Fragment>
        <SignInComponent
          email={email}
          globalBgColor={globalBgColor}
          password={password}
          redirectToSocialReg={redirectToSocialReg}
          submit={submit}
        />
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  globalBgColor: state.testReducer.globalBgColor,
});

const mapDispatchToProps = (dispatch) => ({
  signInSaga: (a) => dispatch(signInSaga(a)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
