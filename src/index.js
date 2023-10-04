import React, { useEffect }  from 'react';
import { createRoot } from 'react-dom/client';
import { Routes, Route, HashRouter, Navigate, BrowserRouter, useNavigate } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop/ScrollToTop';
import AccessCodePage from './pages/AccessCodePage/AccessCodePage'
import HomePage from './pages/HomePage/HomePage'
import LineagePage from './pages/LineagePage/LineagePage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import LoginPage from './pages/LoginPage/LoginPage'
import LogoutPage from './pages/LogoutPage/LogoutPage'
import Cookies from 'universal-cookie';
import { GoogleOAuthProvider } from '@react-oauth/google';

const cookies = new Cookies();

const root = createRoot(
  document.getElementById('root')
);

const App = () => {
  const navigate = useNavigate();
  const loginCredential = cookies.get('loginCredential');

  const isLoggedIn = () => {
    if (cookies.get('loginCredential')) {
      return true;
    } else {
      return false;
    }
  }

  const onLoginSuccess = (response) => {
    const credential = response.credential;
    if (credential !== undefined) {
      cookies.set('loginCredential', credential);
      console.log("Successfully logged in.")
      if (isLoggedIn()) {
        navigate('/home');
      }
    }
  };

  const onLoginFailure = (error) => {
      console.error("Google Sign-In Error:", error);
  };

  const onLogout = () => {
    cookies.remove('loginCredential')
    if (!isLoggedIn()) {
      navigate('/login');
    }
  }

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate('/login');
    }
  }, [navigate, loginCredential]);
  

  return (
    <>
     <ScrollToTop />
      {/* {!accessCodeExists() && <Navigate replace to="/"/>} */}
      <Routes>
        <Route path="/" element={isLoggedIn() ? <HomePage /> :  <Navigate replace to="login" />} />
        <Route path="home" element={<HomePage />} />
        <Route path="lineage" element={<LineagePage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="login" element={isLoggedIn() ? <HomePage /> : <LoginPage onSuccess={onLoginSuccess} onFailure={onLoginFailure} />} /> 
        <Route path="logout" element={<LogoutPage onLogout={onLogout}/>} /> 
        <Route path="*" element={<Navigate replace to={isLoggedIn() ? "home" : "/login"} />} />
      </Routes>
    </>
  );
}

root.render(
  <GoogleOAuthProvider clientId="369102416930-go89g0ls12g4tnfg89dtto97hv06i76n.apps.googleusercontent.com">
    <React.StrictMode>
      <BrowserRouter forceRefresh={true}>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </GoogleOAuthProvider>);