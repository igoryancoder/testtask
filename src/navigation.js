import { StackNavigator } from 'react-navigation';
import HomeScreen from './containers/HomeContainer';
import ShopScreen from './containers/ShopContainer';
import SignInScreen from './containers/SignInContainer';
import SocialSignInScreen from './containers/SocialSignInContainer';
import LogInScreen from './containers/LogInContainer';
import SettingsScreen from './containers/SettingsContainer'

const TestApp = StackNavigator({
  // Home: { screen: HomeScreen },
  LogIn: { screen: LogInScreen },
  Shop: { screen: ShopScreen },
  SignIn: { screen: SignInScreen },
  Settings: { screen: SettingsScreen },
  SocialSignIn: { screen: SocialSignInScreen }
});
export default TestApp;
