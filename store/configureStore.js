//import { AsyncStorage } from 'react-native';
import { applyMiddleware, createStore } from 'redux';
import {  persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk';
import reducers from '../reducers';
//import storage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-community/async-storage';

const middleWare = [thunk];
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  };
const persistedReducer = persistReducer(persistConfig, reducers);
const createStoreWithMiddleware = applyMiddleware(...middleWare)(createStore);

export default configureStore = () => {
  let store = createStore(persistedReducer,applyMiddleware(thunk));
  let persistor = persistStore(store)

  return store;
};
