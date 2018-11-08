import { all } from 'redux-saga/effects';
import testSaga from './testSaga';

function* rootSaga() {
  yield all([
    testSaga()
  ]);
};

export default rootSaga;