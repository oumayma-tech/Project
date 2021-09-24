import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Test from './Test/test';
import {Provider} from 'react-redux'
import store from './redux/store'
ReactDOM.render(
  <Provider store={store}>
  
  
  <App />
  
  {/* <Test/> */}
  
  </Provider> ,
  document.getElementById('root')
);
