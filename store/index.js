import {createStore, combineReducers, applyMiddleware} from 'redux';
import {imageReducer} from './Reducer/imageListReducer';
import rootsaga from './saga';
import createSagaMiddleware from 'redux-saga';

const reducers = combineReducers({
  imageReducer: imageReducer,
});

const sagaMiddleware = createSagaMiddleware();

// Connect our store to the reducers
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootsaga);
export {store};
