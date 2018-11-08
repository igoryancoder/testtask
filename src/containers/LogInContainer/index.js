
import React, { Component } from 'react';
import LogInComponent from '../../components/LogInComponent';
import { connect } from 'react-redux';
import { checkLogin } from '../../store/asyncStore';
import { logInSaga, changeLoginStateReducer } from '../../store/actions';
class LogInContainer extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  componentDidMount() {
    checkLogin().
      then((data) => {
        // console.log('data', data);
        if (data !== null) {
          this.props.changeLoginStateReducer(true);
          this.props.navigation.navigate('Shop');
        }
      })
  }

  email = (email) => {
    this.setState({ email });
  }
  password = (password) => {
    this.setState({ password });
  }
  submit = () => {
    const { email, password } = this.state;
    if (email.length === 0 || password.length === 0) return;
    this.props.logInSaga({ email, password, nav: this.props.navigation.navigate });
  }
  signIn = () => { this.props.navigation.navigate('SignIn') }
  recoverPass = () => { alert('in progress') }

  render() {
    const { email, password, submit, signIn, recoverPass } = this;
    const { globalBgColor } = this.props;
    return (
      <React.Fragment>
        <LogInComponent
          globalBgColor={globalBgColor}
          email={email}
          password={password}
          submit={submit}
          signIn={signIn}
          recoverPass={recoverPass}
        />
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  globalBgColor: state.testReducer.globalBgColor,
});

const mapDispatchToProps = (dispatch) => ({
  logInSaga: (a) => dispatch(logInSaga(a)),
  changeLoginStateReducer: (b) => dispatch(changeLoginStateReducer(b)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LogInContainer);
