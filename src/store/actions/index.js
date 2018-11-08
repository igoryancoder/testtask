import { createAction } from 'redux-act';

export const itemsSaga = createAction('get all items');
export const allReducer = createAction('put items to reducer');
export const addSaga = createAction('add new item');
export const addReducer = createAction('put item to reducer')
export const delSaga = createAction('delete item');
export const delReducer = createAction('delete item from reducer')
export const changeReducer = createAction('change item in reducer');
export const changeGlobalColor = createAction('change global color')
export const changeGlobalFontSize = createAction('change global font size');
export const changeGlobalFont = createAction('changeGlobalFont');

export const signInSaga = createAction('sign in with email/password');
export const logInSaga = createAction('login in with email/password');
export const socialSignInSaga = createAction('login in with social network');
export const changeLoginStateReducer = createAction('when bool value of login state changing')

