import firebase from 'react-native-firebase';
import { GoogleSignin } from 'react-native-google-signin';
import { setLoginData } from '../asyncStore';
import { takeLatest, put, select, call } from 'redux-saga/effects';
import {
  addSaga,
  delSaga,
  itemsSaga,
  addReducer,
  delReducer,
  allReducer,
  signInSaga,
  logInSaga,
  socialSignInSaga,
  changeLoginStateReducer
} from '../actions';


function* getAllItems() {
  try {
    const ref = firebase.database().ref('items/');
    const data = yield call(() => {
      return new Promise((resolve, reject) => {
        ref.once('value', (snapshot) => {
          const data = [];
          const serverData = snapshot.val();
          for (var id in serverData) {
            data.push({ ...serverData[id], itemId: id, isInCart: false });
          }
          resolve(data);
        })
      })
    });
    yield put(allReducer(data));
  } catch (err) {
    console.log('error', err)
  }
}

function* addItemSaga(action) {
  const name = action.payload;
  const ref = firebase.database().ref('items/');
  try {
    yield call(() => ref.push({ name }));
    const previousState = yield select();
    const update = [...previousState.testReducer.tmpData];
    update.push({ name, itemId: null, isInCart: false });
    yield put(addReducer(update));
  } catch (err) {
    console.log('error', err)
  }
}



function* deleteItemSaga(action) {
  try {
    const data = yield select();
    const id = data.testReducer.tmpData[action.payload].itemId;
    if (id !== null) yield call(() => firebase.database().ref('items/' + id).remove());
    const updated = data.testReducer.tmpData.filter((el, id) => (id !== action.payload));
    yield put(delReducer(updated));
  } catch (err) {
    console.log('error', err)
  }

}
// ******************************* login/signIn functions
function* signInFuncSaga(action) {
  const { email, password, nav } = action.payload;
  try {
    const data = yield call(() => firebase.auth().createUserWithEmailAndPassword(email, password));
    // console.log('data', data)
    if (data !== undefined) {
      yield put(changeLoginStateReducer(true));
      setLoginData(data);
      nav('Shop');
    }
  }
  catch (err) {
    console.log('Error', err)
  }
}

function* loginSaga(action) {
  const { email, password, nav } = action.payload;
  try {
    const data = yield call(() => firebase.auth().signInWithEmailAndPassword(email, password));
    // console.log('data', data)
    if (data !== undefined) {
      yield put(changeLoginStateReducer(true));
      setLoginData(data);
      // console.log(action)
      nav('Shop');
    }
  }
  catch (err) {
    console.log('Error', err)
  }
}

function* signInWithSocial(action) {
  const { nav } = action.payload;
  try {
    yield call(() => GoogleSignin.configure());
    const data = yield call(() => GoogleSignin.signIn());
    const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);
    const currentUser = yield call(() => firebase.auth().signInAndRetrieveDataWithCredential(credential));
    // console.log('google login data', currentUser.user.toJSON());
    if (currentUser !== undefined) {
      yield put(changeLoginStateReducer(true));
      setLoginData(currentUser.user);
      nav('Shop');
    }
  } catch (e) {
    console.error(e);
  }
}




function* testSaga() {
  yield takeLatest([addSaga], addItemSaga);
  yield takeLatest([delSaga], deleteItemSaga);
  yield takeLatest([itemsSaga], getAllItems);
  yield takeLatest([signInSaga], signInFuncSaga);
  yield takeLatest([logInSaga], loginSaga);
  yield takeLatest([socialSignInSaga], signInWithSocial);
}

export default testSaga;
