import { createReducer } from 'redux-act';
import { addReducer, delReducer, changeReducer, allReducer, changeLoginStateReducer, changeGlobalColor, changeGlobalFontSize, changeGlobalFont } from '../actions';

const initialState = {
  tmpData: [],
  isLogin: false,
  globalFont: 'someFont',
  globalFontSize: 15,
  globalBgColor: '#e6e7e8',
  globalFont: 'Merriweather-Regular',
};


const testReducer = createReducer({
  [allReducer]: (state, payload) => ({...state, tmpData: payload }),
  [addReducer]: (state, payload) => ({...state, tmpData: payload }),
  [delReducer]: (state, payload) => ({...state, tmpData: payload }),
  [changeGlobalColor]: (state, payload) => ({...state, globalBgColor: payload }),
  [changeGlobalFont]: (state, payload) => ({...state, globalFont: payload }),
  [changeGlobalFontSize]: (state, payload) => ({...state, globalFontSize: payload}),
  [changeLoginStateReducer]: (state, payload) => ({...state, isLogin: payload }),
  [changeReducer]: (state, payload) => {
    const data = [...state.tmpData];
    data[payload.index].isInCart = payload.bool;
    return {...state, tmpData: data };
  },
}, initialState);

export default testReducer;