import {
  GET_IMAGE_LIST,
  GET_IMAGE_LIST_SUCCESS,
  GET_IMAGE_LIST_FAIL,
} from './types';

export function getImageList(imageType) {
  return {
    type: GET_IMAGE_LIST,
    imageType,
  };
}

export function getImageListSuccess(data, imageType) {
  return {
    type: GET_IMAGE_LIST_SUCCESS,
    data,
    imageType,
  };
}

export function getImageListFail() {
  return {
    type: GET_IMAGE_LIST_FAIL,
  };
}
