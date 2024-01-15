import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./css/reset.css";
import "./css/common/common.css";
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { persistor, store } from "./store.js";
import { PersistGate } from "redux-persist/integration/react";
// 스토어에 있는 데이터를 로컬스토리지나 세션스토리지에 저장시켜 데이터의 지속성을 유지시키게함
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


