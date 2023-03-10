import { applyMiddleware, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk'



import popup from './popUp.js'
import counterReducer from './couter.js'
import cartSlice from './cartSlice'
import authen from './authen.js'


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["authSlice"] //Chỉ cho phép redux-persist lấy auth
}


// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//     popup: popup,
//     cartSlice: cartSlice,
//     authSlice: authen,
//   },
// })


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  counter: counterReducer,
  popup: popup,
  cartSlice: cartSlice,
  authSlice: authen,
})

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});

export const persistor = persistStore(store);
export default store;

// export default configureStore({reducer})


