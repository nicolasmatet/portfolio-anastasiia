import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import "../public/favicon/apple-touch-icon.png"
import "../public/favicon/android-chrome-192x192.png"
import "../public/favicon/android-chrome-512x512.png"
import "../public/favicon/favicon-32x32.png"
import "../public/favicon/favicon-16x16.png"

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(null);
