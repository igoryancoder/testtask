
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { clearItem } from '../../store/asyncStore';
import ShopComponent from '../../components/ShopComponent';
import FilterComponent from '../../components/BottomFilter';
import HeaderComponent from '../../components/HeaderComponent';
import ModalComponent from '../../components/ModalComponent';

import { connect } from 'react-redux';
import {
  addSaga as addNewItem,
  delSaga as deleteItem,
  changeReducer as changeDataItem,
  itemsSaga as getAllItems,
  changeLoginStateReducer
} from '../../store/actions';


class ShopContainer extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      isModalOpen: false,
      isRedactingData: false,
      isFilterOn: false,
      isScrollEnabled: true
    }
  }

  componentDidMount() {
    this.props.getAllItems();
  }

  addNewData = () => {
    this.props.addNewItem(this.state.inputValue)
  }
  dataCartHandler = (i, b) => {
    if (!this.props.isLogin) {
      alert('sorry you are not log in');
      return false;
    }
    this.props.changeDataItem({ index: i, bool: b });
  }
  deleteItem = (i) => {
    if (!this.props.isLogin) {
      alert('sorry you are not login\nand you have no roots')
      return false;
    }
    this.props.deleteItem(i);
  }

  changeRedactDataWether = () => {
    if (this.state.isModalOpen) {
      if (this.state.inputValue.length === 0) {
        alert('input value is entry')
        return false;
      }
      if (!this.props.isLogin) {
        alert('sorry you are not login\nand you have no roots')
        return false;
      }
      this.setState({ isRedactingData: !this.state.isRedactingData, isModalOpen: !this.state.isModalOpen }, () => this.addNewData());
    } else {
      this.setState({ isRedactingData: !this.state.isRedactingData });
    }
  }

  changeScrollingState = (bool) => {
    this.setState({ isScrollEnabled: bool });
  }
  changeInputValue = (v) => {
    this.setState({ inputValue: v })
  }
  modalOpen = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen })
  }
  filterHandler = (isFilter) => {
    this.setState({ isFilterOn: isFilter });
  }
  logOut = () => {
    clearItem();
    this.props.changeLoginStateReducer(false);
    this.props.navigation.reset([NavigationActions.navigate({ routeName: 'LogIn' })], 0)
  }
  settings = () => {
    this.props.navigation.navigate('Settings')
  }

  render() {
    const { logOut, settings, changeScrollingState } = this;
    const { tmpData, isLogin, globalBgColor, globalFontSize, globalFont } = this.props;
    const { inputValue, isModalOpen, isRedactingData, isFilterOn, isScrollEnabled } = this.state;
    return (
      <React.Fragment>
        <HeaderComponent
          changeRedactDataWether={this.changeRedactDataWether}
          modalOpen={this.modalOpen}
          isModalOpen={isModalOpen}
          logOut={logOut}
          settings={settings}
          isLogin={isLogin}
          isRedactingData={isRedactingData}
        />
        {isModalOpen ?
          <ModalComponent
            valueLength={27 - inputValue.length}
            globalFontSize={globalFontSize}
            globalBgColor={globalBgColor}
            globalFont={globalFont}
            changeInputValue={this.changeInputValue}
          /> :
          <ShopComponent
            changeScrollingState={changeScrollingState}
            isScrollEnabled={isScrollEnabled}
            globalBgColor={globalBgColor}
            isFilterOn={isFilterOn}
            data={tmpData}
            globalFontSize={globalFontSize}
            globalFont={globalFont}
            deleteItem={this.deleteItem}
            isRedactingData={isRedactingData}
            dataCartHandler={this.dataCartHandler}
          />}

        <FilterComponent
          isFilterOn={isFilterOn}
          filterHandler={this.filterHandler} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  tmpData: state.testReducer.tmpData,
  isLogin: state.testReducer.isLogin,
  globalFont: state.testReducer.globalFont,
  globalBgColor: state.testReducer.globalBgColor,
  globalFontSize: state.testReducer.globalFontSize
});
const mapDispatchToProps = (dispatch) => ({
  deleteItem: (id) => dispatch(deleteItem(id)),
  addNewItem: (item) => dispatch(addNewItem(item)),
  changeDataItem: (i, b) => dispatch(changeDataItem(i, b)),
  getAllItems: () => dispatch(getAllItems()),
  changeLoginStateReducer: (b) => dispatch(changeLoginStateReducer(b)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopContainer);
