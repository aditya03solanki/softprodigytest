import {takeEvery, all} from 'redux-saga/effects';
import {GET_IMAGE_LIST} from '../Action/types';
import imageListSaga from './imageListSaga';

export default function* sagaCall() {
  yield all([takeEvery(GET_IMAGE_LIST, imageListSaga)]);
}
