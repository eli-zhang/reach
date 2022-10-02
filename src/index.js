import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, HashRouter } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop/ScrollToTop';
import AccessCodePage from './pages/AccessCodePage/AccessCodePage'
import PersonalReachPage from './pages/PersonalReachPage/PersonalReachPage'

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <HashRouter >
    <ScrollToTop />
    <Routes>
      <Route path="/">
        <Route index={true} element={<AccessCodePage />} />
      </Route>
      <Route path="/code" >
        <Route index={true} element={<AccessCodePage />} />
      </Route>
      <Route path="/home" >
        <Route index={true} element={<PersonalReachPage />} />
      </Route>
      <Route path="*" element={<AccessCodePage />} />
    </Routes>
  </HashRouter >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();