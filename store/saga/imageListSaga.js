import axios from 'axios';
import {put, call} from 'redux-saga/effects';
import {
  getImageListSuccess,
  getImageListFail,
} from '../Action/getImageListAction';

// Our worker Saga that logins the user
export default function* listImageSaga(action) {
  try {
    const response = yield call(() => {
      return axios
        .get(
          `http://shibe.online/api/shibes?count=${
            action.imageType === 'carousel' ? 5 : 50
          }&urls=true&httpsUrls=true`,
        )
        .then(response => {
          return response;
        });
    });

    console.log('response : ', response);
    if (response.status == 200) {
      yield put(getImageListSuccess(response.data, action.imageType));
    } else {
      yield put(getImageListFail());
    }
  } catch (error) {}
}
