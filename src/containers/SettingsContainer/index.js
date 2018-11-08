
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { clearItem } from '../../store/asyncStore';
import { NavigationActions } from 'react-navigation';
import { bgColors, fontItem } from '../../json';
import { changeGlobalColor, changeGlobalFontSize, changeLoginStateReducer, changeGlobalFont } from '../../store/actions';
import SettingsComponent from '../../components/SettingsComponent';
import Modal from '../../components/SelectingModalComponent';


class SettingsContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'settings',
    headerLeft: (
      <Text style={{ paddingLeft: 15, color: 'blue' }} onPress={() => navigation.goBack()}>Cancel</Text>
    ),
    headerRight: (
      <View />
    )
  });
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
      modalData: [],
      theme: '',
      colorName: 'Main',
      fontName: 'Oswald',
    };
    this.size = 15;
  }

  change = (b) => {
    console.log('change', b)
  }
  changeTheme = () => {
    this.setState({ modalData: bgColors, theme: 'bg' }, async () => {
      await this.setState({ isModalOpen: !this.state.isModalOpen })
    });
  }
  changeFont = () => {
    this.setState({ modalData: fontItem, theme: 'fonts' }, async () => {
      await this.setState({ isModalOpen: !this.state.isModalOpen })
    });
  }
  changeSize = (n) => {
    if (this.size === 14 && n < 0 || this.size === 17 && n > 0) return;
    this.size = this.size + n;
    this.props.changeGlobalFontSize(this.size);
    // console.log(this.size)
  }
  close = (item, n) => {
    if (this.state.theme === 'bg') {
      const name = n === null ? this.state.colorName : n;
      this.setState({ isModalOpen: !this.state.isModalOpen, colorName: name }, async () => {
        if (item !== null) await this.props.changeGlobalColor(item);
      });
    } else {
      const name = n === null ? this.state.fontName : n;
      this.setState({ isModalOpen: !this.state.isModalOpen, fontName: name }, async () => {
        // console.log(item, n)
        if (item !== null) await this.props.changeGlobalFont(item);
      });
    }
  }

  logOut = () => {
    clearItem();
    this.props.changeLoginStateReducer(false);
    this.props.navigation.reset([NavigationActions.navigate({ routeName: 'LogIn' })], 0)
  }

  render() {
    const { change, changeTheme, changeFont, changeSize, close, logOut } = this;
    const { globalBgColor, globalFontSize, globalFont } = this.props;
    const { isModalOpen, colorName, modalData, theme, fontName } = this.state;
    return (
      <React.Fragment>
        <Modal
          close={close}
          theme={theme}
          globalFont={globalFont}
          globalFontSize={globalFontSize}
          themeItemsArr={modalData}
          isModalOpen={isModalOpen}
        />
        <SettingsComponent
          colorName={colorName}
          fontName={fontName}
          globalFont={globalFont}
          globalFontSize={globalFontSize}
          globalBgColor={globalBgColor}
          change={change}
          logOut={logOut}
          changeTheme={changeTheme}
          changeFont={changeFont}
          changeSize={changeSize}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  globalBgColor: state.testReducer.globalBgColor,
  globalFontSize: state.testReducer.globalFontSize,
  globalFont: state.testReducer.globalFont,
});

const mapDispatchToProps = (dispatch) => ({
  changeGlobalColor: (c) => dispatch(changeGlobalColor(c)),
  changeGlobalFontSize: (n) => dispatch(changeGlobalFontSize(n)),
  changeLoginStateReducer: (b) => dispatch(changeLoginStateReducer(b)),
  changeGlobalFont: (f) => dispatch(changeGlobalFont(f))
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);
