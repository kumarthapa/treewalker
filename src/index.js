import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import { persistReducer,persistStore } from 'redux-persist';
import { combineReducers,compose,createStore,applyMiddleware} from 'redux';
import Reducer from  './Store/Reducer'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import App from './App';
let composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const RooteReducers=combineReducers({
  StudentData:Reducer
})
const persistConfig={
  key:"root",
  storage,
  blacklist:[""]
}
const Preducer=persistReducer(persistConfig,RooteReducers)
const store=createStore(Preducer,composeEnhancers(applyMiddleware(thunk)))
const persistor=persistStore(store)
export {persistor,store}
ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);