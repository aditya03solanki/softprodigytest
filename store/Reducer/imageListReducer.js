import {
  GET_IMAGE_LIST,
  GET_IMAGE_LIST_SUCCESS,
  GET_IMAGE_LIST_FAIL,
} from '../Action/types';

export const initialState = {
  imageData: [],
  gridImageData: [],
};

export const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGE_LIST_SUCCESS:
      if (action.imageType === 'carousel') {
        return {
          ...state,
          imageData: action.data,
        };
      }
      if (action.imageType === 'grid') {
        return {
          ...state,
          gridImageData: action.data,
        };
      }

    default:
      return {...initialState};
  }
};
